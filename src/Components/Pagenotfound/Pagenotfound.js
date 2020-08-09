import React, { Component } from "react";
import "./Pagenotfound.css";
import Aux from "react-aux";

class Pagenotfound extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Aux>
        <div className="pagenotfoundmain">
          <span>404</span>
          <p>Something is Worng</p>
        </div>
      </Aux>
    );
  }
}
export default Pagenotfound;
