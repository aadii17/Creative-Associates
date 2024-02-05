import React from "react";
import "../styles/Us.css";
import profile1 from "../assets/Mop.jpg";
import profile2 from "../assets/Ankit.jpg";
import profile3 from "../assets/melissa.jpg";

export default function Us() {
  return (
    <>
      <div className="Us">
        <h1 className="team-heading">Our Team</h1>
        <br />
      </div>
      <div className="container-card">
        <div className="profile-wrapper">
          <div className="profile">
            <div className="profile-image">
              <img src={profile1} alt="Melissa Taylor" />
            </div>

            <div className="profile-name">
              <h2>Mayur Patil</h2>
              <div className="profile-bio">Owner</div>
            </div>
          </div>
        </div>

        <div className="profile-wrapper">
          <div className="profile">
            <div className="profile-image">
              <img src={profile2} alt="John Doe" />
            </div>
            <div className="profile-name">
              <h2>John Doe</h2>
              <div className="profile-bio">Social Media Handler</div>
            </div>
          </div>
        </div>

        <div className="profile-wrapper">
          <div className="profile">
            <div className="profile-image">
              <img src={profile3} alt="Jane Smith" />
            </div>

            <div className="profile-name">
              <h2>Jane Smith</h2>
              <div className="profile-bio">Assistant</div>
            </div>
          </div>
        </div>

        <div className="profile-wrapper">
          <div className="profile">
            <div className="profile-image">
              <img src={profile3} alt="Jane Smith" />
            </div>

            <div className="profile-name">
              <h2>Ankit Patil</h2>
              <div className="profile-bio">Editor</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
