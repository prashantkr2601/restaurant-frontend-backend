import React from "react";
//import "./Singlerestaurant.css";
import { Redirect } from "react-router-dom";
//import Axios from "axios";
class Singlerestaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect_to_about_res: false,
      imgpath: "/images/restaurant/1.jpg",
    };
  }

  handleclick() {
    this.setState({ redirect_to_about_res: !this.props.redirect_to_about_res });
  }

  render() {
    if (this.state.redirect_to_about_res) {
      return (
        <Redirect
          to={{
            pathname: `/about/restaurant/${this.props.res_id}`,
            state: { res_id: this.props.res_id, res_name: this.props.res_name },
          }}
        />
      );
    }

    // console.log(this.props);
    return (
      <div>
        <div className="singleitem ">
          <div className="res_heading" onClick={() => this.handleclick()}>
            <span>{this.props.res_name}</span>
            <span className="res_heading_tooltip">Restaurant Name</span>
          </div>

          <ul className="singleitemul">
            <li>
              <img
                src={this.state.imgpath}
                alt={this.props.res_name}
                className="item_img"
              />
            </li>
            <li>
              <span>Rating:{this.props.res_rating}</span>

              <br />
              <span>Per Person:₹{this.props.res_per_person_cost}</span>
              <br />
              <span>Location:{this.props.res_location}</span>

              <br />

              <span>Min Delivery:₹{this.props.res_min_delivery}</span>
              <br />

              <span>Type:{this.props.res_type}</span>
              <br />

              <span>Paymode:{this.props.res_paymode}</span>
              <br />

              <br />
              <div className="order_btn" onClick={() => this.handleclick()}>
                <span>View Details</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Singlerestaurant;
