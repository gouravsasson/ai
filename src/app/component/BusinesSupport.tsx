import React from 'react';
import ShineBorder from '@/components/magicui/shine-border';
import Image from 'next/image';
import img1 from '@/assets/icons/dataan.png';
import img2 from '@/assets/icons/python.png';
import img3 from '@/assets/icons/java.png';
import img4 from '@/assets/icons/seller.png';
import img5 from '@/assets/icons/sap.png';
import img6 from '@/assets/icons/developer.png';

function BusinessSupport() {
  const services = [
    { icon: img1, text: 'Data Visualisation', className: 'p-20' },
    { icon: img2, text: 'Python Development', className: 'p-20' },
    { icon: img3, text: 'Java Development', className: 'p-20' },
    { icon: img4, text: 'Salesforce Development', className: 'py-20 px-14' },
    { icon: img5, text: 'SAP Development', className: 'p-20' },
    { icon: img6, text: 'Web Development', className: 'p-20' },
  ];

  return (
    <div className="px-52">
      <h1 className="text-center text-5xl my-5">Business Support</h1>
      <div className="mt-20 flex flex-wrap justify-center gap-20">
        {services.map((service, index) => (
          <div key={index}>
            <ShineBorder
              icon={<Image className="h-10 w-10" src={service.icon} alt={`${service.text} Icon`} />}
              className={service.className}
            >
              <span>{service.text}</span>
            </ShineBorder>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessSupport;
