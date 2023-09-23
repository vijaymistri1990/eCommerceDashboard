import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
   const auth = localStorage.getItem('user')
   console.log('authauthauth',auth)
   if(auth){
    navigate('/')
   }
  }, []);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      axios.post("http://localhost:4200/login", value).then((result) => {
        const loginInfo = result.data;
        if (loginInfo) {
          localStorage.setItem("user",JSON.stringify(loginInfo));
          navigate("/");
        } else {
          alert('please enter valid detail')
        }
      });
    },
  });
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="form-control w-25 mt-4">
        <div className="login">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="Enter your Email..."
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
                placeholder="Enter Password..."
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
