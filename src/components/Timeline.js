import React, { Component } from "react";

class Timeline extends Component {
  render() {
    return (
      <section
        id="timeline"
        style={{
          backgroundColor: "#efe9f3",
        }}
      >
        <div style={{ padding: "50px" }}>
          <img
            src="./images/timeline-icon.png"
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
            Project Timeline
          </p>

          <div>
            {/* <Chrono items={items} mode="HORIZONTAL" /> */}
            <iframe
              title="timeline"
              src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1z5gpT_1BsqdvCFHd1ADWdsrhpBXztMVC1kf2yZzUNq8&font=Default&lang=en&initial_zoom=2&height=400"
              width="100%"
              height="400"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default Timeline;
