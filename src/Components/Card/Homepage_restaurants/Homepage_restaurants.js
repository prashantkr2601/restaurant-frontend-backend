import React from "react";
import "./Homepage_restaurants.css";
//import { Redirect } from "react-router-dom";
//import Axios from "axios";
import axiosInstance from "../../baseURL/BaseURL";
import { NavLink } from "react-router-dom";

import Singlerestaurant from "../Allrestaurants/Singlerestaurant/Singlerestaurant";
class Hompepagerestaurants extends React.Component {
  constructor() {
    super();
    this.state = {
      res_id: "",
      res_name: "",
      res_type: "",
      res_paymode: "",
      res_location: "",
      res_rating: "",
      res_min_delivery: "",
      res_img_path: "",
      res_per_person_cost: "",

      allresdata: [],

      redirect_to_about_res: false,
    };
  }

  componentDidMount() {
    this.fetch_all_restaurants();
  }
  fetch_all_restaurants() {
    axiosInstance.post("api/api.php?tp=homepage_restaurants").then((result) => {
      // console.log("item res3:", result.data.allrestaurants);

      let item = result.data.allrestaurants;
      this.setState({ allresdata: item });
      //console.log(item);
    });
  }

  handleclick() {
    this.setState({ redirect_to_about_res: !this.state.redirect_to_about_res });
  }

  render() {
    var show_restaurants;
    var all_data = this.state.allresdata;
    //var key_no = Date.now();
    if (all_data.length > 0) {
      show_restaurants = all_data.map((data) => (
        <Singlerestaurant
          key={data.res_id}
          res_id={data.res_id}
          res_name={data.res_name}
          res_type={data.res_dishtype}
          res_location={data.res_location}
          res_rating={data.res_rating}
          res_min_delivery={data.res_mindelivery}
          res_img_path={data.res_img_path}
          res_per_person_cost={data.res_percost}
          res_paymode={data.res_paymode}
        />
      ));
      // console.log(this.state.allresdata);
    }

    // console.log(this.state);
    return (
      <div style={{ paddingBottom: "50px" }}>
        <div style={{ textAlign: "center" }}>
          <span className="menu_heading">Popular Restaurants</span>
        </div>
        <br />
        <div className="Dispalyitem">{show_restaurants}</div>
        <NavLink
          to="/all/restaurants"
          replace
          style={{ textDecoration: "none", color: "white" }}
        >
          <div style={{ textAlign: "center" }} className="homepage_view_menu">
            <span>View All Restaurants</span>
          </div>
        </NavLink>
      </div>
    );
  }
}
export default Hompepagerestaurants;
