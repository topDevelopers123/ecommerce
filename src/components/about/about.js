import React from 'react'
import './about.css'
import charity1 from "./images/charity01.jpg"
import charity2 from "./images/charity02.jpg"
import charity3 from "./images/charity03.jpg"
import charity4 from "./images/charity04.jpg"
import charity5 from "./images/charity05.png"
import charity6 from "./images/charity06.jpg"
import arrow from "./images/arrow01.png"




function about() {
  return (
    <div>
      {/* Banner  */}
      <div className='about'>
        <h1 className="banner-heading">Motive of Charity</h1>
        <p className='banner-text'>“No one has ever become poor from giving"</p>

      </div>

      {/* Image Gallery  */}
      <div className=' image-gallery'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 '>
              <h1><span>Welcome</span> To MayaviFashion</h1>
              <p>Mayavi Fashion, the very name evokes images of ethereal beauty, avant-garde designs, and a seamless blend of tradition and modernity. As a leading force in the fashion industry, Mayavi transcends mere clothing to become a statement of individuality, elegance, and creativity. Origins and Inspiration: Mayavi Fashion draws its inspiration from diverse sources - from the rich cultural tapestry of India to the cutting-edge trends of international fashion capitals. Founded by visionary designers with a passion for innovation, Mayavi was born out of a desire to redefine conventional notions of style and luxur.</p>
              <button className='about-btn rounded'>Contact Us</button>
            </div>
            <div className='col-md-6 '>
              <div className='row charity-images'>
                <div className='col-md-4'>
                  <img src={charity1}></img>
                  <img src={charity2}></img>
                </div>
                <div className='col-md-4'>
                  <img src={charity3}></img>
                  <img src={charity6}></img>
                </div>
                <div className='col-md-4'>
                  <img src={charity5}></img>
                  <img src={charity4}></img>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Our Objective */}

      <div className='row objective'>
        <div className='col-md-6 objective-img'>
          <img src={charity1}></img>
          <img src={charity6}></img>

        </div>

        <div className='col-md-6'>
          <div>
            <h2><i class="bi bi-bullseye"></i>Objective 1</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aliquid numquam repellat, molestiae excepturi debitis fugit assumenda soluta possimus maxime neque animi! Officiis doloribus temporibus itaque fugiat ex, eius facere. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aliquid numquam repellat, molestiae excepturi debitis fugit assumenda soluta possimus maxime neque animi! Officiis doloribus temporibus itaque fugiat ex, eius facere</p>
            <h2><i class="bi bi-bullseye"></i>Objective 1</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aliquid numquam repellat, molestiae excepturi debitis fugit assumenda soluta possimus maxime neque animi! Officiis doloribus temporibus itaque fugiat ex, eius facere.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aliquid numquam repellat, molestiae excepturi debitis fugit assumenda soluta possimus maxime neque animi! Officiis doloribus temporibus itaque fugiat ex, eius facere</p>
          </div>

        </div>

      </div>

      {/* What We do  */}

      <div className='donate' >
        <h1 className='d-flex justify-content-center'>What We Do</h1>
        <p className='d-flex justify-content-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nisi eos! Exercitationem laboriosam hic aliquid.</p>

        <div className='row'>
          <div className='col-md-3 col-sm-6 '>
            <div className='donate-row'>
            <h2>Donation</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aliquid. Eaque fugiat laborum ducimus, saepe aut debitis ad magnam, nulla ex aliquid incidunt veniam tenetur repellendus laudantium? Tempora, sapiente animi!</p>
            </div>
          </div>

          <div className='col-md-3 col-sm-6 '>
            <div className='donate-row'>

            <h2>Donation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aliquid. Eaque fugiat laborum ducimus, saepe aut debitis ad magnam, nulla ex aliquid incidunt veniam tenetur repellendus laudantium? Tempora, sapiente animi!</p>
            </div>
          </div>

          <div className='col-md-3 col-sm-6 '>
            <div className='donate-row'>

            <h2>Donation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aliquid. Eaque fugiat laborum ducimus, saepe aut debitis ad magnam, nulla ex aliquid incidunt veniam tenetur repellendus laudantium? Tempora, sapiente animi!</p>
            </div>
          </div>

          <div className='col-md-3 col-sm-6 '>
            <div className='donate-row'>

            <h2>Donation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aliquid. Eaque fugiat laborum ducimus, saepe aut debitis ad magnam, nulla ex aliquid incidunt veniam tenetur repellendus laudantium? Tempora, sapiente animi!</p>
            </div>
          </div>
         

        </div>
      </div>


    </div>
  )
}

export default about;
