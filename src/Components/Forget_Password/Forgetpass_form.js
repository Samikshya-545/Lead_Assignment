import React, { Component } from "react";
import "antd/dist/antd.css";
import "../../Style/signup_form.css";
import arrow from "../../Image/left-arrow.png";
import { Button, Form, Input } from "antd";
/*import { Link } from "react-router-dom";*/

class Forgetpass_form extends Component {
  state = {
    email: "",
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
        <div className="forgotheader">Forgot Password</div>
        <span className="forgotsubhead">
          Please enter your email and we will send you a password reset link.
        </span>
        <br />
        <br />
        <Form.Item
          name="email"
          label="Email Address"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            {
              type: "email",
              message: "Invalid Input",
            },
            {
              required: true,
              message: "Please enter your E-mail ID",
            },
          ]}
        >
          <Input id="email" onChange={this.handleChange} />
        </Form.Item>

        <Form.Item id="botton_margin">
          <Button htmlType="submit" className="getResetBtn">
            Get Reset Password Link
          </Button>
          <span id="confirm"></span>
        </Form.Item>
        <div className="footer">
            <img src={arrow} alt="arrow" className="arrow" />
            Back to Login
        </div>
      </Form>
    );
  }
}

export default Forgetpass_form;
