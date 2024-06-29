import React, { useEffect, useState } from "react";
import axios from "axios";

function ShortBanners() {
    const [shortBanner, setShortBanner] = useState(null);
    const getbannerData = async () => {
        try {
           
            const resp2 = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/shortBanner/get'
            )
            setShortBanner(resp2.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getbannerData();

    }, [])
  return (
    <div>
          {/* Short Banner  */}
          <section className="sum_banner">
              <div className="container">
                  <div className="row">
                      {shortBanner?.map((item, i) => (
                          <div className="col-md-4" key={i}>
                              <div className="banner_img">
                                  <figure>
                                      <img src={item?.image?.image_url} alt={`Banner ${i + 1}`} />
                                  </figure>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
          {/* Short Banner  */}
    </div>
  )
}

export default ShortBanners
