import React, { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
 
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    console.log(auth)
    if(auth) {
      navigate('/')
    }
  })
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async(values) => {
      axios.post('http://localhost:4200/register',values).then((result)=> {
        const userinfo = result.data;
        localStorage.setItem('user',JSON.stringify(userinfo))
        navigate('/')
      })
    }
  });

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="form-control w-25 mt-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter your name..."
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email..."
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter your password..."
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
