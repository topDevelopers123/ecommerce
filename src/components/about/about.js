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

      <section class="about" style={{
        backgroundImage: 'url(' + banner01 + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>

        <div class="overlay">
          <div class="content">
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
                  Mayavi Fashion, the very name evokes images of ethereal
                  beauty, avant-garde designs, and a seamless blend of tradition
                  and modernity. As a leading force in the fashion industry,
                  Mayavi transcends mere clothing to become a statement of
                  individuality, elegance, and creativity. Origins and
                  Inspiration: Mayavi Fashion draws its inspiration from diverse
                  sources - from the rich cultural tapestry of India to the
                  cutting-edge trends of international fashion capitals. Founded
                  by visionary designers with a passion for innovation, Mayavi
                  was born out of a desire to redefine conventional notions of
                  style and luxur.
                </p>
                <button className="about-btn rounded">Contact Us</button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="img_gllry">
                <div className="row">
                  <div className="col-md-4">
                    <div className="charity-images">
                      <img src={charity1} alt="Charity 1" />
                      <img src={charity2} alt="Charity 2" />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="charity-images">
                      <img src={charity3}></img>
                      <img src={charity6}></img>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="charity-images">
                      <img src={charity5}></img>
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
              <div className="objective-img">
                <img className="char01Img" src={charity3}></img>
                <img className="char02Img" src={charity4}></img>
              </div>
            </div>

            <div className="col-md-6">
              <div className="text-start">
                <h1 className="obj-head-text">Our Objective</h1>
                <div className="row">
                  <div className="col-md-6 d-flex w-100">
                    <div className="d-flex justify-content-center w-100">
                      <i className="bi bi-bullseye"></i>
                    </div>
                    <div>
                      <h2 className="obj-text">Objective 1</h2>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Blanditiis aliquid numquam repellat, molestiae
                        excepturi debitis fugit assumenda soluta possimus maxime
                        neque animi! Officiis doloribus temporibus itaque fugiat
                        ex, eius facere. Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Blanditiis aliquid numquam repellat,
                        molestiae excepturi debitis fugit assumenda soluta
                        possimus maxime neque animi! Officiis doloribus
                        temporibus itaque fugiat ex, eius facere
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
                      <h2 className="obj-text">Objective 1</h2>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Blanditiis aliquid numquam repellat, molestiae
                        excepturi debitis fugit assumenda soluta possimus maxime
                        neque animi! Officiis doloribus temporibus itaque fugiat
                        ex, eius facere. Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Blanditiis aliquid numquam repellat,
                        molestiae excepturi debitis fugit assumenda soluta
                        possimus maxime neque animi! Officiis doloribus
                        temporibus itaque fugiat ex, eius facere
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
            <div className="col-12">
              <h2 className="text-center fw-bold">
                Fashion with a Heart-Because{" "}
              </h2>
              <h2 className="fw-bold">Giving Back Never Goes Out of Style </h2>
            </div>
          </div>
        </div>

        <div className="container m-0 p-5 d-flex justify-content-center">
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
        <p className="d-flex justify-content-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
          nisi eos! Exercitationem laboriosam hic aliquid.
        </p>

        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="donate-row">
              <h2>Donation</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                aliquid. Eaque fugiat laborum ducimus, saepe aut debitis ad
                magnam, nulla ex aliquid incidunt veniam tenetur repellendus
                laudantium? Tempora, sapiente animi!
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="donate-row">
              <h2>Donation</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                aliquid. Eaque fugiat laborum ducimus, saepe aut debitis ad
                magnam, nulla ex aliquid incidunt veniam tenetur repellendus
                laudantium? Tempora, sapiente animi!
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="donate-row">
              <h2>Donation</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                aliquid. Eaque fugiat laborum ducimus, saepe aut debitis ad
                magnam, nulla ex aliquid incidunt veniam tenetur repellendus
                laudantium? Tempora, sapiente animi!
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="donate-row">
              <h2>Donation</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                aliquid. Eaque fugiat laborum ducimus, saepe aut debitis ad
                magnam, nulla ex aliquid incidunt veniam tenetur repellendus
                laudantium? Tempora, sapiente animi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
