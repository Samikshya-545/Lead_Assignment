import React, { Component } from "react";
import "antd/dist/antd.css";
import "../../Style/signup_form.css";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import {  useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLeadIDAction, setAuthKeyAction } from '../../States/Slices/AuthSlice';


const LoginForm = () => {
  const dispatch = useDispatch();
  var initialState = {
    email: "",
    password: "",
  };
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  const host = process.env.REACT_APP_Backend_host;
  var navigate = useNavigate();
  var state = useSelector((state) => state.AuthReducer);


  useEffect(() => {
    if(state.LeadSquaredAuthKey && state.LeadSquaredLeadID){
      navigate('/dashboard');
    }
    var LeadSquaredAuthKey = localStorage.getItem('LeadSquaredAuthKey');
    var LeadSquaredLeadID = localStorage.getItem('LeadSquaredLeadID');
    if(LeadSquaredAuthKey && LeadSquaredLeadID){
      dispatch(setLeadIDAction(LeadSquaredLeadID));
      dispatch(setAuthKeyAction(LeadSquaredAuthKey));
      navigate('/dashboard');
    }
  });

  var handleSubmit = (values) => {
    var body = {
      EmailAddress: email,
      Password: password
    };
    console.log(body);
    const headers = { 
      'Authorization': process.env.REACT_APP_PublicAuthKey
    };
    console.log(process.env.REACT_APP_PublicAuthKey);
    try {
      axios.post(host+'/api/Authentication/Signin', body, { headers })
        .then(response => {
          console.log(response);
          localStorage.setItem('LeadSquaredAuthKey', response.data.AuthKey);
          localStorage.setItem('LeadSquaredLeadID', response.data.LeadId);
        })
        .catch(error => {
          if(error.response.status == 401){
            navigate('/');
          }
          console.log(error);
        })
    } catch (error) {
      console.log(error);
      if(error.ExceptionMessage == "Account does not exist."){
        navigate('/');
      }
    }
    
  };
  var handleChange = (values) => {
    console.log(values);
    // setInput({
    //   [values.target.id]: values.target.value,
    // });
  };

  
  return (
    <Form
      className="SignupForm"
      name="register"
      onFinish={()=>{ handleSubmit()}}
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
        <Input id="email" onChange={(e) => {setEmail(e.target.value)}} />
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
        <Input.Password id="password" onChange={(e) => {setPassword(e.target.value)}} />
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


export default LoginForm;
