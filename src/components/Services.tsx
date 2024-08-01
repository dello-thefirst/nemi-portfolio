"use client";
import Image from "next/image";
import copywriting from "../../public/images/copywriting.jpg";
import proofreading from "../../public/images/proofreading.jpg";
import voiceover from "../../public/images/voiceover.jpg";
import productreview from "../../public/images/productreview.png";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2 });

  return (
    <div className="w-full py-8 bg-[var(--bg-color-2)] px-[10%]">
      <p className="text-[30px] font-semibold text-center text-[goldenrod] mb-4">
        Services I Offer.
      </p>
      <div
        ref={ref1}
        className={`w-full grid grid-cols-4 gap-5 md:grid-cols-2 ${
          inView1 ? "show-el" : "hide-el"
        }`}
      >
        <div
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
            <button className="w-[130px] h-[30px] rounded-md text-[13px]  my-3 border-none outline-none text-[black] bg-[#ffc800] transition-colors duration-[0.3s]  ">
              Hire Me
            </button>
          </div>
        </div>
        <div
          className={`w-full h-auto bg-[var(--bg-color-1)] rounded-lg flex flex-col overflow-hidden `}
        >
          <Image
            unoptimized
            className="w-full h-[200px] object-cover"
            src={proofreading}
            alt=""
          />
          <div className="w-full min-h-[150px] p-4 text-white text-[20px] font-light">
            <p className="mb-2">Proof Reading</p>
            <p className="text-[12px] text-[grey]">
              Ensure your content shines with expert proofreading. We catch
              errors, enhance clarity, and refine your message for a polished,
              professional finish.
            </p>{" "}
            <button className="w-[130px] h-[30px] rounded-md text-[13px]  my-3 border-none outline-none text-[black] bg-[#ffc800] transition-colors duration-[0.3s]  ">
              Hire Me
            </button>
          </div>
        </div>
        <div
          className={`w-full h-auto bg-[var(--bg-color-1)] rounded-lg flex flex-col overflow-hidden`}
        >
          <Image
            unoptimized
            className="w-full h-[200px] object-cover"
            src={voiceover}
            alt=""
          />
          <div className="w-full min-h-[150px] p-4 text-white text-[20px] font-light">
            <p className="mb-2">Voice Overs</p>
            <p className="text-[12px] text-[grey]">
              Bring your project to life with professional voice overs. We
              deliver clear, engaging narration that captures your message and
              resonates with your audience.
            </p>{" "}
            <button className="w-[130px] h-[30px] rounded-md text-[13px]  my-3 border-none outline-none text-[black] bg-[#ffc800] transition-colors duration-[0.3s]  ">
              Hire Me
            </button>
          </div>
        </div>
        <div
          className={`w-full h-auto bg-[var(--bg-color-1)] rounded-lg flex flex-col overflow-hidden`}
        >
          <Image
            unoptimized
            className="w-full h-[200px] object-cover"
            src={productreview}
            alt=""
          />
          <div className="w-full min-h-[150px] p-4 text-white text-[20px] font-light">
            <p className="mb-2">Product Review</p>
            <p className="text-[12px] text-[grey]">
              Get honest, insightful product reviews that highlight key features
              and benefits. We provide clear, unbiased assessments to guide your
              audience’s purchasing decisions.
            </p>{" "}
            <button className="w-[130px] h-[30px] rounded-md text-[13px]  my-3 border-none outline-none text-[black] bg-[#ffc800] transition-colors duration-[0.3s]  ">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
