import React, { useState, useEffect } from 'react'
import SkillsBar from './SkillsBar'
import '../css/Skills.css'
import skillsList from './data/data.js'

export default function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    function addToSkills() {
      setSkills(skillsList)
    }
    addToSkills();
  }, []);

  return (
    <section className="skills-container">
      <SkillsBar skills={skills}/>
    </section>
  )
}
