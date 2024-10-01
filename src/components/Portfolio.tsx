"use client"

import React from 'react'
import Image from 'next/image'
import project1 from "../assets/ecomer.png";
import project2 from "../assets/course.png"
import project3 from "../assets/dummy.png"
import project4 from "../assets//dizin.png"
import { motion } from 'framer-motion'


const Portfolio = () =>{

    const projects = [
        {
            title: "E-Commerce",
            desc: "An online shopping platform where users can browse products, add them to the cart, and make purchases.",
            devstack: "Next.js, React, Tailwind CSS, ",
            link: "https://e-commers-omega.vercel.app/",
            git:"https://github.com/khoji-7/e-commers",
            img: project1
        },
        {
            title: "Online Course",
            desc: "An online platform offering a variety of courses for users to learn from.",
            devstack: "Next.js, React, CSS,",
            link: "https://online-courses-six.vercel.app/",
            git:"https://github.com/khoji-7/online-courses",
            img: project2
        },
        {
            title: "Dummy",
            desc: "A dummy platform created for testing user interface design.",
            devstack: "React, Tailwind CSS, API",
            link: "https://dummy-bice-zeta.vercel.app/",
            git:"https://github.com/khoji-7/dummy",
            img: project3
        },
        {
            title: "Dizenfiksiya",
            desc: "A website for disinfection services, allowing users to view services and place orders.",
            devstack: " React, CSS,",
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

            <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-32  space-y-24'>
                {
                    projects.map((project,index)=>(
                        <motion.div
                        key={index}
                        initial={{opacity:0, y:75}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.5,delay:0.25}}
                        className={` mt-12 flex flex-col ${index % 2 === 1 ? " md:flex-row gap-12":" md:flex-row-reverse gap-12"}`}
                        >
                            <div className='space-y-2 max-w-[550px]'>
                                <h2 className='text-7xl my-4 text-white/70'>{`0${index+1}`}</h2>
                                <h2 className='text-4xl'>{project.title}</h2>
                                <p className='text-lg text-white/70 break-words p-4'>
                                    {project.desc}
                                </p>
                                <p className='text-xl text-orange-500 font-semibold'>{project.devstack}</p>
                                <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                    <a href={project.link}>Link  </a> 
                                    <a href={project.git}>   Git</a>
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