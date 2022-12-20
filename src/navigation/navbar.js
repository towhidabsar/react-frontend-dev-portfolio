import React, { Component } from "react";
import { Link } from "react-scroll";

class NavigationBar extends Component {
  render() {
    // Create a horizontal navigation bar with links to sections of the page, fixed to the top of the page
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link
            className="nav-brand js-scroll-trigger"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
          >
            <img
              src="./images/icon.png"
              alt=""
              width={40}
              height={40}
              style={{ marginRight: "30px" }}
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li>
                <Link
                  className="nav-link js-scroll-trigger"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll-trigger"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                >
                  PROJECT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll-trigger"
                  to="app"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                >
                  APP
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll-trigger"
                  to="community"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                >
                  COMMUNITY
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll-trigger"
                  to="timeline"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                >
                  TIMELINE
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll-trigger"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                >
                  TEAM
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavigationBar;
