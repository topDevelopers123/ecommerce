import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./register.css";

function register() {
  return (
    <div>
      {/* Login form section start  */}
      <section className="login_form_sec">
        <div className="container">
          <div class="col-lg-6 offset-lg-3 col-12">
            <div class="login-form">
              <h2>REGISTER</h2>
              <p>Please register in order to checkout more quickly</p>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    class="form-control"
                  />
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
                  />
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
                  />
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
                  />
                </div>

                
                <div className="d-flex align-items-center">
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                  <button type="submit" class="btn btn-primary ms-3">
                    Login
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

export default register;
