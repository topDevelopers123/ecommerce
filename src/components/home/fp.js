import React from 'react'
import fea01 from "./img/1.jpg"
import fea02 from "./img/2.webp"
import fea03 from "./img/3.jpg"

function fp() {
      
    const ImageCarousel = () => {
    return (<div>
          {/* Featured products start */}
        <section className='featured_products'>
        <div className='container'>
          <div className='head_title'>
            <h2>Featured Products</h2>
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
            items={4}
            dots
            responsive={{
              0: {
                  items: 1 // 1 item in mobile view
              },
              768: {
                  items: 3 // 3 items in tablet view
              },
              1200: {
                  items: 4 // 4 items in desktop view
              }
          }}
          >
            <div className="item">
              <img src={fea01} />
            </div>
            <div className="item">
            <img src={fea02} />
            </div>
            <div className="item">
            <img src={fea03} />
            </div>
          </OwlCarousel></div>
        </section>
        {/* Featured products end  */}
    
        {/* Shop by category start */}
        <section className='shop_category'>
          <div className='container'>
            <div className='head_title'>
              <h2>Shop by Category</h2>
            </div>
            <div className='categories'>
              
            </div>
          </div>
        </section>
        {/* Shop by category end  */}
          </div>
        );  
      };
    
      return (
        <div>
          <ImageCarousel />
        </div>
      );
    }


export default fp
