import React from "react";
import Aux from "react-aux";
//import Axios from "axios";
import "./Singleitemwithoutresheading.css";
import axiosInstance from "../../baseURL/BaseURL";

import Singleitem from "../Singleitem/Singleitem";

class Singleitemwithoutresheading extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      res_id: "",
      res_name: "",
      item_id: "",
      item_name: "",
      item_price: "",
      item_qty: "",
      item_type: "",
      res_name_hide: "",
      imgpath: "/images/item/daalchawal.jpg",
      all_item_card: [],
    };
  }
  componentDidMount() {
    //   console.log(this.props);
    this._isMounted = true;

    if (this.props.res_id && this.props.res_name) {
      this.fetch_data_from_table(this.props.res_id);
    }
  }

  fetch_data_from_table(res_id) {
    axiosInstance
      .post("api/api.php?tp=additemdisplay", {
        res_id,
      })
      .then((result) => {
        // console.log("item res3:", result.data.itemData);

        let item = result.data.itemData;

        if (item && this._isMounted) {
          item.map((data) => {
            this.setState({
              res_id: data.res_id,
              res_name: this.props.res_name,
              item_id: data.item_id,
              item_name: data.item_name,
              item_price: data.item_price,
              item_qty: data.item_qty,
              item_type: data.item_type,
              res_name_hide: this.props.res_name_hide,
            });
            return "nothing";
          });
        } else {
          console.log("error");
          // console.log(item.length, this.props.res_name, this.props.res_id);
        }
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  componentDidUpdate() {
    this.state.all_item_card.push(this.state);
    //console.log(this.state);
  }
  render() {
    // console.log(this.props.res_name);
    let item = this.state.all_item_card;
    //console.log(item.length);

    var show_data = item.map((data) => (
      <Singleitem
        key={data.item_id}
        imgpath={this.state.imgpath}
        res_id={data.res_id}
        res_name={this.props.res_name}
        item_id={data.item_id}
        item_name={data.item_name}
        price={data.item_price}
        quantity={data.item_qty}
        dishtype={data.item_type}
        res_name_hide={this.props.res_name_hide}
      />
    ));
    return (
      <Aux>
        <div>
          {item.length > 0 ? (
            <span className="without_heading_res_items">{show_data}</span>
          ) : (
            <div className="no_item">
              <br />
              <span>Sorry,No Item Available.</span>
              <br />
              <br />
              <span>Please try another Restaurants.</span>
              <br />
              <br />
              <span>
                <img
                  src="/images/orderpageimg.gif"
                  alt="no item available"
                  style={{
                    width: "200px",
                    height: "250px",
                    borderRadius: "20px",
                  }}
                />
              </span>
              <br />
              <br />
              <span>We are happy to serve you.</span>
            </div>
          )}
        </div>
      </Aux>
    );
  }
}
export default Singleitemwithoutresheading;
