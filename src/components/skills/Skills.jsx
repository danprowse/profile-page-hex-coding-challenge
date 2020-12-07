import React, { useState, useEffect } from 'react'
import SkillsBar from './SkillsBar'
import '../css/Skills.css'

export default function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    function addToSkills() {
      const listOfSkills = [
        {
          title: 'Idustry',
          skills: [
            {
              name: 'Customer Service',
              years: 9
            },
            {
              name: 'Development',
              years: 5
            },
            {
              name: 'Management',
              years: 1.5
            }
          ]
        },
        {
          title: 'Development',
          skills: [
            {
              name: 'HTML/CSS',
              years: 5
            },
            {
              name: 'Javascript',
              years: 2.5
            },
            {
              name: 'VueJS',
              years: 1
            },
            {
              name: 'C#',
              years: 2
            },
            {
              name: 'Java',
              years: 2
            }
          ]
        } 
      ]
      setSkills(listOfSkills)
    }
    addToSkills();
  }, []);

  return (
    <section className="skills-container">
      <SkillsBar skills={skills}/>
    </section>
  )
}
