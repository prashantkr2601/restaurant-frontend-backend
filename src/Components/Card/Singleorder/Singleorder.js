import React from "react";
import "./Singleorder.css";
import { Redirect } from "react-router-dom";
import axiosInstance from "../../baseURL/BaseURL";

class Singleorder extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect_to_about_res: false,
      redirect_to_login: false,
      not_redirect_to_login: false,
      redirect_to_orderpage: false,
      redirect_order_no: "",
      imgpath: "/images/restaurant/1.jpg",
    };
  }
  handleclick() {
    if (this.props.res_heading === "Restaurant Name") {
      this.setState({
        redirect_to_about_res: !this.state.redirect_to_about_res,
      });
    }
  }

  reorderclick() {
    //console.log(this.props);
    var user_data = JSON.parse(sessionStorage.getItem("userData"));
    var res_data = JSON.parse(sessionStorage.getItem("resData"));
    if (user_data) {
      if (user_data.userData.register_as_a === "Customer" && user_data) {
        let register_as_a = user_data.userData.register_as_a;
        let user_id = user_data.userData.cus_id;
        let res_id = this.props.res_id;
        let item_id = this.props.item_id;
        var order_no = new Date().getTime();
        //console.log(register_as_a, order_no, user_id, res_id, item_id);
        if (
          register_as_a &&
          order_no > 0 &&
          user_id > 0 &&
          res_id > 0 &&
          item_id > 0
        ) {
          axiosInstance
            .post("api/api.php?tp=orderinsert", {
              register_as_a,
              order_no,
              user_id,
              res_id,
              item_id,
            })

            .then((result) => {
              if (result.data === "order successful") {
                // console.log(this.props, this.state);
                this.setState({
                  redirect_order_no: order_no,
                  redirect_to_orderpage: !this.state.redirect_to_orderpage,
                });
              }
            })
            .catch((Error) => {
              alert("Error Retriving Data");
            });
        }
      }
    } else if (res_data) {
      alert("Please Logout and Signin/Signup as a Customer");
      this.setState({
        not_redirect_to_login: !this.state.not_redirect_to_login,
      });
    } else {
      alert("please Login as a Customer");
      this.setState({ redirect_to_login: !this.state.redirect_to_login });
    }
  }

  render() {
    //console.log(this.props);
    if (this.state.redirect_to_about_res) {
      return (
        <Redirect
          to={{
            pathname: `/about/restaurant/${this.props.res_id}`,
            state: {
              res_id: this.props.res_id,
              res_name: this.props.res_name,
            },
          }}
        />
      );
    }

    if (this.state.redirect_to_login && !this.state.not_redirect_to_login) {
      return (
        <Redirect
          to={{
            pathname: "/joinus",
          }}
        />
      );
    }
    if (this.state.redirect_to_orderpage) {
      return (
        <Redirect
          to={{
            pathname: "/item/order",
            state: {
              res_name: this.props.res_name,
              res_id: this.props.res_id,
              item_name: this.props.item_name,
              item_price: this.props.item_price,
              item_qty: this.props.item_qty,
              item_type: this.props.item_type,
              order_no: this.state.redirect_order_no,
            },
          }}
        />
      );
    }
    //console.log(this.props);

    return (
      <div className="maincard">
        <ul className="maincardul">
          <li>
            <div>
              <img
                src={this.state.imgpath}
                alt={this.props.name}
                className="scardimage"
              />
            </div>
          </li>

          <li>
            <span
              className="resnamesinglecard"
              onClick={() => this.handleclick()}
            >
              {this.props.res_heading}:
              {this.props.res_name ? this.props.res_name : this.props.cus_name}
            </span>

            <br />
            <span>
              <b> Order No:</b>
              {this.props.order_no}
            </span>
            <br />
            <span>
              <b>Item Name:</b>
              <b>{this.props.item_name}</b>
            </span>
            <br />
            <span>
              <b>Item Price:</b>
              {this.props.item_price}
            </span>
            <br />
            <span>
              <b>Item Qty:</b>
              {this.props.item_qty}
            </span>
            <br />
            <span>
              <b>Item Type:</b>
              {this.props.item_type}
            </span>
            <br />

            <span>
              <b>Order Time:</b>
              {this.props.reoder_btn_hide ? Date() : this.props.order_time}
            </span>

            <br />
            <br />
            {this.props.res_heading === "Restaurant Name" ? (
              this.props.reoder_btn_hide ? null : (
                <span className="SCardMDOB" onClick={() => this.reorderclick()}>
                  Reorder
                </span>
              )
            ) : (
              <span className="SCardMDOB">View Details</span>
            )}
          </li>
          <br />
        </ul>
      </div>
    );
  }
}
export default Singleorder;
