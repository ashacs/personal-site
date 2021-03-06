import React, { Component } from "react";
import "./index.scss";

class TimelineEvent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <li className="timelineEvent">
        <div>
          <h2>{this.props.title}</h2>
        </div>
        <div className="timelineMarker" />
        <div>
          {this.props.body}
        </div>
      </li>
    );
  }
}

export default TimelineEvent;
