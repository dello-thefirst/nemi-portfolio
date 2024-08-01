import About from "@/components/About";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />;
      <div className="w-full px-[15%]">
        <Main />;
        <About />
      </div>
      <Services />
    </>
  );
}
