import Image from "next/image";
import Hero from "../../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import MyProjects from "@/components/MyProjects";

export default function Home() {
  return (
    <main className="w-full">
      {/* overflow-hidden*/ }
      <div className="relative bg-black-100 flex justify-center items-center flex-col   mx-auto sm:px-10 px-5">
        <h1 className="max-w-7xl w-full">
          <FloatingNav navItems={
            [
              {name: "Home", link:"/", icon:<FaHome/>},
              
            ]
            }/>
          <Hero/>
          <Grid/>
          <MyProjects/>
        </h1>
      </div>
      </main>
  );
}
