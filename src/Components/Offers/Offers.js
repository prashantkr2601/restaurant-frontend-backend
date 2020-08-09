import React from "react";
import "./Offers.css";

class Offers extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="offer_main">
        <div ref={this.myRef}></div>
        <div style={{ textAlign: "center" }}>
          <div>
            <br />
            <br />
            <span className="menu_heading">Coupon Codes</span>
            <br />
            <br />
          </div>
        </div>
        <div className="offer_div">
          <ul className="offer_card">
            <li>use Coupon code</li>
            <li>Delhi40</li>
            <li>Get 40% OFF</li>
            <li> Upto ₹100 </li>
            <li>valid :Today</li>
          </ul>

          <ul className="offer_card">
            <li>use Coupon code</li>
            <li>Delhi60</li>
            <li>Get 60% OFF</li>
            <li> Upto ₹150 </li>
            <li>valid :Today</li>
          </ul>

          <ul className="offer_card">
            <li>use Coupon code</li>
            <li>Delhi50</li>
            <li>Get 50% OFF</li>
            <li> Upto ₹100 </li>
            <li>valid :Today</li>
          </ul>

          <ul className="offer_card">
            <li>use Coupon code</li>
            <li>Delhi10</li>
            <li>Get 10% OFF</li>
            <li> Upto ₹1000 </li>
            <li>valid :Today</li>
          </ul>

          <ul className="offer_card">
            <li>use Coupon code</li>
            <li>Delhi30</li>
            <li>Get 30% OFF</li>
            <li> Upto ₹170 </li>
            <li>valid :Today</li>
          </ul>
          <ul className="offer_card">
            <li>use Coupon code</li>
            <li>Delhi20</li>
            <li>Get 20% OFF</li>
            <li> Upto ₹200 </li>
            <li>valid :Today</li>
          </ul>
          <ul className="offer_card">
            <li>use Coupon code</li>
            <li>Delhi80</li>
            <li>Get 80% OFF</li>
            <li> Upto ₹75 </li>
            <li>valid :Today</li>
          </ul>
          <ul className="offer_card">
            <li>use Coupon code</li>
            <li>Delhi60</li>
            <li>Get 60% OFF</li>
            <li> Upto ₹75 </li>
            <li>valid :Today</li>
          </ul>
          <ul className="offer_card">
            <li>use Coupon code</li>
            <li>Delhi100</li>
            <li>Get 100% OFF</li>
            <li> Upto ₹50 </li>
            <li>valid :Today</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Offers;
