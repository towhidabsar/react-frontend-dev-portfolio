import React, { Component } from "react";
import Typical from "react-typical";
import NavigationBar from "../navigation/navbar";

class Header extends Component {
  // Create route for the home page

  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }
    return (
      <header
        to="/"
        id="home"
        style={{
          height: window.innerHeight - 140,
          display: "block",
          background: "#fefacd",
          backgroundImage: "url(./images/streetview.webp)",
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          foregroundColor: "black",
        }}
      >
        <div
          className="row aligner"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavigationBar />
          <div className="col-md-12" style={{ align: "right" }}>
            <div>
              <img src="./images/icon.png" alt="" width="200" height="200" />
              <br />
              <h1
                className="mb-0"
                style={{
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                <Typical steps={[name]} wrapper="p" />
                {/* Citizenly */}
              </h1>
              <div className="title-container" style={{ color: "white" }}>
                {/* <HeaderTitleTypeAnimation /> */}
                Democratizing Urban Data Science
              </div>
              <div className="subtitle-container" style={{ color: "white" }}>
                Neighborhood knowledge for residents by residents
              </div>
              <div
                className="partner-title"
                style={{
                  fontFamily: "Inter",
                  fontSize: "1.5rem",
                  marginTop: "30px",
                }}
              >
                {/* In partnership with */}
                <div className="partner-container">
                  <img
                    src="./images/nsf.png"
                    alt=""
                    width="80"
                    height="80"
                    style={{ marginRight: "30px" }}
                  />
                  <img
                    src="./images/rit_white_text.png"
                    alt=""
                    width="69"
                    height="80"
                    style={{ marginRight: "30px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
