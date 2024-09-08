import React from 'react'
import ShineBorder from '@/components/magicui/shine-border';
import Image from "next/image";
import img1 from "@/assets/icons/dataan.png"
import img2 from "@/assets/icons/python.png"
import img3 from "@/assets/icons/java.png"
import img4 from "@/assets/icons/seller.png"
import img5 from "@/assets/icons/sap.png"
import img6 from "@/assets/icons/developer.png"
function BusinesSupport() {
    
  return (
    <>
    <div className=' px-52'>
    <div className=" text-center text-5xl my-5" >Business Support</div>
    <div className='mt-20 flex flex-wrap justify-center gap-20'> 
    <div><ShineBorder icon={<Image className=" h-10 w-10" src={img1} alt="Data Visualization Icon" />} children="Data Visualisation" className=' p-20'/></div>
     <div><ShineBorder icon={<Image className=" h-10 w-10" src={img2} alt="Data Visualization Icon" />} children="Python Development" className=' p-20'/></div>
    <div><ShineBorder icon={<Image className=" h-10 w-10" src={img3} alt="Data Visualization Icon" />} children="Java Development" className=' p-20'/></div>
    <div><ShineBorder icon={<Image className=" h-10 w-10" src={img4} alt="Data Visualization Icon" />} children="Salesforce Development" className=' py-20 px-14'/></div>
    <div><ShineBorder icon={<Image className=" h-10 w-10" src={img5} alt="Data Visualization Icon" />} children="SAP Development" className=' p-20'/></div>
    <div><ShineBorder icon={<Image className=" h-10 w-10" src={img6} alt="Data Visualization Icon" />} children="Web development" className=' p-20'/></div> 
    
    </div>
    </div>
    </>
  )
}

export default BusinesSupport