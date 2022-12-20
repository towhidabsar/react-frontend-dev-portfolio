import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class CitizenlyApp extends Component {
  state = {
    deps: {},
    videoModal: false,
  };

  openModal = () => this.setState({ videoModal: true });
  closeModal = () => this.setState({ videoModal: false });

  render() {
    return (
      <section
        id="app"
        style={{
          backgroundColor: "#f8e8eb",
        }}
      >
        {/* Create row with two columns */}
        <div className="row">
          {/* Create column for profile picture */}
          <div className="col-md-4 mb-2 center">
            <img
              src="./images/screenshot.webp"
              alt="App screenshot"
              width={480}
              className="img-fluid"
            />
          </div>
          {/* Column with width = remaining screen */}
          <div
            className="col-md-8"
            style={{
              padding: "50px",
              alignSelf: "center",
            }}
          >
            <img
              src="./images/citizenly-app-icon.png"
              alt="profilepic"
              width={28}
              height={28}
            />
            <p
              style={{
                color: "#92162a",
                textAlign: "top|center",
              }}
              className="section-title"
            >
              Citizenly App
            </p>
            <p
              style={{
                color: "#92162a",
                textAlign: "top|center",
              }}
              className="section-desc"
            >
              The Citizenly application, which runs on mobile devices, enables
              active citizen participation in the data collecting and
              consumption process while resolving long-standing challenges with
              reliable data collection at scale. Residents are actively
              encouraged to contribute to the continuous development of relevant
              and implicit neighborhood knowledge. Residents of the community
              are the primary users and beneficiaries of this data. Residents
              will be able to view both citizen-generated data and data from
              sources like DataROC through the app. This will assist residents
              in using data to make educated decisions in their community.
              Residents can participate in discussions regarding neighborhood
              initiatives and contribute information by filling out surveys. The
              app is still in its early phases of development.
              <br></br>
              <br></br>
              Click below to watch the app demo
            </p>

            <img
              src="./images/video-thumbnail.jpg"
              alt="play button"
              width={150}
              height={110}
              style={{
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={this.openModal}
            />

            <Modal
              show={this.state.videoModal}
              onHide={this.closeModal}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              className="modal-inside"
            >
              <span onClick={this.closeModal} className="modal-close">
                <i className="fas fa-times fa-3x close-icon"></i>
              </span>
              <div className="col-md-12">
                <div
                  className="col-md-10 mx-auto"
                  style={{ paddingBottom: "50px", alignSelf: "center" }}
                >
                  <video
                    height="720px"
                    controls
                    style={{
                      borderRadius: "10px",
                      alignSelf: "center",
                    }}
                  >
                    <source
                      src="./videos/citizenly-demo.webm"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </Modal>

            <div className="store-badges">
              <img
                src="./images/app_store_badge.png"
                alt="Apple App Store"
                height="50"
                style={{ marginRight: "30px" }}
              />
              <img
                src="./images/play_store_badge.png"
                alt="Google Play Store"
                height="50"
                style={{ marginRight: "30px" }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CitizenlyApp;
