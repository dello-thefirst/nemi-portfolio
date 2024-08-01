import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[70px] flex items-center justify-between px-[15%]       ">
      <div className="logo w-[40px] text-[goldenrod] font-bold text-[25px]">
        Nemi.
      </div>
      <nav>
        <i className="fa-light fa-bars text-[20px] text-white"></i>
        <ul className="flex gap-6 text-[13px] text-[grey] lg:hidden">
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
