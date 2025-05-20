import Image from "next/image";
import Banner from "./Components/Banner";
import Char from "./Char/Char.jsx";


export default function Home() {
  return (
    <div className="">
      <main>
        <Banner></Banner>
        <Char></Char>




      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
