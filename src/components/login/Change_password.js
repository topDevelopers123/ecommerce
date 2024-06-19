import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./login.css";
import { useFormik } from "formik";
import * as yup from "yup"

function Change_password() {

    const initialValue = {
        password: ""
    }

    const Login = yup.object({
        password: yup.string().min(6).max(16).required("password is requierd")
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
                            <h2>Change Password</h2>

                            <form onSubmit={handleSubmit} >

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">
                                        Current Password *
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter current password"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                    />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">
                                        New Password *
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter new password"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                    />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">
                                        Confirm Password *
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter confirm password"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                    />
                                </div>
                                <div className="d-flex align-items-center">
                                    <button type="submit" class="btn btn-primary ms-3">
                                        <Link to='/login'>
                                            Submit
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
export default Change_password;
