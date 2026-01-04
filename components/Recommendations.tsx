import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { testimonials } from "@/GridItems";

const Reccommendations = () => {

    return (
        <div className="py-20" id="recommendations">
            <h1 className="heading text-purple">
                Testimonials from Colleagues/Clients
            </h1>
            <div className="flex items-center flex-col">
               <div className="flex flex-col antialiased items-center relative overflow-hidden h-full ">
                    <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                    />
               </div>
            </div>
        </div>
    )
}

export default Reccommendations;