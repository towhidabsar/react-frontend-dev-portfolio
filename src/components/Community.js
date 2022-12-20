import React, { Component } from "react";

class Community extends Component {
  render() {
    return (
      <section
        id="community"
        style={{
          backgroundColor: "#efe9f3",
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
              src="./images/community-icon.png"
              alt="profilepic"
              width={28}
              height={28}
            />
            <p
              style={{
                color: "#4a1d6f",
                textAlign: "top|center",
              }}
              className="section-title"
            >
              Community Advisory Board
            </p>
            <p
              style={{
                color: "#4a1d6f",
                textAlign: "top|center",
              }}
              className="section-desc"
            >
              The Community Advisory Board (CAB) is a framework for developing
              active community engagement, including the establishment of open
              communication channels and processes throughout the project.{" "}
              <br></br>One of the project's key initial tasks is to connect with
              and build a working relationship with CAB. The goal of the
              Citizenly community engagement strategy is to create a
              relationship between the community and the university that is
              truly collaborative and in which the community is given the
              authority to set civic priorities and then collaborate with the
              community to achieve those objectives.
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
              src="./images/market1.webp"
              alt="aboutpic"
              style={{
                borderRadius: "20px",
                objectFit: "contain",
              }}
              height={480}
              className="img-fluid"
            />
          </div>
          {/* Column with width = remaining screen */}
        </div>
      </section>
    );
  }
}

export default Community;
