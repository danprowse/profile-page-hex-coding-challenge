import React from "react";
import "./css/Highlights.css";
import Chairty50 from "./css/images/charity-50m.jpg";
import CharityAbseil from "./css/images/orchid-abseil.jpg";
import MobileMap from "./css/images/Map.PNG";
import MobileIncidents from "./css/images/incidents.PNG";
export default function Highlights() {
  return (
    <section className="highlights-container">
      <div className="highlight">
        <div className="description">
          <h3 className="title">Charity Fundraising</h3>
          <p>
            Fundraising has always been a passion of mine as i get satifaction
            at helping those in need no matter the course. Over the years i have
            participated in charity events for Orchid and Kent MS Therapy Center
            which invloved Absieling down Broadgate tower (which i was made to
            go first!) and Canterburys 50 Mile cycle challenge.
          </p>
          <p>
            The events are not always just about giving back but also to put
            myself out of my confort zone and to grow as a person in terms of
            working within diverse teams and facing your fears when it comes to
            challenege events.
          </p>
          <p>
            Times like this are a highlight of mine as i can look back and say
            "Yes, I have achieved that" and works as reminder that when put out
            of your confort zone you can achieve what you set out to do.
          </p>
        </div>
        <div className="images">
          <img className="charity-50 img" src={Chairty50} alt="charity" />
          <img
            className="charity-abseil img"
            src={CharityAbseil}
            alt="charity"
          />
        </div>
      </div>
      <div className="highlight h-2">
        <div className="description">
          <h3 className="title">Mobile Application</h3>
          <p>
            The task was to create Mobile Application using Java whilst meeting
            a set of constraints set out by the assignment. this set of
            requirements invloved using:
          </p>
          <ul>
            <li>Android Activities</li>
            <li>Intents</li>
            <li>Asynchronous Tasks</li>
            <li>Api's</li>
            <li>SQLite Database</li>
          </ul>
          <p>
            Upon opening the application, the app sends a request to a bike incidents api which contains the users location and returns
            a JSON response containing reported incidents based on a set of parameters that include the search radius and type of incedents.
          </p>
          <p>
            Not only did i achieve a First (1) for this project but this specific application is a highlight of mine as it taught me a variety of skills and experince in creating a full aplication that invloves
            the user interface and backend logic that follows the MVC architectural design pattern. 
          </p>
        </div>
        <div className="images">
          <img className="mobile-map-img" src={MobileMap} alt="mobile-app" />
          <img
            className="mobile-incidents-img"
            src={MobileIncidents}
            alt="mobile-app"
          />
        </div>
      </div>
    </section>
  );
}
