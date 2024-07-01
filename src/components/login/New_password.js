import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./login.css";
import * as yup from 'yup';
import { useFormik } from "formik";
import { useAuthContext } from "../../Context/index.context";
import { Link } from "react-router-dom";

function NewPassword() {
    const { newPassword } = useAuthContext();

    const initialValues = {
        email: "",
        newPassword: "",
        confirmPassword: ""
    };

    const validationSchema = yup.object({
        email: yup.string().email("Invalid email address").required("Email is required"),
        newPassword: yup.string().min(6).max(16).required("New Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], "Passwords must match").required("Confirm Password is required")
    });

    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            newPassword(values);
            // console.log(values);
        }
    });

    return (
        <div>
            <section className="login_form_sec">
                <div className="container">
                    <div className="col-lg-6 offset-lg-3 col-12">
                        <div className="login-form">
                            <h2>Create New Password</h2>

                            <form onSubmit={handleSubmit}>
                              

                                <div className="mb-3">
                                    <label htmlFor="newPassword" className="form-label">
                                        New Password *
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter new password"
                                        className="form-control"
                                        id="newPassword"
                                        name="newPassword"
                                        value={values.newPassword}
                                        onChange={handleChange}
                                    />
                                    {errors.newPassword && touched.newPassword ? (
                                        <div className="text-danger">{errors.newPassword}</div>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">
                                        Confirm Password *
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter confirm password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <div className="text-danger">{errors.confirmPassword}</div>
                                    ) : null}
                                </div>

                                <div className="d-flex align-items-center">
                                    <button type="submit" className="btn btn-primary ms-3">
                                        <Link to="/login">Submit</Link>
                                       
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

export default NewPassword;
