import React from 'react'
import {FaHtml5, FaCss3Alt, FaReact, FaVuejs} from 'react-icons/fa'

const Skills = () => {
    const skillIcons=[
    {icon:<FaHtml5 size={140}/> ,label:"Html"},
    {icon:<FaCss3Alt size={140}/> ,label:"Css"},
    {icon:<FaReact size={140}/> ,label:"Reavt"},
    {icon:<FaVuejs size={140}/> ,label:"Vue"}
    ]
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381A5F_80%)] py-32'>
        <div className='text-white  max-w-[1000px] mx-auto p-8 text-center'>
            <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {
                skillIcons.map((skill, index)=>(
                    <div 
                    key={index}
                    className=' h-[160px] w-[140px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                        {skill.icon}
                        <p className='mt-2'>{skill.label}</p>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Skills
