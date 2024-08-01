"use client";
import profile from "@/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Main() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  return (
    <main className="w-full flex" style={{ height: "calc(100vh - 160px)" }}>
      <div
        ref={ref1}
        className={`left w-full h-full flex items-center ${
          inView1 ? "show-el" : "hide-el"
        }`}
      >
        <div>
          <p className="text-[15px] text-[grey]">Hello</p>
          <p className="text-[35px] text-white">I'm Blessing</p>
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
          className="rounded-[100px] w-[300px] h-[300px] object-cover border-4 border-[#33337d] p-[8px]"
        />
      </div>
    </main>
  );
}
