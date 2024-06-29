import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./login.css";
import { useAuthContext } from "../../Context/index.context";

function Otp_verify() {
    const { otpVerify } = useAuthContext();
    const [otp,setOtp] = useState(null)


    return (
        <div>
            <section className="login_form_sec">
                <div className="container">
                    <div className="col-lg-6 offset-lg-3 col-12">
                        <div className="login-form">
                            <h2>OTP Verification</h2>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                    </label>
                                    <input
                                    
                                        type="number"
                                        placeholder="Enter OTP here"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        onChange={(e) => setOtp(e.target.value)}

                                    />
                                </div>

                                <div className="d-flex align-items-center">
                                    <button type="submit" onClick={()=>otpVerify(otp)} className="btn btn-primary ms-3">
                                        <Link >
                                            Verify OTP
                                        </Link>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Otp_verify;
