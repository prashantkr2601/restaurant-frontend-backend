import React from "react";
import Aux from "react-aux";
import axiosInstance from "../baseURL/BaseURL";

import "./Resitem.css";

import Singleitemwithoutresheading from "../Card/Singleitemwithoutresheading/Singleitemwithoutresheading";

class Resitem extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      dishtype: "",
      location: "",
      description: "",
      resrev: "",
      rescost: "",
      resmin: "",
      paymode: "",
      res_name_hide: true,
      res_id: "",
    };
  }

  componentDidMount() {
    this._isMounted = true;
    window.scrollTo(0, 0);
    let res_id = this.props.location.state
      ? this.props.location.state.res_id
      : this.props.match.params.res_id;

    this.setState(
      {
        res_id: res_id,
      },
      () => {
        if (this.state.res_id) {
          this.fetch_data_from_table(this.state.res_id);
        }
      }
    );
  }

  fetch_data_from_table(res_id) {
    axiosInstance
      .post("api/api.php?tp=resprofile", {
        res_id,
      })

      .then((result) => {
        let responseJson = result.data.resData[0];
        if (responseJson && this._isMounted) {
          this.setState({
            name: responseJson.res_name,
            email: responseJson.res_email,
            dishtype: responseJson.res_dishtype,
            location: responseJson.res_location,
            description: responseJson.res_about,
            resrev: responseJson.res_rating,
            rescost: responseJson.res_percost,
            resmin: responseJson.res_mindelivery,
            paymode: responseJson.res_paymode,
          });
        }
      })
      .catch((Error) => {
        alert("Error Retriving Data");
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    //console.log(this.state.name);
    return (
      <Aux>
        <div>
          <span className="resprofilebackimg">{this.state.name}</span>

          <br />

          <div className="res_about">
            <ul className="res_about_ul">
              <li>
                {" "}
                <b className="resprofiledescripheading">About Restaurant</b>
              </li>
              <li></li>
              <li>
                {" "}
                <span>Name:</span>
                {this.state.name}{" "}
              </li>
              <li>
                {" "}
                <span>Email:</span>
                {this.state.email}{" "}
              </li>

              <li>
                {" "}
                <span>Rating:</span>
                {this.state.resrev}{" "}
              </li>
              <li>
                {" "}
                <span>Dishtype:</span>
                {this.state.dishtype}{" "}
              </li>
              <li>
                {" "}
                <span>Location:</span>
                {this.state.location}{" "}
              </li>
              <li>
                {" "}
                <span>Paymode:</span>
                {this.state.paymode}{" "}
              </li>

              <li>
                {" "}
                <span>perpersoncost:</span>
                {this.state.rescost}{" "}
              </li>
              <li>
                {" "}
                <span>Minimumdelivery:</span>
                {this.state.resmin}{" "}
              </li>

              <li>
                {" "}
                <span>Description:</span>
                {this.state.description}{" "}
              </li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: "center", listStyleType: "none" }}>
          <li className="resprofiledescripheading">Menu Items</li>
          <span className="without_heading_res_items">
            {this.state.name ? (
              <Singleitemwithoutresheading
                res_id={this.state.res_id}
                res_name={this.state.name}
                res_name_hide={this.state.res_name_hide}
              />
            ) : null}
          </span>
        </div>
      </Aux>
    );
  }
}
export default Resitem;
