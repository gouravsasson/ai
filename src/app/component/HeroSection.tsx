'use client'

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import Image from "next/image";
import img from "../../assets/img/bgimg.png";

function HeroSection() {
  const text = useRef(null);
  const us = useRef(null);

  useEffect(() => {
    const typed = new Typed(us.current, {
      strings: ["Chatbots", "Automation"],
      typeSpeed: 70,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: "_",
      startDelay: 4,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.from(text.current, { duration: 1, y: 80, opacity: 0 });
    gsap.to(text.current, { duration: 3, y: 0, opacity: 1, delay: 0.5 });
  }, []);

  return (
    <div className="relative w-full flex items-center">
  <div ref={text} className="relative flex flex-col basis-[70%] z-10">
    <div>
      <p className="font-Lexend text-[100px] text-white font-bold m-0 p-0 leading-none">
        Build
      </p>
      <h1 className="font-Lexend text-[100px] text-white font-bold m-0 p-0 leading-none">
        Yours next-gen
      </h1>
    </div>

    <div>
      <span
        ref={us}
        className="font-Lexend font-semibold text-[#9086EF] text-[100px] m-0 p-0 leading-none"
      ></span>
    </div>
    <p className="font-Lexend text-lg text-white font-medium mt-[20px]">
      TheFinansol is an AI Enabler that loves developing Chatbots, <br /> AI
      Models and Transformation Journeys
    </p>
  </div>
  <Image
    className="absolute w-[825px] right-0 top-0"
    src={img}
    alt=""
  />
</div>

  );
}

export default HeroSection;
