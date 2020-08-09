import React from "react";
import "./Homepage.css";
import Search from "../Search/Search";
import Homepagerestaurants from "../Card/Homepage_restaurants/Homepage_restaurants";
import Homepagemenu from "../Card/Homepage_menu/Homepage_menu";

class Homepage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="homePageImage">
        <div className="homePageSearch">
          <Search />
        </div>

        <Homepagerestaurants />
        <Homepagemenu />
      </div>
    );
  }
}

export default Homepage;
