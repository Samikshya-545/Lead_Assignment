import React, { Component } from "react";
import "antd/dist/antd.css";
import "../../Style/signup_form.css";
import arrow from "../../Image/left-arrow.png";
import { Button, Form, Input } from "antd";
/*import { Link } from "react-router-dom";*/

class Resetpass_form extends Component {
  state = {
    newPassword: "",
    confirmPassword: "",
  };
  handleSubmit = (values) => {
    console.log(this.state);
  };
  handleChange = (values) => {
    this.setState({
      [values.target.id]: values.target.value,
    });
  };

  render() {
    return (
      <Form
        className="SignupForm"
        name="register"
        onFinish={this.handleSubmit}
        scrollToFirstError
      >
        <div className="header_signup">Reset Password</div>
        <Form.Item
          name="newpassword"
          label="New Password"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: "Please input a new password",
            },
          ]}
        >
          <Input.Password id="newPassword" onChange={this.handleChange} />
        </Form.Item>

        <Form.Item
          name="confirmpassword"
          label="Confirm Password"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: "Please confirm your password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newpassword") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password id="confirmPassword" onChange={this.handleChange} />
        </Form.Item>

        <Form.Item>
            <Button htmlType="submit" className="getResetBtn">
              Submit
            </Button>
        </Form.Item>
        <div className="footer">
            <img src={arrow} alt="arrow" />
            Back to Login
        </div>
      </Form>
    );
  }
}

export default Resetpass_form;
