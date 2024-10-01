"use client";

import React from "react";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import {motion} from "framer-motion";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
    return (
        <div
            className="py-24 relative overflow-hidden"
            style={{
                background: "linear-gradient(to bottom, #000, #2B1942 35%, #8F5C55 60%, #DBAF6E 80%)",
            }}
        >

            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[400px] left-[50%] -translate-x-1/2  bg-[radial-gradient(closest-side,#000_80%,#2B1942)] " > 


            </div>
            <div className="relative">
                <div className="text-8xl font-bold text-center">
                    <h1 className="text-[#98B4Ce]">
                        Hi, I am
                    </h1>
                    <h1 className="text-5xl text-[#E48A57]">
                        Hojiakbar Nematxonov 
                    </h1>
                </div>
                <motion.div
                    className="hidden md:block absolute left-[280px] top-[170px]"
                    drag
                >
                    <Image
                        src={cursor}
                        alt="cursor"
                        width={190}
                        height={190}
                        draggable="false"
                    />

                </motion.div>
                <motion.div
                    className=" hidden md:block absolute right-[220px] top-[20px]"
                    drag
                >
                    <Image
                        src={lightning}
                        alt="lightning"
                        width={120}
                        height={120}
                        draggable="false"
                    />

                </motion.div>
            
            <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
                I am a frontend developer focused on creating websites that provide the best experience users
            </p>
            <Image src={profilepic} alt="profile picture" className="h-auto w-auto mx-auto" />
            </div>
        </div> 
    );
};

export default Hero;
