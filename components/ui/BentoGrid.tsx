"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BG_grad";
import { GlobeDemo } from "./GridGlobe";
import { div, span } from "framer-motion/client";
import { Span } from "next/dist/trace";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id:number;
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg ?: string;
}) => {

  const [copied,setCopied]=useState(false);
  const CopyEmail=()=>{
    navigator.clipboard.writeText('naqviirtiza9@gmail.com')
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-white/[0.1]  transition duration-200 hover:shadow-xl  dark:shadow-none",
        className,
      )}
      style={{
        background:'rgb(4,7,29)',
        backgroundColor:'linear-gradient(90deg,rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    >
      <div className={`${id==6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src = {img}
              alt = {img}
              className = {cn(imgClassName,'object-cover,object-center')}
            />  
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 
        ${id === 5
          && 'w-full opacity-80'
        }`}>
          {spareImg &&(
            <img
              src = {spareImg}
              alt = {spareImg}
              className = {'object-cover,object-center w-full h-full'}
            />
          )}

        </div>

        {id==6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div> */}
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName,"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}>
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
            {description}
          </div>
            <div className="lg:text-xl max-w-96 z-10 font-sans font-bold text-lg">
              {title}
          </div>
        

        {id===2 && (<GlobeDemo/>)}

        {id==3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {/* ,"Typescript","Javascript","Python","C","C++","Java","Azure","Vue.js","Oracle Sql Developer","Postgress","Mysql","MongoDB" */}
              {["React.js","Next.js","Nest.js"]
              .map((item)=>(
                // eslint-disable-next-line react/jsx-key
                <span key={item} className="py-2 lg:py-4 px-3 lg:px-3 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
              {/*"C","C++","Java","Azure","Vue.js","Oracle Sql Developer","Postgress","Mysql","MongoDB" */}
              {["Typescript","Javascript","Python"]
              .map((item)=>(
                // eslint-disable-next-line react/jsx-key
                <span key={item} className="py-2 lg:py-4 px-3 lg:px-3 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
            </div>

             <div className="flex flex-col gap-3 lg:gap-8">
              {/*"Azure","Vue.js","Oracle Sql Developer","Postgress","Mysql","MongoDB" */}
              {["C","C++","Java"]
              .map((item)=>(
                // eslint-disable-next-line react/jsx-key
                <span key={item} className="py-2 lg:py-4 px-3 lg:px-3 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
            </div>

              <div className="flex flex-col gap-3 lg:gap-8 ">
              {/*"Azure","Vue.js","Oracle Sql Developer","Postgress","Mysql","MongoDB" */}
              {["Azure",".NET Core","React Native"]
              .map((item)=>(
                // eslint-disable-next-line react/jsx-key
                <span key={item} className="py-2 lg:py-4 px-3 lg:px-3 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
            </div>
          </div>
        )}

        {id==6 && (
          <div className="mt-5 relative">
            <div className={`absolute -bottom-5 right-0`}>
              <Lottie options={{
                loop:copied,
                autoplay:copied,
                animationData,
                rendererSettings:{
                  preserveAspectRatio:"xMidYMid slice"
                }
              }}/>
            </div>
            <MagicButton
              title={copied ? "Email Copied !!" : "Copy My Email Address"}
              icon={<IoCopyOutline/>}
              position="left"
              otherClasses="bg-[#161a31]"
              handleClick={CopyEmail}
            />

            
          </div>
        )}



      </div>
    </div>
    </div>
  );
};
