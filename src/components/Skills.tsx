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
        
    </div>
  )
}

export default Skills
