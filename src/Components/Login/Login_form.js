import React, { Component } from "react";
import "antd/dist/antd.css";
import "../../Style/signup_form.css";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };
  host = process.env.host;
  handleSubmit = (values) => {
    var body = {
      EmailAddress: this.state.email,
      Password: this.state.password
    };
    console.log({process.env.REACT_APP_Backend_host});
    // axios.post('https://'+this.host+'/api/Authentication/Signin?', body)
    //     .then(response => setArticleId(response.data.id));
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
        <div className="header_signup">Login</div>
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

        <Form.Item
          name="password"
          label="Password"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            // {
            //   required: true,
            //   message: "Please input your password!",
            // },
          ]}
        >
          <Input.Password id="password" onChange={this.handleChange} />
          <span className="footer">
            <Link to="/Forgetpassword">
              Forgot Password?
            </Link>
          </span>
        </Form.Item>
        

        <Form.Item id="botton_margin">
          <Button htmlType="submit" className="signupBtn">
            Login
          </Button>
        </Form.Item>
        <div className="footer">
          Don’t have an Account? <Link to="/">Sign Up</Link>
        </div>
      </Form>
    );
  }
}

export default LoginForm;
