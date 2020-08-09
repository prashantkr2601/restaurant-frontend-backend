import React, { Component } from "react";
import "./Orderpage.css";
import Aux from "react-aux";
import Singleorder from "../Card/Singleorder/Singleorder";

class Orderpage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    //console.log(this.props);

    var show_data = (
      <Singleorder
        res_heading="Restaurant Name"
        reoder_btn_hide="hide"
        res_name={this.props.location.state.res_name}
        res_id={this.props.location.state.res_id}
        order_no={this.props.location.state.order_no}
        item_name={this.props.location.state.item_name}
        item_price={this.props.location.state.item_price}
        item_qty={this.props.location.state.item_qty}
        item_type={this.props.location.state.item_type}
        item_img={this.props.location.state.item_img}
      />
    );
    //    console.log(show_data);
    return (
      <Aux>
        <div className="orderpage">
          <br />
          <b style={{ color: "green", fontSize: "1.2em" }}>
            Your order is successful
          </b>
          <br />
          <b>
            <br />
            Order number is:
            <b style={{ color: "green" }}>
              {this.props.location.state.order_no}
            </b>
            <br />
          </b>
          <b>
            <br />
            Order details
            <br />
            <br />
          </b>
          <div className="order_details1">
            <li> {show_data}</li>
          </div>
          <br /> <br />
          <p>
            <b>Order Status:Your order is on the way</b>
          </p>
          <p>
            If you have any Query regarding this order feel free to contact us.
          </p>
          <p>its our pleasure to help you.</p>
        </div>
      </Aux>
    );
  }
}
export default Orderpage;
