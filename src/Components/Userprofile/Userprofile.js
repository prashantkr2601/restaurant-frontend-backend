import React from "react";
import Aux from "react-aux";
import axiosInstance from "../baseURL/BaseURL";

import "./Userprofile.css";
import Singleorder from "../Card/Singleorder/Singleorder";
class Userprofile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      pass: "",
      dishtype: "",
      create_account: "",
      item_name: "",
      item_qty: "",
      item_price: "",
      item_type: "",
      res_name: "",
      order_time: "",
      order_id: "",
      order_no: "",
      all_data: [],
    };
  }

  componentDidMount() {
    let user_id = this.props.location.state.user_id;
    let user_data = JSON.parse(sessionStorage.getItem("userData"));
    //console.log(this.props, user_data.userData);
    if (user_id && user_data.userData) {
      this.fetch_data_from_table(user_id, user_data.userData);
    }
  }
  fetch_data_from_table(user_id, user_data) {
    // this.setState({
    //
    // });

    axiosInstance
      .post("api/api.php?tp=userorders", {
        user_id,
      })

      .then((result) => {
        //console.log(result.data.userorders);
        let responseJson = result.data.userorders;
        //console.log(responseJson);
        if (responseJson.length > 0) {
          //sessionStorage.setItem("user_orders", JSON.stringify(responseJson));

          responseJson.map((data) => {
            let item_id = data.item_id;
            let res_id = data.res_id;

            // console.log(item_id, res_id);

            axiosInstance
              .post("api/api.php?tp=orderdisplay", {
                item_id,
              })

              .then((result) => {
                //console.log("item res3:", result.data.itemData);

                let item = result.data.itemData;
                if (item.length > 0) {
                  //console.log("item res:", item[0].item_name);

                  axiosInstance
                    .post("api/api.php?tp=resprofile", {
                      res_id,
                    })
                    .then((result) => {
                      let res = result.data.resData;
                      if (res.length > 0) {
                        // console.log("res1:", result.data.resData[0].res_name);
                        this.setState(
                          {
                            name: user_data.cus_name,
                            email: user_data.cus_email,
                            pass: user_data.cus_pass,
                            dishtype: user_data.cus_dish_type,
                            create_account: user_data.cus_time,

                            res_name: res[0].res_name,
                            res_id: res[0].res_id,

                            item_id: item[0].item_id,
                            item_name: item[0].item_name,
                            item_price: item[0].item_price,
                            item_qty: item[0].item_qty,
                            item_type: item[0].item_type,

                            order_id: data.order_id,
                            order_no: data.order_no,
                            order_time: data.order_create_time,
                          },
                          () => {
                            //console.log(this.state);
                          }
                        );
                      }
                      //console.log(this.state);
                    })
                    .catch((Error) => {
                      alert("Error Retriving Data1");
                    });
                }
                //console.log(this.state);
              })
              .catch((Error) => {
                alert("Error Retriving Data2");
              });
            return "nothing";
          });
        }
      })

      .catch((Error) => {
        alert("Error Retriving Data2", Error);
      });
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);

    this.state.all_data.push(this.state);
  }

  render() {
    //console.log(this.state.all_data);

    var user_data = JSON.parse(sessionStorage.getItem("userData"));
    var res_heading = "Restaurant Name";
    var show_data;
    var state_data = this.state.all_data;
    //var key_no = new Date.now();
    //console.log(this.state.all_data.length);

    if (user_data && state_data.length > 0) {
      show_data = state_data.map((e) => (
        <Singleorder
          key={e.order_id}
          res_id={e.res_id}
          res_heading={res_heading}
          res_name={e.res_name}
          item_name={e.item_name}
          item_id={e.item_id}
          // item_img={}
          item_price={e.item_price}
          item_qty={e.item_qty}
          item_type={e.item_type}
          order_no={e.order_id}
          order_time={e.order_time}
        />
      ));
    }
    // console.log(user_data);
    return (
      <Aux>
        {user_data ? (
          <div>
            <span className="userprofilebackimg">
              {user_data.userData.cus_name}
            </span>

            <br />

            <div className="user_about">
              <ul className="user_about_ul">
                <li>
                  {" "}
                  <b className="userprofiledescripheading">About Customer</b>
                </li>
                <li></li>
                <li>
                  {" "}
                  <span className="userprofiledescripheading">Name:</span>
                  {user_data.userData.cus_name}{" "}
                </li>
                <li>
                  {" "}
                  <span className="userprofiledescripheading">Email:</span>
                  {user_data.userData.cus_email}{" "}
                </li>

                <li>
                  {" "}
                  <span className="userprofiledescripheading">Dishtype:</span>
                  {user_data.userData.cus_dish_type}{" "}
                </li>

                <li>
                  {" "}
                  <span className="userprofiledescripheading">Password:</span>
                  {user_data.userData.cus_pass}{" "}
                </li>
                <li>
                  {" "}
                  <span className="userprofiledescripheading">
                    Account Created :
                  </span>
                  {user_data.userData.cus_time}{" "}
                </li>
              </ul>
            </div>

            {/* Orders details */}

            <div>
              <div>
                <li style={{ textAlign: "center", listStyleType: "none" }}>
                  <b className="userprofiledescripheading">Orders History:</b>
                </li>
              </div>
              <br />
              {show_data ? (
                <li className="order_history">{show_data}</li>
              ) : (
                <div className="no_item no_item5 ">
                  <span>
                    <br />
                    <span>No items ordered</span>
                    <br />
                    <br />
                    <span>Please try to order more items</span>
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
export default Userprofile;
