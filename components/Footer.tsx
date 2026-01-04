import { div } from "framer-motion/client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/GridItems";

const Footer = () => {

    return(

        <footer className="w-full pt-20 pb-10" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50"/>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-purple heading lg:max-w-[45vw]">Ready to collaborate on a new Project</h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me and we can discuss collaboration on a new project
                </p>
                <a href="mailto:naqviirtiza9@gmail.com">
                    <MagicButton title="Lets get in touch" icon={<FaLocationArrow/>} position="right"/>
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light"> Copyright © Irtiza</p>
                <div className="flex items-center gap-6 md:gap-3">
                    {socialMedia.map((item)=>(
                        <div key={item.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <a href={item.link}>
                                <img src={item.img} alt={item.img} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;