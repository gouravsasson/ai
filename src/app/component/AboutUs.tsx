import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "@/assets/img/models.gif";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]); // Use specific typing for better TypeScript support

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );

    boxesRef.current.forEach((box, index) => {
      if (box) {
        gsap.fromTo(
          box,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.3,
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="" ref={containerRef}>
      <div className="mt-[100px] flex flex-col items-center">
        <h1 className="font-Lexend text-center text-[14px] font-bold">
          What is THEFINANSOL?
        </h1>
        <div className="mt-4 w-0 h-[50px] border-[1px] border-black"></div>
      </div>

      <div className="text-center text-[33px] mt-4">
        <p>
          TheFinansol is a team of experienced AI Professionals, having
          expertise in <br /> different domains ranging from Conversational AI
          to IoT and Custom
          <br /> Enterprise-grade AI Projects. Based out of Delhi, we started
          our journey
          <br /> in 2017 and have come a long way in AI with exemplary
          projects.
        </p>
      </div>

      <div className="flex justify-center gap-20 mt-[100px] mb-10">
        <div
          className="w-[600px] h-[650px] bg-[#594BE7] rounded-3xl p-5"
          ref={(el) => {
            boxesRef.current[0] = el; // Do not return anything from here
          }}
        >
          <Image
            className="w-fit rounded-2xl shadow-lg"
            src={img1}
            alt="gif"
          />
          <div className="pt-10 flex flex-col gap-3">
            <h1 className="text-white text-xl">Efficiency & Scalability</h1>
            <p className="text-white">
              Build intelligent AI search & chat systems over hundreds of
              <br />
              thousands web pages.
            </p>
          </div>
        </div>
        <div
          className="w-[600px] h-[650px] bg-[#9086EF] rounded-3xl"
          ref={(el) => {
            boxesRef.current[1] = el; // Do not return anything from here
          }}
        ></div>
      </div>
    </div>
  );
}

export default AboutUs;
