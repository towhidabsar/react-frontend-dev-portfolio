import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var team = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="200"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                      height: "230px",
                      width: "230px",
                    }}
                    className="img-fluid"
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section
        id="team"
        style={{
          backgroundColor: "#efe9f3",
        }}
      >
        <div className="col-md-12">
          <div style={{ padding: "50px" }}>
            <img
              src="./images/team-icon.png"
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
              Team Members
            </p>
          </div>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{team}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Team;
