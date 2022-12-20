import React, { Component } from "react";

class ProjectDetails extends Component {
  render() {
    return (
      <section
        id="project"
        style={{
          backgroundColor: "#f8e8eb",
        }}
      >
        {/* Create row with two columns */}
        <div className="row">
          <div
            className="col-md-6"
            style={{
              padding: "50px",
              alignSelf: "center",
            }}
          >
            <img
              src="./images/details-icon.png"
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
              Project Details
            </p>
            <p
              style={{
                color: "#92162a",
                textAlign: "top|center",
              }}
              className="section-desc"
            >
              The project's goal is to create a low-cost citizen sensor app
              prototype for gathering data from citizens. In the pilot
              neighborhood, a community advisory board (CAB) is formed. The CAB
              is composed of community members who are active in the creation of
              Citizenly, community involvement, and pilot support. The Community
              Data Infrastructure would connect urban neighborhoods to data and
              ML/AI tools in a seamless manner. Communities are involved in
              decision-making at all stages of the research process, from
              developing research topics to sharing the findings. The project
              has numerous urban data science applications, such as developing a
              recommendation system for optimal transformation of vacant lots in
              the community and developing a quantitative health impact report
              to aid in the design and prototyping of predictive modeling for
              social determinants of health.
            </p>
          </div>
          {/* Create column for profile picture */}
          <div
            className="col-md-6 mb-5 center"
            style={{
              padding: "50px",
            }}
          >
            <img
              src="./images/project-summary.jpg"
              alt="aboutpic"
              style={{
                borderRadius: "20px",
                objectFit: "contain",
              }}
              height={640}
              className="img-fluid"
            />
          </div>
          {/* Column with width = remaining screen */}
        </div>
      </section>
    );
  }
}

export default ProjectDetails;
