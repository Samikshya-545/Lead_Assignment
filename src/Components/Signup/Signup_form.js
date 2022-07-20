import React, { Component } from "react";
import "antd/dist/antd.css";
import "../../Style/signup_form.css";
import { Button, Col, Form, Input, Row } from "antd";
import {Link} from "react-router-dom";
/*import { useDispatch } from "react-redux";*/
/*import { signupUser } from "../../Redux/reducers";*/

class Signup extends Component {
  // const [form] = Form.useForm();

  // state = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   mobile: "",
  //   password: "",
  // };
  // handleSubmit = (values) => {
  //   console.log(this.state);
  // };
  // handleChange = (values) => {
  //   this.setState({
  //     [values.target.id]: values.target.value,
  //   });
  // };

  render() {
    return (
      <Form
        className="SignupForm"
        // form={form}
        name="signup"
        onFinish={this.handleSubmit}
        scrollToFirstError
      >
        <div className="header_signup">Sign Up</div>
        <Row gutter={{ xs: 8, sm: 16 }} id="name_row">
          <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 12 }}>
            <Form.Item
              hasFeedback
              name="firstName"
              label="First name"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your first name.",
                },
                {
                  pattern: /^[a-zA-Z]+$/,
                  message: "Invalid Input",
                },
              ]}
            >
              <Input id="firstName" onChange={this.handleChange} />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 12 }}>
            <Form.Item
              hasFeedback
              name="lastName"
              label="Last name"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your last name.",
                },
                {
                  pattern: /^[a-zA-Z]+$/,
                  message: "Invalid Input",
                },
              ]}
            >
              <Input id="lastName" onChange={this.handleChange} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          id="email"
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
          name="number"
          label="Mobile Number"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: "Please enter your Mobile Number!",
            },
            {
              max: 10,
              message: "Enter your 10 digit Mobile Number",
            },
            {
              pattern: /^[0-9]+$/,
              message: "Invalid Input",
            },
          ]}
        >
          <Input id="mobile" onChange={this.handleChange} />
        </Form.Item>

        <Row gutter={{ xs: 8, sm: 16 }} className="less_margin">
          <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 12 }}>
            <Form.Item
              name="password"
              label="Password"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password id="password" onChange={this.handleChange} />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 12 }}>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button htmlType="submit" className="signupBtn">
            Sign Up
          </Button>
        </Form.Item>
        <div className="footer">
          Already have an Account? Login
        </div>
      </Form>
    );
  }
}

export default Signup;