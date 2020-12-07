import React from "react";
import "./css/Suitability.css";

export default function Suitability() {
  return (
    <section className="suitability-container">
      <div className="title-intro">
        <h3 className="title">Job Suitability:</h3>
        <h3 className="title">Junior Frontend Developer</h3>
      </div>
      <div className="list-container">
        <ul className="suitability-list">
          <li>
            <h4>Practical Experience with Commercial Software</h4>
            <p>
              My time interning for a startup compnay has given me experience working under certain contraints
              such as style guides and best practices set out by the lead developers.
            </p>
          </li>
          <li>
            <h4>Knowledge of Javascript</h4>
            <p>Whether it's University, personal projects, or during an internship, I have consistently used Javascript and have a great understanding of the language along with
              the latest features from ES6 and above, which now includes the use of classes, arrow functions and destructuring to name a few.
            </p>
          </li>
          <li>
            <h4>Understanding of Common Frontend Challenges</h4>
            <p>To succeed as a Frontend developer, knowing common stumbling blocks such as browser support and behaviour is a must. My time thorughout University and within the startup
              company has helped me become aware of these challenges which are important to
              produce reliable code that is supported for all use cases.
            </p>
          </li>
          <li>
            <h4>UX / UI Principles</h4>
            <p>Modules within Univeristy such as Human Computer Interaction has showed me the importance of design and how it can be used to manipulate how users feel and act. BJ Fogg 
              coined the term 'captology' which combines behvioural changes through the use of computers. He goes on to describe how creating designs to alter user interaction can
              benefit site owners by improving site goals and reducing bounce rates.
            </p>
          </li>
          <li>
            <h4>Working in a Team of Front and Backend Developers</h4>
            <p>
              I have working experience communicating with Front and Backend developers deciding on what aproaches to take and how to solve complex problems.
              This could be discussing backend structure adhering to RESTful principles or with designers discussing how to bridge the gap between mockups and Frontend code.
            </p>
          </li>
          <li>
            <h4>A self-starter who always wants to learn and better himself</h4>
            <p>
              Naturally I am a curious individual who always wants to improve and grow, in both my personal and professional life.
              Evidence of this exists in my enrollment with Teamtreehouse, an online coding support platform. Before attending University, I was a self-taught developer using this 
              guidance. This exemplifies my ability to work independently and keep myself motivated.
              I also taught myself a lot on Youtube, following tutorials on the latest tricks within frontend devleopment from content creators such as Traversy Media or FlorinPop.
              Listening to Podcasts is also a favourite of mine, including Frontend Happy Hour where the hosts are Senior Developers from Netflix, Twitch and Atlassian, and SyntaxFM 
              by WesBos where they discuss all things web development. These tools, along with my academic and practicak experience, all enable me to constantly rethink where a I am 
              as a developer, and show me how to constantly improve.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
