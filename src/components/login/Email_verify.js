import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuthContext } from "../../Context/index.context";

function EmailVerify() {
    const { emailVerify } = useAuthContext();

    const initialValues = {
        email: "",
    };

    const emailVerified = yup.object({
        email: yup.string().email().required("Email is required"),
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: emailVerified,
        onSubmit: (value) => {
            emailVerify(value);
            console.log(value);
        },
    });

    return (
        <div>
            <section className="login_form_sec">
                <div className="container">
                    <div className="col-lg-6 offset-lg-3 col-12">
                        <div className="login-form">
                            <h2>Forget Password</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
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

                                    {touched.email && errors.email ? (
                                        <p className="text-start text-danger ps-1 mt-1">
                                            {errors.email}
                                        </p>
                                    ) : null}
                                </div>

                                <div className="d-flex align-items-center">
                                    <button type="submit" className="btn btn-primary ms-3">
                                        Verify Email
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

export default EmailVerify;
