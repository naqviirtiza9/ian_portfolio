import { projects } from "@/GridItems";
import React from "react";
import { PinContainer } from "./ui/3DPin";
import { div } from "framer-motion/client";
import { FaLocationArrow } from "react-icons/fa";

const MyProjects = () => {
    return(
        <div className="py-20" id="projects">
            <h1 className="heading text-purple">
                My Projects
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 mt-10 gap-x-24 gap-y-8">
                {projects.map((project)=>(
                    <div key={project.id} className="lg:min-h-[32.5rem] h-[32rem] sm:h-[41rem] flex items-center justify-center sm:w-[570px] w-[90vw]">
                        <PinContainer title={project.link} href={project.link}>
                            <div className="relative flex items-center justify-center w-[80vw] sm:w-[570px] sm:h-[40vh] overflow-hidden  mb-10">
                                <div className="w-full relative h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <img src="/bg.png" alt="bg-img" />
                                </div>
                                <img src={project.img} alt={project.title} className="z-10 absolute bottom-0" />
                            </div>
                            <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                                {project.title}
                            </h1>
                            <p className="font-normal font-light line-clamp-2">
                                {project.des}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center mb-3 mt-7 justify-between ">
                                    <div className="flex items-center">
                                        {project.iconLists.map((icon,index)=>(
                                            <div key={icon} className="border border-white/[0.2] rounded-full bg-black flex justify-center items-center w-8 h-8 lg:h-10 lg:w-10" style={{
                                                transform:`translateX(-${5*index*2}px)`
                                            }}>
                                                <img src={icon} alt={icon} className="p-2" />
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                        Visit Site
                                    </p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9"/>

                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyProjects