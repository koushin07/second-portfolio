import { skill } from '@/app/_model/skills'
import React from 'react'

type skillProp = {
   skills: skill
}

const SkillList = ({skills: skill}: skillProp) => {
  return (
    <div className="space-y-4 skill-category opacity-0">
    <h3 className="text-xl font-normal flex items-center">
      <skill.icon className="w-5 h-5 mr-2" /> {skill.name}
    </h3>
      <ul className="list-disc list-inside font-light">
        {skill.skillSet.map((set) => (
          <li>{set.name }</li>    
        ))}
      
    </ul>
  </div>
  )
}

export default SkillList