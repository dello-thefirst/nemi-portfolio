"use client";
import profile from "../../public/images/main.jpg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Main() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  return (
    <main
      className="w-full flex md:flex-col"
      style={{ height: "calc(100vh - 160px)" }}
    >
      <div
        ref={ref1}
        className={`left w-full h-full flex items-center md:justify-center ${
          inView1 ? "show-el" : "hide-el"
        }`}
      >
        <div className="md:text-center">
          <p className="text-[15px] text-[grey]">Hello</p>
          <p className="text-[35px] text-white">I&apos;m Blessing</p>
          <p className="text-[17px] text-[grey] font-light">
            Professional Copywriter & Social <br /> Media Marketer
          </p>
          <button className="w-[150px] h-[35px] rounded-md text-[13px]  my-3 border-none outline-none text-[black] bg-[#ffc800] transition-colors duration-[0.3s]  ">
            Hire Me
          </button>
        </div>
      </div>
      <div
        ref={ref2}
        className={`right w-full h-full flex items-center justify-center ${
          inView2 ? "show-el" : "hide-el"
        }`}
      >
        <Image
          src={profile}
          alt=""
          className="rounded-[100px] w-[330px] h-[330px] object-cover border-[2px] border-[#ffff9e] p-[5px] object-top"
        />
      </div>
    </main>
  );
}
