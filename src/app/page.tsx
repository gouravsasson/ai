'use client'

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import StickySection from "./component/StickySection";
// import { InfiniteMoving } from "./component/InfiniteMoving";
import Footer from "./component/Footer";
import BusinesSupport from "./component/BusinesSupport";

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.5,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     smooth: true,
  //     smoothTouch: false,
  //     direction: "vertical",
  //   });

  //   const raf = (time) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <>
      <div className="bg-black min-h-screen flex flex-col px-20 gap-20">
        <Navbar />
        <HeroSection />
      </div>
      <div id="sticky-section" className="min-h-screen">
        <StickySection />
      </div>
      {/* <div className="h-screen  bg-black">
         <div className="  flex flex-col gap-20">
          <h1 className=" text-white text-[100px] text-center mt-20">Testimonials</h1>
          <InfiniteMoving />
        </div> 
      </div> */}

      <div className=" w-full h-screen">
        <BusinesSupport />
      </div>
      <div className=" w-full h-fit">
        <Footer />
      </div>
    </>
  );
}
