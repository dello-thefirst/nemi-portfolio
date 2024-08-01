"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  return (
    <header className="w-full h-[70px] flex items-center justify-between px-[15%]">
      <div className="logo w-[40px] text-[goldenrod] font-bold text-[25px]">
        Nemi.
      </div>

      <i
        onClick={() => {
          if (isSideNavVisible) setIsSideNavVisible(false);
          else setIsSideNavVisible(true);
        }}
        className="fa-light fa-bars text-[20px] text-white opacity-0 lg:opacity-[1]"
      ></i>
      <nav
        className={`lg:fixed lg:bg-[var(--bg-color-2)] lg:z-40 lg:w-screen lg:h-screen lg:left-0 lg:bottom-0 lg:duration-[0.3s] lg:flex lg:justify-center lg:items-center ${
          isSideNavVisible ? "lg:translate-x-[0]" : "lg:translate-x-[-100vw]"
        }`}
      >
        <i
          onClick={() => setIsSideNavVisible(false)}
          className="opacity-0 lg:opacity-[1] fa-light fa-x text-[20px] text-white absolute right-[10vw] top-[30px]"
        ></i>
        <ul className="flex gap-6 text-[13px] text-[grey] lg:flex-col lg:text-center">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="#">Scams</Link>
          </li>
          <li>
            <Link href="#">Yahoo Yahoo</Link>
          </li>
          <li>
            <Link href="#">Courses</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
