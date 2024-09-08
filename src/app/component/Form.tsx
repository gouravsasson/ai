import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface SubscribeDialogProps {
  open: boolean;
  handleClose: () => void;
}

export default function SubscribeDialog({ open, handleClose }: SubscribeDialogProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // Collecting form data
    const formData = new FormData(event.currentTarget);
  
    // Send form data via EmailJS
    emailjs.send("service_jupt6hf", "template_yl0htny", {
      to_name: "thefinansol",
      from_name: formData.get("name"), // Replace with the appropriate form field
      user_number: formData.get("phoneNumber"), // Replace with the appropriate form field
      message: formData.get("message"), // This can be dynamic if needed
      user_name: formData.get("name"),
      user_email: formData.get("email"),
    },'1ky95jpeK2P0sGFzk')
    .then((result) => {
      console.log('Email successfully sent!', result.text);
    }, (error) => {
      console.log('Failed to send email.', error.text);
    });
  
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates occasionally.
        </DialogContentText>
        
        <TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="name"
          name="name"
          label="Full Name"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="phoneNumber"
          name="phoneNumber"
          label="phoneNumber"
          type="text"
          fullWidth
          variant="standard"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
         <TextField
          required
          margin="dense"
          id="message"
          name="message"
          label="message"
          type="text"
          fullWidth
          variant="standard"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
