import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section
        id="about"
        style={{
          backgroundColor: "#f8e8eb",
        }}
      >
        {/* Create row with two columns */}
        <div className="row">
          {/* Create column for profile picture */}
          <div
            className="col-md-4 mb-5 center"
            style={{
              padding: "50px",
            }}
          >
            <img
              src="./images/lake-aerial.webp"
              alt="aboutpic"
              style={{
                borderRadius: "10px",
                objectFit: "contain",
              }}
              width={320}
              className="img-fluid"
            />
          </div>
          {/* Column with width = remaining screen */}
          <div
            className="col-md-8"
            style={{
              padding: "0px 50px",
              alignSelf: "center",
            }}
          >
            <img
              src="./images/about-icon.png"
              alt="profilepic"
              width={32}
              height={32}
            />
            <p
              style={{
                color: "#92162a",
                textAlign: "top|center",
              }}
              className="section-title"
            >
              About Citizenly
            </p>
            <p
              style={{
                color: "#92162a",
                textAlign: "top|center",
              }}
              className="section-desc"
            >
              Citizenly is a cyberinfrastructure research project in its early
              stages that aims to make data science easily accessible to anyone
              without technical expertise. The Citizenly system aims to engage
              and empower local communities by democratizing data science among
              the residents and the local government. Through collaborative data
              collection, analysis, and actions, Citizenly will provide
              knowledge and resources to encourage citizen participation,
              enabling the creation of "smart communities" with smart residents.
              In contrast to prior open data projects, Citizenly will enable a
              community-focused approach by providing a "big small data" (i.e. a
              small data problem within a massive amounts of data) challenge.
              The multidisciplinary project involves faculty from the Golisano
              College of Computing and Information Sciences and the College of
              Liberal Arts at RIT, will also partner with the City of Rochester
              and Common Ground Health of Rochester NY in this endeavor.
              Encouraging residents to participate more effectively in their
              community's activities can lead to richer community engagement,
              bringing up the possibility for community-based participatory
              research (CBPR) approaches.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
