import { workExperience } from "@/GridItems";
import React from "react";
import { Button } from "./ui/MovingBorder";

const Experience = () => {

    return (
        <div className="py-20" id="experience">
            <h1 className="heading text-purple">
                Work Experience
            </h1>
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
               {workExperience.map((item)=>(
                <Button key={item.id} borderRadius="1.75rem" duration={Math.floor(Math.random()*10000+10000)} className="flex-1 dark:border-slate-800 text-white border-neutral-200">
                    <div className="flex lg:flex-row flex-col lg:items-start p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <img src={item.thumbnail} alt={item.thumbnail} className="h-[10vh] w-[8vw]"/>
                        <div className="lg:ms-5">
                            <h1 className="text-start text-xl md:text-2xl font-bold">
                                {item.companyName}
                            </h1>
                            <h2 className="text-start text-lg md:text-xl font-bold">
                                {item.title}
                            </h2>
                            <p className="text-start text-white-100 mt-3 font-semibold">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                </Button>
               ))}
            </div>
        </div>
    )
}

export default Experience;