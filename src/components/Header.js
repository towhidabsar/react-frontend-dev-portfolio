import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { Image } from "react";

class Header extends Component {
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

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <header
        id="home"
        style={{
          height: window.innerHeight - 140,
          display: "block",
          background: "#fefacd",
          backgroundImage: "url(../images/ui.jpg)",
          // backgroundImage: "url(../images/ROC-3.jpg)",
          // backgroundImage: "url(../images/Roc1.jpg)",
          // backgroundImage: "url(../images/Roc2.jpg)",
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* create div that takes 50% of screen width and align content to the right */}

        <div
          className="row aligner"
          style={{
            height: "100%",
            textAlign: "left",
            alignContent: "start",
            marginLeft: "3%",
            paddingLeft: "3%",
            width: "50%",
            // background: "rgba(0, 0, 0, 0.5)",
            float: "right",
          }}
        >
          <div className="col-md-12" style={{ align: "right" }}>
            <div>
              <img src="../images/icon.png" alt="" width="200" height="200" />
              <br />
              <h1
                className="mb-0"
                style={{
                  textAlign: "left",
                  fontFamily: "Inter",
                  fontWeight: "700",
                }}
              >
                <Typical steps={[name]} wrapper="p" />
                {/* Citizenly */}
              </h1>
              <div className="title-container">
                {/* <HeaderTitleTypeAnimation /> */}
                Democratizing Urban Data Science
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
                    src="../images/nsf.png"
                    alt=""
                    width="80"
                    height="80"
                    style={{ marginRight: "30px" }}
                  />
                  <img
                    src="../images/roc.jpg"
                    alt=""
                    width="100"
                    height="80"
                    style={{ marginRight: "30px" }}
                  />
                  <img
                    src="../images/rit.png"
                    alt=""
                    width="75"
                    height="80"
                    style={{ marginRight: "30px" }}
                  />
                </div>
              </div>
              {/* <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              /> */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
