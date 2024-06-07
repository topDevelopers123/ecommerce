import React from "react";
import "./about.css";
import charity1 from "./images/charity01.jpg";
import charity2 from "./images/charity02.jpg";
import charity3 from "./images/charity03.jpg";
import charity4 from "./images/charity04.jpg";
import charity5 from "./images/charity05.png";
import charity6 from "./images/charity06.jpg";

function about() {
  let downloadCount1 = 0;
  let downloadCount2 = 0;
  let downloadCount3 = 0;

  let intervalId1, intervalId2, intervalId3;

  function formatNumber(number) {
    if (number >= 500) {
      return (number / 10).toFixed(1) + "k";
    }
    return number;
  }

  function updateDisplay1() {
    document.getElementById("number1").textContent =
      formatNumber(downloadCount1);
  }

  function updateDisplay2() {
    document.getElementById("number2").textContent =
      formatNumber(downloadCount2);
  }

  function updateDisplay3() {
    document.getElementById("number3").textContent =
      formatNumber(downloadCount3);
  }

  function incrementDownloads1() {
    downloadCount1++;
    if (downloadCount1 === 600) {
      clearInterval(intervalId1);
      return;
    }
    updateDisplay1();
  }

  function incrementDownloads2() {
    downloadCount2++;
    if (downloadCount2 === 700) {
      clearInterval(intervalId2);
      return;
    }
    updateDisplay2();
  }

  function incrementDownloads3() {
    downloadCount3++;
    if (downloadCount3 === 800) {
      clearInterval(intervalId3);
      return;
    }
    updateDisplay3();
  }

  intervalId1 = setInterval(incrementDownloads1, 10);
  intervalId2 = setInterval(incrementDownloads2, 10);
  intervalId3 = setInterval(incrementDownloads3, 10);

  return (
    <div>
      {/* Banner  */}
      <div className="about">
        <h1 className="banner-heading">Motive of Charity</h1>
        <p className="banner-text">“No one has ever become poor from giving"</p>
      </div>

      {/* Image Gallery  */}
      <div className=" image-gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <h1>
                <span>Welcome</span> To MayaviFashion
              </h1>
              <p>
                Mayavi Fashion, the very name evokes images of ethereal beauty,
                avant-garde designs, and a seamless blend of tradition and
                modernity. As a leading force in the fashion industry, Mayavi
                transcends mere clothing to become a statement of individuality,
                elegance, and creativity. Origins and Inspiration: Mayavi
                Fashion draws its inspiration from diverse sources - from the
                rich cultural tapestry of India to the cutting-edge trends of
                international fashion capitals. Founded by visionary designers
                with a passion for innovation, Mayavi was born out of a desire
                to redefine conventional notions of style and luxur.
              </p>
              <button className="about-btn rounded">Contact Us</button>
            </div>

            <div className="col-md-6 ">
              <div className="row ">
                <div className="col-md-4">
                  <div className="charity-images">
                    <img src={charity1}></img>
                    <img src={charity2}></img>
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

      {/* Our Objective */}

      <div className="objective">
        <div className="container">
          <div className="row objective">
            <div className="col-md-6 ">
              <div className="objective-img">
                <img src={charity3}></img>
                <img src={charity4}></img>
              </div>
            </div>

            <div className="col-md-6">
              <div className="">
                <h2>
                  <i class="bi bi-bullseye"></i>Objective 1
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis aliquid numquam repellat, molestiae excepturi
                  debitis fugit assumenda soluta possimus maxime neque animi!
                  Officiis doloribus temporibus itaque fugiat ex, eius facere.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis aliquid numquam repellat, molestiae excepturi
                  debitis fugit assumenda soluta possimus maxime neque animi!
                  Officiis doloribus temporibus itaque fugiat ex, eius facere
                </p>
                <h2>
                  <i class="bi bi-bullseye"></i>Objective 1
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis aliquid numquam repellat, molestiae excepturi
                  debitis fugit assumenda soluta possimus maxime neque animi!
                  Officiis doloribus temporibus itaque fugiat ex, eius
                  facere.Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Blanditiis aliquid numquam repellat, molestiae excepturi
                  debitis fugit assumenda soluta possimus maxime neque animi!
                  Officiis doloribus temporibus itaque fugiat ex, eius facere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section Start  */}

      <section>
        <div class="container d-flex justify-content-center align-content-center  mt-5 counter-bor">
          <div class="row">
            <div class="col-12">
              <h1 class="text-dark  text-center fw-bold">
                Fashion with a Heart-Because{" "}
              </h1>
              <h1 class="  fw-bold">Giving Back Never Goes Out of Style </h1>
            </div>
          </div>
        </div>

        <div class="container m-0 m-md-5 p-5 d-flex justify-content-center ">
          <div class="row w-100">
            <div class="col-md-4 col-sm-12 text-center">
              <h1
                class="text-warning display-3 fw-bold number_s"
                id="number1"
              ></h1>
              <p class="charity_para ">Donated to charity</p>
            </div>
            <div class="col-md-4 col-sm-12 text-center ">
              <h1
                class="text-warning display-3 fw-bold number_s"
                id="number2"
              ></h1>
              <p class="charity_para ">Charity partner</p>
            </div>
            <div class="col-md-4 col-sm-12 text-center">
              <h1
                class="text-warning display-3 fw-bold number_s"
                id="number3"
              ></h1>
              <p class="charity_para ">Happy customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section End  */}

      {/* What We do  */}

      <div className="donate">
        <h1 className="d-flex justify-content-center">What We Do</h1>
        <p className="d-flex justify-content-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
          nisi eos! Exercitationem laboriosam hic aliquid.
        </p>

        <div className="row">
          <div className="col-md-3 col-sm-6 ">
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

          <div className="col-md-3 col-sm-6 ">
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

          <div className="col-md-3 col-sm-6 ">
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

          <div className="col-md-3 col-sm-6 ">
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

export default about;
