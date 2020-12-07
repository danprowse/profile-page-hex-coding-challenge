import React from "react";

export default function SkillsBar({ skills }) {
  const listItems = skills.map((skillbar) => (
    <section className="skillbar-container" key={skillbar.title}>
      <p className="skillbar-title">{skillbar.title}</p>
      <div className="skills">
        {skillbar.skills.map((skill) => (
          <div key={skill.name} className="skill">
            <ul className="skill-list">
              <li >{skill.name}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  ));
  return (
    <>
      {listItems}
      {/* <section className="skillbar-container">
        <p className="skillbar-title">Industry</p>
        <div className="skillbar"></div>
        <div className="skills">
          <div className="skill">
            <div className="skill-key"></div>
            <div className="skill-name">Customer Service</div>
          </div>
          <div className="skill">
            <div className="skill-key"></div>
            <div className="skill-name">Fundraising</div>
          </div>
          <div className="skill">
            <div className="skill-key"></div>
            <div className="skill-name">Development</div>
          </div>
        </div>
      </section>
      <section className="skillbar-container">
        <p className="skillbar-title">Development</p>
        <div className="skillbar"></div>
        <div className="skills">
          <div className="skill">
            <div className="skill-key"></div>
            <div className="skill-name">HTML/CSS</div>
          </div>
          <div className="skill">
            <div className="skill-key"></div>
            <div className="skill-name">JavaScript</div>
          </div>
          <div className="skill">
            <div className="skill-key"></div>
            <div className="skill-name">C#</div>
          </div>
          <div className="skill">
            <div className="skill-key"></div>
            <div className="skill-name">Java</div>
          </div>
        </div>
      </section> */}
    </>
  );
}
