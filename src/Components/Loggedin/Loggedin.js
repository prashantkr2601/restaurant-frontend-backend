import React from "react";
import { Redirect } from "react-router-dom";
//import { NavLink } from "react-router-dom";
import "./Loggedin.css";

class Loggedin extends React.Component {
  constructor() {
    super();
    this.state = {
      res_redirect: false,
      user_redirect: false,
      res_id: "",
      user_id: "",
    };
  }
  componentDidMount() {
    let reslocalData = JSON.parse(sessionStorage.getItem("resData"));
    let userlocalData = JSON.parse(sessionStorage.getItem("userData"));
    //JSON.parse(sessionStorage.getItem("resData"));
    //console.log(reslocalData.resData.register_as_a);
    if (reslocalData) {
      if (reslocalData.resData.register_as_a === "Restaurant") {
        this.setState({
          res_redirect: true,
          res_id: reslocalData.resData.res_id,
        });
      }
    } else if (userlocalData) {
      //console.log(userlocalData);
      if (userlocalData.userData.register_as_a === "Customer") {
        this.setState({
          user_redirect: true,
          user_id: userlocalData.userData.cus_id,
        });
      }
    }
  }

  render() {
    if (this.state.res_redirect) {
      return (
        <Redirect
          to={{
            pathname: "/res/resprofile",
            state: { id: this.state.res_id },
          }}
        />
      );
    } else if (this.state.user_redirect) {
      return (
        <Redirect
          to={{
            pathname: "/user/profile",
            state: { user_id: this.state.user_id },
          }}
        />
      );
    }
    return <div></div>;
  }
}
export default Loggedin;
