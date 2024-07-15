import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./login.css";
import { useAuthContext } from "../../Context/index.context";
import { useFormik } from "formik";
import * as yup from "yup"

function Login() {
  const { login } = useAuthContext()

  const initialValue = {
    email: "",
    password: ""
  }

  const Login = yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).max(16).required("password is requierd")
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: Login,
    onSubmit: (value) => {
      login(value)


    }
  })


  return (
    <div>
      {/* Login form section start  */}
      <section className="login_form_sec">
        <div className="container">
          <div className="col-lg-6 offset-lg-3 col-12">
            <div className="login-form">
              <h2>LOGIN</h2>

              <form onSubmit={handleSubmit} >
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />


                  {touched.email && errors.email ? <p className="text-start text-danger ps-1 mt-1">{errors.email}</p> : null}
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Your Password *
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.password && errors.password ? <p className="text-start text-danger ps-1 mt-1">{errors.password}</p> : null}
                </div>
                <div className="d-flex justify-content-between align-items-center">

                  <div className="mb-3 form-check">
                    {/* <input
                      type="checkbox"
                      className="form-check-input p-0 border-0 "
                      id="exampleCheck1"
                    /> */}
                    {/* <label className="form-check-label m-0" for="exampleCheck1">
                      Remember me
                    </label> */}
                  </div>

                  <p><Link to="/emailVerify">Forget your password ?</Link></p></div>
                <div className="d-flex align-items-center login_register_box">
                  <button type="submit" className="btn btn-primary login" >

                    Login
                  </button>
                  <button type="submit" className="btn btn-primary register ms-3">
                    <Link to='/register'>
                      Register
                    </Link>
                  </button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Login form section end  */}
    </div>
  );
}

export default Login;
