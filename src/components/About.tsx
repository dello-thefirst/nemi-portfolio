"use client";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  return (
    <div className="w-full h-auto flex overflow-hidden">
      <div className="left w-full flex items-center">
        <p
          ref={ref1}
          className={`text-[20px] font-semibold text-white ${
            inView1 ? "show-el" : "hide-el"
          }`}
        >
          <span className="underline underline-offset-8 decoration-[goldenrod]">
            Abo
          </span>
          ut Me
        </p>
      </div>

      <div className="right w-full py-[100px] text-[14px] text-[grey] flex items-center">
        <p ref={ref2} className={inView2 ? "show-el" : "hide-el"}>
          I am a dedicated copywriter and social media marketer with a passion
          for crafting compelling narratives and engaging content. With a
          background in creative writing and digital marketing, I specialize in
          creating persuasive copy that resonates with target audiences across
          various platforms. My expertise includes developing strategic content
          plans, managing social media campaigns, and optimizing posts for
          maximum reach and impact. I thrive on understanding audience needs and
          delivering authentic, value-driven messages that build brand loyalty
          and drive conversions. Let&apos;s collaborate to elevate your
          brand&apos;s voice and make a meaningful impact in the digital
          landscape.
        </p>
      </div>
    </div>
  );
}
