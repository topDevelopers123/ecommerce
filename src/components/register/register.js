import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./register.css";
import { Formik, useFormik } from "formik";
import * as yup from 'yup'

function Register() {

  const initialValue = {
    name:"",
    email:"",
    phone:"",
    password:"",
    confirm_Password:""
  }

  const registered = yup.object({
    name:yup.string().required("Name is Required "),
    email:yup.string().email().required("Email is Required"),
    phone:yup.string().required("Mobile Number is Required"),
    password:yup.string().min(6).max(16).required("Password is Required"),
    confirm_Password:yup.string().min(6).max(16).required("Confirm Password does not Match")
  })

  const {values, errors, touched, handleBlur, handleSubmit, handleChange} = useFormik({
    initialValues:initialValue,
    validationSchema:registered,
    onSubmit:(value)=>{
      console.log(value);
    }
  })


  return (
    <div>
      {/* Login form section start  */}
      <section className="login_form_sec">
        <div className="container">
          <div class="col-lg-6 offset-lg-3 col-12">
            <div class="login-form">
              <h2>REGISTER</h2>
          
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    class="form-control" name="name" value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange} 
                  />

{touched.name && errors.name ? <p className="text-start text-danger ps-1 mt-1">{errors.name}</p> : null}
                </div>
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
                  <label for="exampleInputEmail1" class="form-label">
                    Mobile Number *
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Your Email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="phone"
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.phone && errors.phone ? <p className="text-start text-danger ps-1 mt-1">{errors.phone}</p> : null}
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
                
                <div class="mb-3">
                  <label for="exampleInputPassword2" class="form-label">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    class="form-control"
                    id="exampleInputPassword2"
                    name="confirm_Password"
                    value={values.confirm_Password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                    {touched.confirm_Password && errors.confirm_Password ? <p className="text-start text-danger ps-1 mt-1">{errors.confirm_Password}</p> : null}
                </div>

                
                <div className="d-flex align-items-center login_register_box">
                  <button type="submit" class="btn btn-primary  login">
                    Register
                  </button>
                  <button type="submit" class="btn btn-primary ms-3 register">
                    <Link to="/login">
                      Login
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

export default Register;
