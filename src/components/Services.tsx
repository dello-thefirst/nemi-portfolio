"use client";
import Image from "next/image";
import copywriting from "../../public/images/copywriting.jpg";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({
    delay: 100,
    threshold: 0.1,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    delay: 200,
    threshold: 0.1,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    delay: 300,
    threshold: 0.1,
  });
  return (
    <div className="w-full py-8 bg-[var(--bg-color-2)] px-[10%] pb-[600px]">
      <p className="text-[30px] font-semibold text-center text-[goldenrod] mb-4">
        Services I Offer.
      </p>
      <div className={`w-full grid grid-cols-4 gap-5 `}>
        <div
          ref={ref1}
          className={`w-full h-auto bg-[var(--bg-color-1)] rounded-lg flex flex-col overflow-hidden ${
            inView1 ? "show-el" : "hide-el"
          }`}
        >
          <Image
            unoptimized
            className="w-full h-[200px] object-cover"
            src={copywriting}
            alt=""
          />
          <div className="w-full min-h-[150px] p-4 text-white text-[20px] font-light">
            <p className="mb-2">Copy Writing</p>
            <p className="text-[12px] text-[grey]">
              Boost your brand with expert copywriting. We craft engaging,
              persuasive content that drives results and connects with your
              audience.
            </p>
          </div>
        </div>
        <div
          ref={ref2}
          className={`w-full h-auto bg-[var(--bg-color-1)] rounded-lg flex flex-col overflow-hidden ${
            inView2 ? "show-el" : "hide-el"
          }`}
        >
          <Image
            unoptimized
            className="w-full h-[200px] object-cover"
            src={copywriting}
            alt=""
          />
          <div className="w-full min-h-[150px] p-4 text-white text-[20px] font-light">
            <p className="mb-2">Proof Reading</p>
            <p className="text-[12px] text-[grey]">
              Ensure your content shines with expert proofreading. We catch
              errors, enhance clarity, and refine your message for a polished,
              professional finish.
            </p>
          </div>
        </div>
        <div
          ref={ref3}
          className={`w-full h-auto bg-[var(--bg-color-1)] rounded-lg flex flex-col overflow-hidden ${
            inView3 ? "show-el" : "hide-el"
          }`}
        >
          <Image
            unoptimized
            className="w-full h-[200px] object-cover"
            src={copywriting}
            alt=""
          />
          <div className="w-full min-h-[150px] p-4 text-white text-[20px] font-light">
            <p className="mb-2">Voice Overs</p>
            <p className="text-[12px] text-[grey]">
              Bring your project to life with professional voice overs. We
              deliver clear, engaging narration that captures your message and
              resonates with your audience.
            </p>
          </div>
        </div>
        <div
          ref={ref4}
          className={`w-full h-auto bg-[var(--bg-color-1)] rounded-lg flex flex-col overflow-hidden ${
            inView4 ? "show-el" : "hide-el"
          }`}
        >
          <Image
            unoptimized
            className="w-full h-[200px] object-cover"
            src={copywriting}
            alt=""
          />
          <div className="w-full min-h-[150px] p-4 text-white text-[20px] font-light">
            <p className="mb-2">Product Review</p>
            <p className="text-[12px] text-[grey]">
              Get honest, insightful product reviews that highlight key features
              and benefits. We provide clear, unbiased assessments to guide your
              audience’s purchasing decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
