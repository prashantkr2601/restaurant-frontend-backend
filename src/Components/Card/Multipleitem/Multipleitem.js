import React from "react";
import Singleitem from "../Singleitem/Singleitem";
import "./Multipleitem.css";
import axiosInstance from "../../baseURL/BaseURL";

class Multipleitem extends React.Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      res_name: "",
      res_id: "",
      item_id: "",
      item_name: "",
      item_price: "",
      item_qty: "",
      item_type: "",
      res: [],
    };
  }
  componentDidMount() {
    this._isMounted = true;

    axiosInstance.post("api/api.php?tp=menu").then((result) => {
      //console.log(result);
      let items = result.data.item_data;

      // console.log(items);
      if (items.length > 0) {
        items.map((data) => {
          let res_id = data.res_id;
          axiosInstance
            .post("api/api.php?tp=resprofile", {
              res_id,
            })
            .then((result) => {
              //console.log(result);
              let responseJson = result.data.resData[0];
              if (responseJson && this._isMounted) {
                //sessionStorage.setItem("rec_res", JSON.stringify(responseJson));

                this.setState({
                  res_name: responseJson.res_name,
                  res_id: responseJson.res_id,
                  item_id: data.item_id,
                  item_name: data.item_name,
                  item_price: data.item_price,
                  item_qty: data.item_qty,
                  item_type: data.item_type,
                });
              }
            });
          return "Nothing";
        });
      }
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  componentDidUpdate() {
    //console.log(this.state);
    this.state.res.push(this.state);
  }

  render() {
    var mapvalue = this.state.res;
    // console.log(mapvalue.length);
    //var key_no = Date.now();
    var show_data;
    show_data = mapvalue.map((item) => (
      <Singleitem
        key={item.item_id}
        res_id={item.res_id}
        res_name={item.res_name}
        item_name={item.item_name}
        item_id={item.item_id}
        // imagepath={"#"}
        price={item.item_price}
        quantity={item.item_qty}
        dishtype={item.item_type}
      />
    ));

    return (
      <div style={{ paddingBottom: "50px" }}>
        <div style={{ textAlign: "center" }}>
          <div className="menu_heading">
            <span>Menu Items</span>
          </div>
        </div>
        <ul>
          <li className="Dispalyitem">{show_data}</li>
        </ul>
      </div>
    );
  }
}
export default Multipleitem;
