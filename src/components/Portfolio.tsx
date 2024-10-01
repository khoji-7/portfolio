"use client"

import React from 'react'
import Image from 'next/image'
import project1 from "../assets/proj1.jpg";
import project2 from "../assets/proj2.jpg"
import project3 from "../assets/proj3.png"
import project4 from "../assets/proj4.jpg"
import { motion } from 'framer-motion'


const Portfolio = () =>{

    const projects = [
        {
            title: "E-Commerce",
            desc: "askjdkasdlakjds",
            devstack: "aldjlaskdasdj",
            link: "https://e-commers-omega.vercel.app/",
            git:"https://github.com/khoji-7/e-commers",
            img: project1
        },
        {
            title: "Online Course",
            desc: "lorem10asdlkadlkmalkdmalsmdla",
            devstack: "a;sd;alsdka;lsd",
            link: "https://online-courses-six.vercel.app/",
            git:"https://github.com/khoji-7/online-courses",
            img: project2

        },
        {
            title: "Dummy",
            desc: "aklsdaksjd",
            devstack: "aslkdjasd",
            link: "https://dummy-bice-zeta.vercel.app/",
            git:"https://github.com/khoji-7/dummy",
            img: project3

        },
        {
            title: "Dizenfiksiya",
            desc: "askldlakjsdklasjd",
            devstack: "jjhkhjhjkhjkhjkhkjhkjhh",
            link: "https://dizinfeksiya-new.vercel.app/",
            git:"https://github.com/khoji-7/dizinfeksiyaNew",
            img: project4

        }
    ]

    return (
        <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40' id='portfolio'>
            <h1 className='text-white text-6xl max-w-[500px] mx-auto font-semibold p-4 mb-4'>
            Selected   <span className='text-orange-400 '> Project
            </span>
       </h1>

            <div className='max-w-[1000px] mx-auto mt-32 space-y-24'>
                {
                    projects.map((project,index)=>(
                        <motion.div
                        key={index}
                        initial={{opacity:0, y:75}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.5,delay:0.25}}
                        className={` mt-12 flex ${index % 2 === 1 ? "flex-col-reverse md:flex-row gap-12":"flex-col-reverse md:flex-row-reverse gap-12"}`}
                        >
                            <div className='space-y-2 max-w-[550px]'>
                                <h2 className='text-7xl my-4 text-white/70'>{`0${index+1}`}</h2>
                                <h2 className='text-4xl'>{project.title}</h2>
                                <p className='text-lg text-white/70 break-words p-4'>
                                    {project.desc}
                                </p>
                                <p className='text-xl text-orange-500 font-semibold'>{project.devstack}</p>
                                <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                    <a href={project.link}>Link</a> 
                                    <a href={project.git}>Git</a>
                                </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <Image src={project.img} alt={project.title} className='h-[350px] w-[500px] object-cover border rounded border-gray-700' />                                
                            </div>

                        </motion.div>
                    ))
                }
            </div>
        
        </div>
    )
}

export default Portfolio;