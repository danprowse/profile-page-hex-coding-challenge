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
            Charity has always been a passion of mine, both through volunteering 
            and fundraising at challenge events. Previously I have
            participated in charity events for Orchid, a male cancer charity, 
            and the Kent MS Therapy Centre, a smaller local charity. I have taken on
            challenges such as abseiling down Broadgate Tower (the highest abseil in the UK!) 
            and I have taken part in the Canterbury Cycle Ride where I cycled 50 miles.
          </p>
          <p>
            Not only does fundraising give me the chance to 'give back' but it also forces
            me outside of my comfort zone and aids my personal growth in terms of
            working within diverse teams and facing my fears. Through fundraising and volunteering 
            I have met and worked with a huge variety of people from all walks of life, and this
            has also aided my ability to build and maintain great working relationships with a network of diverse people.
          </p>
          <p>
            Both abseiling down Broadgate Tower and cycling 50 miles are personal
            highlights of mine as I can look back at the tangible evidence that I have
            achieved something I didn't think was possible. Moments like this are a great
            reminder to me that when I intentionally push my boundaries, I can achieve anything.
            I carry this ethos with me both in my personal and professional life, and can see
            the positive impact it has had in my work life. 
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
            This University project included creating a Mobile Application using
            Java, whilst meeting a set of requirements laid out by the module coordinator. This set of
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
            Upon opening the application, the app sends a request to a bike incidents API which contains the users location and returns
            a JSON response containing reported incidents based on a set of parameters that include the search radius and type of incidents.
          </p>
          <p>
            This assignment was an academic highlight of mine, as not only did I achieve a First
            for this project, but it also taught me a variety of skills and experince in creating a full aplication that invloves
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
