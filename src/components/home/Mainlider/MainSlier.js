import React, { useEffect, useState } from "react";
import "../home.css";
import axios from "axios";

function MainSlier() {
    const [bannner, setBanner] = useState(null);
    const getbannerData = async () => {
        try {
            const resp = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/banner/get'
            )
            
            setBanner(resp.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getbannerData();

    }, [])
  return (
    <div>
          {/* Slider section start  */}
          <section className="main_slider mt-3">
              <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
              >
                  <div className="carousel-inner">
                      {bannner?.map((item, index) => (
                          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                              <img src={item?.image?.image_url} className="d-block w-100" alt={`Slide ${index}`} />
                          </div>
                      ))}
                  </div>
                  <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                  >
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                  >
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                  </button>
              </div>
          </section>

          {/* Slider section end  */}
    </div>
  )
}

export default MainSlier
