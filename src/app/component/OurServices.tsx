'use client'

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from "../../assets/img/img2.png";
import img2 from "../../assets/img/img3.png";
import vid1 from "@/assets/video/iphone15.gif";



gsap.registerPlugin(ScrollTrigger);

function OurServices() {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);

  useEffect(() => {
    [containerRef1, containerRef2, containerRef3].forEach(ref => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="h-full w-full px-20">
        <div className="mt-[100px] md:flex justify-evenly ">
          <div className="" ref={containerRef1}>
            <h1 className="font-Lexend text-[50px] text-[#9086EF]">
              AI Chatbots
            </h1>
            <p className="text-2xl font-Lexend font-normal mt-[32px]">
              Looking for a smarter way to streamline your business processes and
               engage with your customers efficiently? Our AI-powered Chatbots,
               integrated with ChatGPT and RAG Pattern AI Technology, redefine the
               way you connect, communicate, and operate. With seamless Chatbot
               Development, Integration, and Analytics, our solutions are tailored for
               cutting-edge performance and exceptional user experience.
            </p>
          </div>
          <Image
            className=""
            src={vid1}
            alt="gif"></Image>
        </div>


        <div className="mt-[100px] md:flex justify-evenly ">
          <Image className="hidden md:block h-[570px]" src={img} alt="Logo" />
          <div className="" ref={containerRef2}>
            <h1 className="font-Lexend text-[50px] text-[#9086EF]">
              Text Analytics
            </h1>
            <p className="text-2xl font-Lexend font-normal mt-[32px]">
              Text Analytics is the process of mining the text and discovering insights
              from it. Some of the techniques used in Text Analytics are Summarization,
              Clustering, Categorization and Information Extraction. Text Analytics make
              possible chatbots, sentiment analysis, knowledge management and so on.
            </p>
          </div>
          <Image className=" md:hidden " src={img} alt="Logo" />
        </div>

        <div className="mt-[100px] md:flex justify-evenly ">
          <div className="" ref={containerRef3}>
            <h1 className="font-Lexend text-[50px] text-[#9086EF]">
              Image and Video Analytics
            </h1>
            <p className="text-2xl font-Lexend font-normal mt-[32px]">
              Image and Video analysis involves processing an image or a video, into
              fundamental components to extract meaningful information and actionable
              insights. Image and Video analysis can include tasks such as finding shapes,
              detecting edges, removing noise, counting objects, and calculating
              statistics for texture analysis or image quality or real-time analysis and
              alerts, tracking, autonomous driving and so on.
            </p>
          </div>
          <Image className=" md:h-[570px]" src={img2} alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default OurServices;
