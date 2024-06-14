import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./login.css";
import { useStateManagement } from "../../Context/index.context";
import { useFormik } from "formik";
import * as yup from "yup"

function Login() {

  const initialValue = {
    email:"",
    password:""
  }

  const Login = yup.object({
    email:yup.string().email().required("Email is required"),
    password:yup.string().min(6).max(16).required("password is requierd")
  })



  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValue,
    validationSchema:Login,
    onSubmit:(value)=>{
      console.log(value)
    
    
  }
  })
  

  return (
    <div>
      {/* Login form section start  */}
      <section className="login_form_sec">
        <div className="container">
          <div class="col-lg-6 offset-lg-3 col-12">
            <div class="login-form">
              <h2>LOGIN</h2>

              <form onSubmit={handleSubmit} >
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" 
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  
                 
                {touched.email && errors.email ? <p className="text-start text-danger ps-1 mt-1">{errors.email}</p> : null}
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Your Password *
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    class="form-control"
                    id="exampleInputPassword1" 
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.password && errors.password ? <p className="text-start text-danger ps-1 mt-1">{errors.password}</p> : null}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input p-0 border-0 "
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <p><a href="#">Forget your password ?</a></p></div>
                <div className="d-flex align-items-center">
                  <button type="submit" class="btn btn-primary" >
                    Login
                  </button>
                  <button type="submit" class="btn btn-primary ms-3">
                    <Link to='/register'>
                    Register
                    </Link>
                  </button>
                  &nbsp;&nbsp;&nbsp; OR&nbsp;&nbsp;
                  <div className="social_links d-flex">
                    <div className="fb">
                      <i class="bi bi-facebook"></i>
                    </div>
                    <div className="google">
                      <i class="bi bi-google"></i>
                    </div>
                  </div>
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
