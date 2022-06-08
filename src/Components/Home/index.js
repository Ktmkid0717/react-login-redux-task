import React, { useState, useEffect } from "react";
import "./index.css";
import { Form, Button } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../Redux/userReducer";
import { selectUser } from "../Redux/userReducer";
import { apiInstance } from "../Apis/AuthApi";
import SoltListing from "./SlotListing";
import { Spin, Empty } from "antd";

const Home = () => {
  const [data, updateData] = useState([]);
  const [selectedData, updateSelectedData] = useState("");
  const [showList, updateShowList] = useState(false);
  const [loading, updateLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    getSheduleApi();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const getSheduleApi = () => {
    // updateLoading(true);
    // const head = {
    //   headers: {
    //     "api-header-security":
    //       "C1kxIHN1D81zT7DXFQINoiQKDRXIMLCWTugbg9CorYg5SIxHsBBLNvNbebCxoC1qWhtx",
    //     Authorization: `Bearer ${user.accessToken}`,
    //   },
    // };
    let config = {
      headers: {
        "api-header-security":
          "C1kxIHN1D81zT7DXFQINoiQKDRXIMLCWTugbg9CorYg5SIxHsBBLNvNbebCxoC1qWhtx",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    apiInstance
      .get(
        "https://api.quikdr.com/schedules?doctorsId=364&organisationsId=140&&date[$gte]=2022-05-10&date[$lte]=2022-05-30&$skip=0&$limit=500&$sort[date]=1&$sort[time]=1",
        config
      )
      .then((res) => {
        if (res.data) {
          updateData(res.data);
          updateLoading(false);
        }
      }).catch = (e) => {
      console.log(e);
      updateLoading(false);
    };
  };
  const onSubmit = () => {
    dispatch(logout(null));
  };
  return (
    <>
      {" "}
      <div className="main">
        <div className="sub">
          <div className="header">
            <Form name="basic" onFinish={onSubmit}>
              <Form.Item
                wrapperCol={{
                  offset: 20,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  size="small"
                  // className="login-form-button"
                  htmlType="submit"
                  // block
                >
                  Logout
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="slot-container">
            <div className="header-text">Doctor's Time Slots</div>
            <div className="row">
              {loading ? (
                <div className="spinner">
                  <Spin size="large" />
                </div>
              ) : data && data.data ? (
                data.data.map((item, index) => (
                  <div className="container">
                    <div className="section-head">
                      <div
                        className="head"
                        onClick={() => {
                          let source = [
                            {
                              id: item.id,
                              doctorName: "Dr" + item.doctor.firstName,
                              specialization:
                                item.doctor.specialization.specialization,
                              organisation: item.organisation.name,
                              fee: item.orgfee.amount,
                              date: item.date,
                              duration: item.duration,
                            },
                          ];
                          updateSelectedData(source);
                          // updateSelectedData(item);

                          updateShowList(true);
                        }}
                      >
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="spinner">
                  <Empty />
                </div>
              )}
            </div>
            {showList ? (
              <div className="slot-listing">
                <SoltListing dataSource={selectedData} pagination={false} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
