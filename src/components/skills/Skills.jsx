import React from 'react'
import SkillsBar from './SkillsBar'
import '../css/Skills.css'

export default function Skills() {
  return (
    <section className="skills-container">
      {/* for each skill area (sectors i.e chairty, customer service, developer.) (development i.e. languages) */}
      <SkillsBar />
    </section>
  )
}
