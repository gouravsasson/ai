'use client'

import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import SubscribeDialog from "./Form";

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const scrollToStickySection = () => {
  //   document.getElementById("sticky-section").scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      <SubscribeDialog open={open} handleClose={handleClose} />
      <div>
        <div className=" flex items-center justify-between  py-5 bg-transparent px-5">
          <Image className=" w-32 md:w-52 " src={logo} alt="Logo" />
          <div className=" hidden md:block md:flex gap-10 mr-20">
            <button className=" text-[#FFFFFF] font-Lexend Light font-bold">Home</button>
            <button 
              className=" text-[#FFFFFF] font-Lexend font-bold" 
              // onClick={scrollToStickySection}
            >
              ChatBot
            </button>
            {/* <button className=" text-[#FFFFFF] font-Lexend font-bold">Services</button> */}
            <button className=" text-[#FFFFFF] font-Lexend font-bold">Contact Us</button>
          </div>
          <button 
            className=" font-Lexend bg-white px-5 py-2 rounded-3xl font-bold text-[#000000]" 
            onClick={handleClickOpen}
          >
            Reach Us
          </button>
        </div>
      </div>
    </> 
  );
}

export default Navbar;
