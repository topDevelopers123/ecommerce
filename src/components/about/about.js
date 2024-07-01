import React, { useState, useEffect } from "react";
import "./about.css";
import charity1 from "./images/charity01.jpg";
import charity2 from "./images/charity02.jpg";
import charity3 from "./images/charity03.jpg";
import charity4 from "./images/charity04.jpg";
import charity5 from "./images/charity05.png";
import charity6 from "./images/charity06.jpg";
import banner01 from "./images/charity01.jpg";

function About() {
  const [downloadCount1, setDownloadCount1] = useState(0);
  const [downloadCount2, setDownloadCount2] = useState(0);
  const [downloadCount3, setDownloadCount3] = useState(0);

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setDownloadCount1((prev) => {
        if (prev >= 600) {
          clearInterval(intervalId1);
          return prev;
        }
        return prev + 1;
      });
    }, 10);

    const intervalId2 = setInterval(() => {
      setDownloadCount2((prev) => {
        if (prev >= 700) {
          clearInterval(intervalId2);
          return prev;
        }
        return prev + 1;
      });
    }, 10);

    const intervalId3 = setInterval(() => {
      setDownloadCount3((prev) => {
        if (prev >= 800) {
          clearInterval(intervalId3);
          return prev;
        }
        return prev + 1;
      });
    }, 10);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, []);

  function formatNumber(number) {
    if (number >= 500) {
      return (number / 10).toFixed(1) + "k";
    }
    return number;
  }

  return (
    <div>
      {/* Banner */}

      <section className="about" style={{
        backgroundImage: 'url(' + banner01 + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>

        <div className="overlay">
          <div className="content">
            <h2>Motive of Charity</h2>
            <p>“Everyone can be great because everyone can serve.</p>
          </div>
        </div>
      </section>


      {/* Image Gallery */}
      <div className="image-gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_content">
                <h2>
                  <span>Welcome</span> To MayaviFashion
                </h2>
                <p>
                  Fashion is all about comfort and elegance. Mayavi Fashion stands out for hope and change. All clothing for men, women, and kids. With a foundation of giving back, Mayavi Fashion's principle stands out by giving a positive impact to society. Every penny earned is funneled to donations and charity. Mayavi Fashion's mission is simple yet profound: to use the power of fashion to create meaningful change. A core message from Mayavi Fashion is to be ethical and sustainable. Mayavi Fashion believes in the power of community and collaboration. The brand partners with various nonprofit organizations and charities to ensure that funds are directed where they are needed the most. 
                </p>
                <button className="about-btn rounded">Contact Us</button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="img_gllry">
                <div className="row">
                  <div className="col-md-4">
                    <div className="charity-images ">
                      <img src={charity1} alt="Charity 1" />
                      <img src={charity2} alt="Charity 2" />
                    </div>
                  </div>

                  <div className="col-md-4 ">
                    <div className="charity-images">
                      <img src={charity3}></img>
                      <img src={charity6}></img>
                    </div>
                  </div>

                  <div className="col-md-4 ">
                    <div className="charity-images ">
                      <img  src={charity5}></img>
                      <img src={charity4}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Objective */}
      <div className="objective">
        <div className="shape">
          <div className="objective-circle"></div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="obj-head-text">Our Objective</h1>

              <div className="objective-img">

                <img className="char01Img" src={charity3}></img>
                <img className="char02Img" src={charity4}></img>
              </div>
            </div>

            <div className="col-md-6">
                <h1 className="obj-head-text d-none d-sm-block">Our Objective</h1>
              <div className="text-start">
                <div className="row">
                  <div className="col-md-6 d-flex w-100">
                    <div className="d-flex justify-content-center w-100">
                      <i className="bi bi-bullseye"></i>
                    </div>
                    <div>
                      <h2 className="obj-text">Charties</h2>
                      <p>
                        Mayavi Fashion wants ensures that funds are used to to fostering hope and change in society. Charities are not named the brands overarchibg objectives is to support community initiatives and causes that align with their mission of ehtical and sustainable practices. 
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 d-flex w-100">
                    <div className="d-flex justify-content-center w-100">
                      <i className="bi bi-bullseye"></i>
                    </div>
                    <div>
                      <h2 className="obj-text">Donation</h2>
                      <p>
                        A significant portion of Mayavi Fashions profit is dedicated to charitable cause particularly those aimed at supporting the needy . This initiative is rooted in the belief that fashion should not only make people look good but also do good . 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section Start */}
      <section>
        <div className="container d-flex justify-content-center align-content-center mt-5 counter-bor">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="text-center fw-bold">
                Fashion with a Heart-Because
              </h2>
              <h2 className="fw-bold">Giving Back Never Goes Out of Style </h2>
            </div>
          </div>
        </div>

        <div className="container p-5 d-flex justify-content-center">
          <div className="row w-100">
            <div className="col-md-4 col-sm-12 text-center">
              <h1 className="text-warning display-3 fw-bold number_s" id="number1">
                {formatNumber(downloadCount1)}
              </h1>
              <p className="charity_para">Donated to charity</p>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h1 className="text-warning display-3 fw-bold number_s" id="number2">
                {formatNumber(downloadCount2)}
              </h1>
              <p className="charity_para">Charity partner</p>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h1 className="text-warning display-3 fw-bold number_s" id="number3">
                {formatNumber(downloadCount3)}
              </h1>
              <p className="charity_para">Happy customers</p>
            </div>
          </div>
        </div>
      </section>
      {/* Counter Section End */}

      {/* What We do */}
      <div className="donate">
        <h2 className="d-flex justify-content-center">What We Do</h2>
       
        <div className="row">
          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="donate-row">
              <h5>INNOVATIVE DESIGN AND QUALITY</h5>
              <p>
                We prioritize state of the fine art and premium quality in every piece of clothing ensuring our customers. Receive stylish and durable product. 
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="donate-row">
              <h5>SUSTAINABLE <br></br> PRACTICES</h5>
              <p>
                We commit to sustainable sourcing go material and ethical labor practices, reducing our environmental impact and promoting fair working condition. 
              </p>
            </div>
          </div>

          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="donate-row">
              <h5>PHILANTHROPIC INITIATIVES</h5>
              <p>
                A significant portion of our profit is dedicated to charitable causes supporting programs that provide clothing shelter and essential service to underprivileged communities. 
              </p>
            </div>
          </div>

          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="donate-row">
              <h5>CUSTOMERS EMPOWERMENT</h5>
              <p>
                By choosing mayavi fashion our customers contribute to a broader mission of social welfare and upliftment merging style with social responsibility. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
