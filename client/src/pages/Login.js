import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submithandler = async (values) => {
    //console.log(values);
    try {
      setLoading(true);
      const { data } = await axios.post("/api/login", values);
      setLoading(false);
      message.success("successfully login");
      localStorage.setItem("user", JSON.stringify({ ...data, password: "" }));

      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("invalid login credentials");
    }
  };
  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submithandler}>
          <h1>Login Form</h1>
          <Form.Item label="Email id" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Passoword" name="name">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex">
            <Link to="/login">Not a user ? Click here to register</Link>
            <button className="btn btn-primary">Login</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
