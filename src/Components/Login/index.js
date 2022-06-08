import React from "react";
import "./index.css";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { Form, Input, Button, notification } from "antd";
import { apiInstance } from "../Apis/AuthApi";
import { login } from "../Redux/userReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Context = React.createContext({
    name: "Default",
  });
  const [api, contextHolder] = notification.useNotification();

  const onSubmit = async (e) => {
    if (e && e.email && e.password) {
      let config = {
        strategy: "local",
        email: e.email,
        password: e.password,
      };
      const head = {
        headers: {
          "api-header-security":
            "C1kxIHN1D81zT7DXFQINoiQKDRXIMLCWTugbg9CorYg5SIxHsBBLNvNbebCxoC1qWhtx",
        },
      };

      apiInstance
        .post(" https://api.quikdr.com/authentication", config, head)
        .then((res) => {
          if (res?.data?.accessToken) {
            dispatch(
              login({
                email: e.email,
                password: e.password,
                loggedIn: true,
                accessToken: res.data.accessToken,
              })
            );

            navigate("/app");
          }
        }).catch = (e) => {
        console.log(e);
      };
    }
  };
  // const openNotification = (placement, message) => {
  //   api.info({
  //     message: `Notification ${placement}`,
  //     description: (
  //       <Context.Consumer>{({ name }) => `${message}!`}</Context.Consumer>
  //     ),
  //     placement,
  //   });
  // };
  return (
    <>
      <Context.Provider
        value={{
          name: "Ant Design",
        }}
      >
        {contextHolder}
        <div className="main-container">
          <div className="sub-container">
            <div className="logo-section">
              <div className="logo"> Logo</div>
            </div>
            <div className="content-section">
              <Form
                name="basic"
                onFinish={onSubmit}
                // labelCol={{
                //   span: 8,
                // }}
                // wrapperCol={{
                //   span: 16,
                // }}
                // initialValues={{
                //   remember: true,
                // }}
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                  ]}
                  wrapperCol={{
                    offset: 1,
                    span: 17,
                  }}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  wrapperCol={{
                    offset: 1,
                    span: 17,
                  }}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 6,
                    span: 12,
                  }}
                >
                  <Button
                    type="primary"
                    size="large"
                    // className="login-form-button"
                    htmlType="submit"
                    block
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Context.Provider>
    </>
  );
};

export default Login;
