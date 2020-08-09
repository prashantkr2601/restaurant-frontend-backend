import React from "react";
import Aux from "react-aux";
//import Axios from "axios";
import "./Resprofile.css";
import Singleitem from "../../Card/Singleitem/Singleitem";
import axiosInstance from "../../baseURL/BaseURL";
import Additem from "../Additem/Additem";
import Singleorder from "../../Card/Singleorder/Singleorder";
import Singleitemwithoutresheading from "../../Card/Singleitemwithoutresheading/Singleitemwithoutresheading";

class Resprofile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      pass: "",
      dishtype: "",
      location: "",
      description: "",
      resrev: "",
      rescost: "",
      resmin: "",
      paymode: "",
      imgpath: "/images/item/daalchawal.jpg",
      res_name_hide: true,
      all_data: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    let res_data = JSON.parse(sessionStorage.getItem("resData"));
    //console.log(res_data.resData.res_id);
    let res_id = res_data.resData.res_id;

    if (res_data.resData) {
      this.fetch_data_from_table(res_id, res_data.resData);
    }
  }
  fetch_data_from_table(res_id, res_data) {
    axiosInstance
      .post("api/api.php?tp=resorders", {
        res_id,
      })
      .then((result) => {
        // console.log(res_id);
        // console.log(result1);
        let responseJson = result.data.resorders;
        //console.log(responseJson);
        if (responseJson.length > 0) {
          //sessionStorage.setItem("user_orders", JSON.stringify(responseJson));

          responseJson.map((data) => {
            let item_id = data.item_id;
            let user_id = data.cus_id;

            //console.log(user_id);

            axiosInstance
              .post("api/api.php?tp=orderdisplay", {
                item_id,
              })
              .then((result) => {
                //console.log("item res3:", result.data.itemData);

                let item = result.data.itemData;
                if (item.length > 0) {
                  //console.log("item res:", item[0].item_name);

                  //console.log(this.state);

                  axiosInstance
                    .post("api/api.php?tp=userprofile", {
                      user_id,
                    })
                    .then((result) => {
                      // console.log(result);
                      let user = result.data.user_details;
                      if (user.length > 0) {
                        // console.log("res1:", result.data.resData[0].res_name);
                        this.setState(
                          {
                            name: res_data.res_name,
                            res_id: res_data.res_id,
                            email: res_data.res_email,
                            pass: res_data.res_pass,
                            dishtype: res_data.res_dishtype,
                            location: res_data.res_location,
                            description: res_data.res_about,
                            resrev: res_data.res_rating,
                            rescost: res_data.res_percost,
                            resmin: res_data.res_mindelivery,
                            paymode: res_data.res_paymode,

                            user_name: user[0].cus_name,
                            user_id: user[0].cus_id,

                            item_id: item[0].item_id,
                            item_name: item[0].item_name,
                            item_price: item[0].item_price,
                            item_qty: item[0].item_qty,
                            item_type: item[0].item_type,

                            order_id: data.order_id,
                            order_no: data.order_no,
                            order_time: data.order_create_time,
                          }
                          // () => {
                          //   //console.log(this.state);
                          // }
                        );
                      }
                    })
                    .catch((Error) => {
                      alert("Error Retriving Data3");
                    });
                }
              })
              .catch((Error) => {
                alert("Error Retriving Data2");
              });
            return "nothing";
          });

          //console.log(res_order_data);
        }
      })
      .catch((Error) => {
        alert("Error Retriving Data2", Error);
      });
  }
  componentDidUpdate() {
    this.state.all_data.push(this.state);
  }
  render() {
    var res_data = JSON.parse(sessionStorage.getItem("resData"));
    var show_data;
    var state_data = this.state.all_data;
    var res_heading = "Customer Name";
    //console.log(state_data);
    //console.log(res_data);

    if (res_data && state_data.length > 0) {
      show_data = state_data.map((e) => (
        <Singleorder
          key={e.order_id}
          res_id={e.res_id}
          res_heading={res_heading}
          res_name={e.user_name}
          item_name={e.item_name}
          item_id={e.item_id}
          item_img={this.state.imgpath}
          item_price={e.item_price}
          item_qty={e.item_qty}
          item_type={e.item_type}
          order_no={e.order_id}
          order_time={e.order_time}
        />
      ));
    }

    var rec_res_data = JSON.parse(sessionStorage.getItem("rec_item"));
    var withData_show;
    //var key_no = Date.now();

    //console.log(rec_res_data.length);

    if (rec_res_data) {
      //console.log(rec_res_data.length);
      withData_show = rec_res_data.map((data) => (
        <Singleitem
          key={data.item_id}
          imgpath={this.state.imgpath}
          res_id={res_data.resData.res_id}
          res_name={res_data.resData.res_name}
          item_id={data.item_id}
          item_name={data.item_name}
          price={data.item_price}
          quantity={data.item_qty}
          dishtype={data.item_type}
          res_name_hide={this.state.res_name_hide}
        />
      ));
    } else {
      withData_show = (
        <Singleitemwithoutresheading
          res_id={res_data.resData.res_id}
          res_name={res_data.resData.res_name}
          res_name_hide={this.state.res_name_hide}
        />
      );
    }

    return (
      <Aux>
        {res_data ? (
          <div>
            <span className="resprofilebackimg">
              {res_data.resData.res_name}
            </span>

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
                  {res_data.resData.res_name}{" "}
                </li>
                <li>
                  {" "}
                  <span>Email:</span>
                  {res_data.resData.res_email}{" "}
                </li>

                <li>
                  {" "}
                  <span>Rating:</span>
                  {res_data.resData.res_rating}{" "}
                </li>
                <li>
                  {" "}
                  <span>Dishtype:</span>
                  {res_data.resData.res_dishtype}{" "}
                </li>
                <li>
                  {" "}
                  <span>Location:</span>
                  {res_data.resData.res_location}{" "}
                </li>
                <li>
                  {" "}
                  <span>Paymode:</span>
                  {res_data.resData.res_paymode}{" "}
                </li>
                <li>
                  {" "}
                  <span>Password:</span>
                  {res_data.resData.res_pass}{" "}
                </li>
                <li>
                  {" "}
                  <span>per person cost:</span>
                  {res_data.resData.res_percost}{" "}
                </li>
                <li>
                  {" "}
                  <span>Minimum delivery:</span>
                  {res_data.resData.res_mindelivery}{" "}
                </li>

                <li>
                  {" "}
                  <span>Description:</span>
                  {res_data.resData.res_about}{" "}
                </li>
                <li>
                  {" "}
                  <span>Account Create Time:</span>
                  {res_data.resData.res_create_time}{" "}
                </li>
              </ul>
            </div>
            <br />
            <div style={{ textAlign: "center", listStyleType: "none" }}>
              <li className="resprofiledescripheading">Add New Items</li>
            </div>
            <br />
            {/* {console.log(<Additem res_id={res_data.resData.res_id} />)} */}

            <Additem res_id={res_data.resData.res_id} />

            <div>
              <br />
              <div style={{ textAlign: "center", listStyleType: "none" }}>
                <li className="resprofiledescripheading">Menu Items</li>
                <span className="without_heading_res_items">
                  {withData_show}
                </span>
              </div>
              <br />
              <div>
                <li style={{ textAlign: "center", listStyleType: "none" }}>
                  <b className="userprofiledescripheading">Orders History:</b>
                </li>
              </div>
              <br />
              {show_data ? (
                <li className="order_history">{show_data}</li>
              ) : (
                <div className="no_item no_item5">
                  <span>
                    <br />
                    <span>Sorry,No Item Order.</span>
                    <br />
                    <br />
                    <span>
                      Please try to attract customer to do <br />
                      that give them some % OFF on items .
                    </span>
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
                  </span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Aux>
            <div className="pagenotfoundmain">
              <span>404</span>
              <p>Something is Worng</p>
            </div>
          </Aux>
        )}
      </Aux>
    );
  }
}
export default Resprofile;
