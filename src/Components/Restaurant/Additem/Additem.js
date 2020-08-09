import React, { Component } from "react";
import "./Additem.css";
//import Singleitem from "../../Card/Singleitem/Singleitem";
import axiosInstance from "../../baseURL/BaseURL";

class Additem extends Component {
  constructor() {
    super();
    this.state = {
      additem: false,
      dishname: "",
      price: "",
      quantity: "",
      dishtype: "",
      UploadProgress: "",
      dishimage: "",
    };
    this.additemform = this.additemform.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let res_id = this.props.res_id;
    // console.log(this.props);
    let res_data = JSON.parse(sessionStorage.getItem("resData"));
    if (res_id && res_data) {
      // console.log(res_id, res_data);

      axiosInstance
        .post("api/api.php?tp=additemdisplay", {
          res_id,
        })

        .then((result) => {
          let responseJson = result.data.itemData;
          if (responseJson) {
            sessionStorage.setItem("rec_item", JSON.stringify(responseJson));
            // console.log("jknd", responseJson);
          }
        })
        .catch((Error) => {
          alert("Error Retriving Data");
        });
    }
  }

  additemform() {
    this.setState({
      additem: !this.state.additem,
    });
  }

  handleChange(event) {
    const { name, value, maxLength } = event.target;
    const price = value.slice(0, maxLength);
    if (name === "dishimage") {
      this.setState({
        dishimage: event.target.files[0],
      });
    } else if (name === "price") {
      this.setState({
        price,
      });
    } else
      this.setState({
        [name]: value,
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { dishname, price, quantity, dishtype, dishimage } = this.state;
    if (dishname !== "" && price !== "" && quantity !== "" && dishtype !== "") {
      if (dishimage) {
        const fd = new FormData();
        fd.append("Dishimage", dishimage, dishimage.name);
      }

      var res_id = this.props.res_id;
      // console.log("res", res_id, dishname, price, quantity, dishtype);
      axiosInstance
        .post("api/api.php?tp=additeminsert", {
          res_id,
          dishname,
          price,
          quantity,
          dishtype,
        })

        .then((result) => {
          let responseJson = result.data.itemData;
          if (responseJson) {
            alert("Successful insertion");
            window.location.reload(true);
            // console.log("Successful insertion");
            // console.log(responseJson);
            //sessionStorage.setItem("rec_item", JSON.stringify(responseJson));
            // console.log(rec_res_data);
            // console.log(result.data);
          }
        })
        .catch((Error) => {
          alert("Error Retriving Data1");
        });

      // {
      //   onUploadProgress: (ProgressEvent) => {
      //     var percentCompleted = Math.round(
      //       (ProgressEvent.loaded * 100) / ProgressEvent.total
      //     );
      //     this.setState({ UploadProgress: percentCompleted });
      //   },
      // }
    } else alert("All fields are required ");
  }

  render() {
    //var rec_res_data = JSON.parse(sessionStorage.getItem("rec_item"));
    // var withData;
    // console.log(this.props.res_id);
    // console.log(rec_res_data);

    // if (rec_res_data) {
    //   //console.log(rec_res_data);
    //   withData = rec_res_data.map((item) => (
    //     <Singleitem
    //       key={item.item_id}
    //       name={item.item_name}
    //       price={item.item_price}
    //       quantity={item.item_qty}
    //       dishtype={item.item_type}
    //     />
    //   ));
    // console.log(withData);
    //}

    const additemformdata = this.state.additem ? (
      <form className="addnewitemform" onSubmit={this.handleSubmit}>
        <ul className="addnewitemformul">
          <li>
            <h4>Add New Item</h4>
          </li>
          <li>
            <input
              type="text"
              className="addnewitemformulinput"
              name="dishname"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Dish Name"
            />
            <b className="addnewitemformulinputreq">*</b>
          </li>

          <li>
            <input
              type="number"
              maxLength="5"
              className="addnewitemformulinput"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              placeholder="Enter Dish Price"
            />
            <b className="addnewitemformulinputreq">*</b>
          </li>

          <li>
            <input
              type="text"
              className="addnewitemformulinput"
              name="quantity"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Dish Quantity"
            />
            <b className="addnewitemformulinputreq">*</b>
          </li>
          <li>
            <select
              className="addnewitemformulinput"
              value={this.state.name}
              name="dishtype"
              onChange={this.handleChange}
            >
              <option value="">Please Choose Dish Type</option>
              <option value="Veg">Veg</option>
              <option value="Nonveg">Nonveg</option>
            </select>
            <b className="addnewitemformulinputreq">*</b>
          </li>
          {/* <li>
            <input
              style={{ display: "none" }}
              type="file"
              name="dishimage"
              value={this.state.name}
              onChange={this.handleChange}
              ref={(fileinput) => (this.fileinput = fileinput)}
            />
            <p className="itemimage" onClick={() => this.fileinput.click()}>
              {this.state.dishimage.name
                ? this.state.dishimage.name
                : "Select Image"}
            </p>
            <b>
              Upload Progress:
              {this.state.UploadProgress
                ? this.state.UploadProgress + "%"
                : "0%"}
            </b>
          </li> */}
          <span>
            <button
              type="submit"
              className="addnewitemformulbutton"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </span>
        </ul>
      </form>
    ) : null;

    return (
      <div>
        <div className="Additemmain">
          <span className="Additemdiv" onClick={this.additemform}>
            <i className="fa fa-plus addcircle" aria-hidden="true"></i>
          </span>
        </div>

        <div className="addnewitemformmain">{additemformdata}</div>
        {/* <div>
          <ul>
            <li className="Dispalyalliteminresprofile">{withData}</li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default Additem;
