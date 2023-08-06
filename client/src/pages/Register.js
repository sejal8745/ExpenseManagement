import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //submit
  const submithandler = async (values) => {
    //console.log(values);
    try {
      setLoading(true);
      await axios.post("/users/register", values);
      message.success("Registrations successfully done");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("invalid username or password");
    }
  };

  //prevent for login user

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submithandler}>
          <h1>Register Form</h1>
          <Form.Item label="Username" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email id" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Passoword" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex">
            <Link to="/login">Already Register ? Click here to login</Link>
            <button className="btn btn-primary">Register</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
