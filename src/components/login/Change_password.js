import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./login.css";
import { useFormik } from "formik";
import { useAuthContext } from "../../Context/index.context";

function ChangePassword() {
    const { changePassword } = useAuthContext();


    const initialValues = {
        oldpassword: "",
        newPassword: "",
        confirmPassword: ""
    };

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: initialValues,
        onSubmit: (value) => {
            changePassword(value);
        },
    });

    return (
        <div>
            <section className="login_form_sec">
                <div className="container">
                    <div className="col-lg-6 offset-lg-3 col-12">
                        <div className="login-form">
                            <h2>Change Password</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="oldpassword" className="form-label">
                                        Current Password *
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter current password"
                                        className="form-control"
                                        id="oldpassword"
                                        name="oldpassword"
                                        value={values.oldpassword}
                                        onChange={handleChange}
                                    />
                                </div>

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
                                </div>
                                <div className="d-flex align-items-center">
                                    <button type="submit" className="btn btn-primary ms-3">
                                        Submit
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

export default ChangePassword;
