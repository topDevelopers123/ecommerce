import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./login.css";
import { useFormik } from "formik";
import * as yup from "yup"

function Email_verify() {

    const initialValue = {
        email: "",
    }

    const Login = yup.object({
        email: yup.string().email().required("Email is required"),
    })

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValue,
        validationSchema: Login,
        onSubmit: (value) => {
            console.log(value)
        }
    })

    return (
        <div>
            <section className="login_form_sec">
                <div className="container">
                    <div class="col-lg-6 offset-lg-3 col-12">
                        <div class="login-form">
                            <h2>Forget Password</h2>

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

                                <div className="d-flex align-items-center">

                                    <button type="submit" class="btn btn-primary ms-3">
                                        <Link to='/login'>
                                            Verify Email
                                        </Link>
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Email_verify;
