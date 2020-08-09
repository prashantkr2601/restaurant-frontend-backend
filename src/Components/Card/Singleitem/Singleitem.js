import React from "react";
import "./Singleitem.css";
import { Redirect } from "react-router-dom";
import axiosInstance from "../../baseURL/BaseURL";
class Singleitem extends React.Component {
  constructor() {
    super();
    this.state = {
      about_res_redirect: false,
      redirect_to_login: false,
      not_redirect_to_login: false,
      redirect_to_orderpage: false,
      imgpath: "/images/item/daalchawal.jpg",
      redirect_order_no: "",
    };
  }
  viewrestaurant() {
    this.setState({
      about_res_redirect: !this.state.about_res_redirect,
    });
  }
  // componentDidUpdate() {
  //   if (this.props.res_name_hide === true) {
  //     this.setState({ res_name_hide: !this.state.res_name_hide });
  //   }
  // }

  handleorder() {
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

              // if (responseJson.userData) {
              //   sessionStorage.setItem("userData", JSON.stringify(responseJson));
              //   this.setState({ navlogin: true });
              // } else if (responseJson.resData) {
              //   sessionStorage.setItem("resData", JSON.stringify(responseJson));
              //   this.setState({ navlogin: true });
              // }
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
    if (this.state.about_res_redirect) {
      return (
        <Redirect
          to={{
            pathname: `/about/restaurant/${this.props.res_id}`,
            state: { res_id: this.props.res_id },
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
              item_price: this.props.price,
              item_qty: this.props.quantity,
              item_type: this.props.dishtype,
              item_img: this.state.imgpath,
              order_no: this.state.redirect_order_no,
            },
          }}
        />
      );
    }
    // console.log(this.props);
    return (
      <div>
        {this.props.item_name &&
        this.props.item_id &&
        this.props.quantity &&
        this.props.dishtype &&
        this.props.price &&
        this.props.res_id ? (
          <div className="singleitem ">
            {this.props.res_name_hide ? null : (
              <div
                className="res_heading"
                onClick={() => this.viewrestaurant()}
              >
                <span>{this.props.res_name}</span>
                <span className="res_heading_tooltip">Restaurant Name</span>
              </div>
            )}
            <ul className="singleitemul">
              <li>
                <img
                  src={this.state.imgpath}
                  alt={this.props.item_name}
                  className="item_img"
                />
              </li>
              <li>
                <div className="item_name">
                  <span>{this.props.item_name} </span>
                  <span className="item_name_tooltip">Food Name </span>
                </div>
                <br />

                <span>Type:{this.props.dishtype}</span>
                <br />
                <span>Price:₹{this.props.price}</span>
                <br />
                <span>Quantity:{this.props.quantity}</span>

                <br />
                <br />
                <div className="order_btn" onClick={() => this.handleorder()}>
                  <span>Order Now</span>
                </div>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Singleitem;
