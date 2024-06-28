import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./login.css";
import { useFormik } from "formik";
import * as yup from "yup"
import { useAuthContext } from "../../Context/index.context";

function Otp_verify() {
    const { otpVerify } = useAuthContext();

    const initialValue = {
        password: ""
    }

    const Otp_verify = yup.object({
        password: yup.string().min(6).max(16).required("password is requierd")
    })

    const { handleSubmit } = useFormik({
        initialValues: initialValue,
        validationSchema: Otp_verify,
        onSubmit: (value) => {
            otpVerify(value)
            console.log(value)
        }
    })

    return (
        <div>
            <section className="login_form_sec">
                <div className="container">
                    <div className="col-lg-6 offset-lg-3 col-12">
                        <div className="login-form">
                            <h2>OTP Verification</h2>

                            <form onSubmit={handleSubmit} >

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter OTP here"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                    />
                                </div>

                                <div className="d-flex align-items-center">
                                    <button type="submit" className="btn btn-primary ms-3">
                                        <Link >
                                            Verify OTP
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
export default Otp_verify;
