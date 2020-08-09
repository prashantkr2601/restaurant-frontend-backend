import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "react-aux";

import Navbar from "../Navbar/Navbar";
import Homepage from "../Homepage/Homepage";
import Resitem from "../Resitem/Resitem";
import Signup from "../Signup/Signup";
import Multipleitem from "../Card/Multipleitem/Multipleitem";
import Pagenotfound from "../Pagenotfound/Pagenotfound";
import Userprofile from "../Userprofile/Userprofile";
import Loggedin from "../Loggedin/Loggedin";
import Resprofile from "../Restaurant/Resprofile/Resprofile";
import Orderpage from "../Orderpage/Orderpage";
import Allrestaurants from "../Card/Allrestaurants/Allrestaurants";
import Offers from "../Offers/Offers";

class Routerall extends Component {
  render() {
    return (
      <Axios>
        <Router>
          <Route path="/" component={Navbar} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/joinus" component={Signup} />
            <Route exact path="/user/loggedin" component={Loggedin} />
            <Route exact path="/user/profile" component={Userprofile} />
            <Route exact path="/res/resprofile" component={Resprofile} />
            <Route exact path="/about/restaurant/:res_id" component={Resitem} />
            <Route exact path="/item/order" component={Orderpage} />
            <Route exact path="/menu" component={Multipleitem} />
            <Route exact path="/offers" component={Offers} />
            <Route exact path="/all/restaurants" component={Allrestaurants} />
            <Route exact path="" component={Pagenotfound} />
          </Switch>
        </Router>
      </Axios>
    );
  }
}
export default Routerall;
