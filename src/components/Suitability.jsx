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
            Practical Experience with Commercial Software <i></i>
            <p>
              My time volunteering for a startup compnay has given me experience working under certain contraints
              such as style guides and best practices to adhere to set out by the lead developers.
            </p>
          </li>
          <li>
            Knowledge of Javascript <i></i>
            <p>Wether it is University, Personal Projects or a start up. Javascript is always there so its important to have a great understanding of the language along with
              latest syntac updates from es6 and above which now includes the use of classes, arrow functions and destructuring to name a few.
            </p>
          </li>
          <li>
            Understanding of common Frontend challenges <i></i>
            <p>To succeed as Frontend developer, knowing common stumbling blocks such as browser support and behaviour is a must. My time thorughout University and within a startup, being aware of these is important to
              produce code that is supported for all use cases.
            </p>
          </li>
          <li>
            UX / UI Principles<i></i>
            <p>Modules within Univeristy such as Human Computer Interaction has showed tme the importance of design and how it can be used to manipulate how users feel and act. BJ Fogg coined the captology which combines
              behvioural changes through the use of computers, he goes on to describe how creating designs to alter user interaction can benefit site ownser by improving site goals and reducing bounce rates.
            </p>
          </li>
          <li>
            Working in a team of Front and Backend developers<i></i>
            <p>
              I have working experience communicating with Front and Backend developers deciding on what aproaches to take and how to solve complex problems.
              This could be discussing backend structure adhering to RESTful principles or with with designers discussing how to bridge the gap between mockups and Frontend code.
            </p>
          </li>
          <li>
            Self starter who always wants to learn and better himself<i></i>
            <p>
              Natrually i am a curious individual who always wants to be better and improve, in and outisde of a work place enviroment.
              To enable this i've enrolled within Teamtreehouse which is online coding support platform, Youtube also to follow tutorials on the latest tricks within frontend devleopment from content creators such as Traversy Media or FlorinPop.
              Listening to Podcasts is a favourite of mine, some of my favourites include Frontend Happy Hour where the host are Senior Developers from Netflix, Twitch and Atlassian talk about import frontend topics. As well as SyntaxFM by WesBos where they discuss all things web development.
              these all enable me to constantly rethink where a i am as a developer and show me how to thing and act to achieve what they have acheived.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
