import Image from "next/image";
import Hero from "../../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import MyProjects from "@/components/MyProjects";
import { navItems } from "@/GridItems";
import Reccommendations from "@/components/Recommendations";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="w-full">
      {/* overflow-hidden*/ }
      <div className="relative bg-black-100 flex justify-center items-center flex-col   mx-auto sm:px-10 px-5">
        <h1 className="max-w-7xl w-full">
          <FloatingNav navItems={
            navItems
            }/>
          <Hero/>
          <Grid/>
          <MyProjects/>
          <Experience/>
          <Reccommendations/>
          <Approach/>
          <Footer/>
        </h1>
      </div>
      </main>
  );
}
