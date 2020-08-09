import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
//import { Redirect } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logout: false,
      redirecthome: false,
    };
    this.logout = this.logout.bind(this);
  }
  // componentDidUpdate() {
  //   let reslocalData = JSON.parse(sessionStorage.getItem("resData"));
  //   let userlocalData = JSON.parse(sessionStorage.getItem("userData"));
  //   if (userlocalData || reslocalData) {
  //     this.setState({
  //       logout: true,
  //     });
  //   }
  // }

  logout() {
    console.log("Logout");
    sessionStorage.setItem("userData", "");
    sessionStorage.setItem("resData", "");
    sessionStorage.clear();
    //this.setState({ logout: !this.state.logout });
    this.setState({ redirecthome: true });
  }
  render() {
    var user_data = JSON.parse(sessionStorage.getItem("userData"));
    var res_data = JSON.parse(sessionStorage.getItem("resData"));
    // console.log(user_data, res_data);
    return (
      <div className="nav">
        {user_data || res_data ? (
          <ul className="navul">
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "white" }}
              replace
            >
              <li className="navli">Happy Meal </li>
            </NavLink>
            <NavLink
              replace
              to="/offers"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>
                <i className="fa fa-gift navofferimag" aria-hidden="true">
                  <br />
                  <span className="tooltip_offers">Offers </span>
                </i>
              </li>
            </NavLink>
            <NavLink
              replace
              to="/menu"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li className="navli">Menu </li>
            </NavLink>
            <NavLink
              replace
              to="/all/restaurants"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li className="navli">Restaurants </li>
            </NavLink>

            <NavLink
              replace
              to="/user/loggedin"
              style={{ textDecoration: "none" }}
            >
              <li>
                <i
                  className="fa fa-user-circle navliloginimag"
                  aria-hidden="true"
                >
                  <br />
                  <span className="tooltip_profile">Profile </span>
                </i>
              </li>
            </NavLink>

            <NavLink replace to="/" style={{ textDecoration: "none" }}>
              <li className="navli" onClick={this.logout}>
                Logout
              </li>
            </NavLink>
          </ul>
        ) : (
          <ul className="navul">
            <NavLink
              replace
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li className="navli">Happy Meal </li>
            </NavLink>

            <NavLink
              replace
              to="/offers"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>
                <i className="fa fa-gift navofferimag" aria-hidden="true">
                  <br />
                  <span className="tooltip_offers">Offers </span>
                </i>
              </li>
            </NavLink>

            <NavLink
              replace
              to="/menu"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li className="navli">Menu </li>
            </NavLink>
            <NavLink
              replace
              to="/all/restaurants"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li className="navli">Restaurants </li>
            </NavLink>

            <NavLink replace to="/joinus" style={{ textDecoration: "none" }}>
              <li className="navli"> Join US</li>
            </NavLink>
          </ul>
        )}
      </div>
    );
  }
}
export default Navbar;
