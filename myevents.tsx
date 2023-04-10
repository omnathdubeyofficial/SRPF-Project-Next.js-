

import Image from 'next/image'
import Hall from '../public/img/hall_1.jpg'
import Hall_2 from '../public/img/hall2.jpg'
import Hall_3 from '../public/img/hall3.jpg'
import Hall_4 from '../public/img/hall4.jpg'
import Hall_5 from '../public/img/hall5.jpg'
import Hall_6 from '../public/img/hall6.jpg'
import Hall_8 from '../public/img/hall8.jpg'
import Hall_9 from '../public/img/hall10.jpg'
import Hall_12 from '../public/img/hall12.jpg'
import Hall_17 from '../public/img/hall17.jpg'
import Hall_13 from '../public/img/hall13.jpg'
import Hall_15 from '../public/img/hall15.jpg'
function Myevents() {
    return (
      <div>
  <section id="portfolio" className="portfolio sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>My Events</h2>
            <p>
              Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
              nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
            </p>
          </div>
  
          <div
            className="portfolio-isotope"
            data-portfolio-filter="*"
            data-portfolio-layout="masonry"
            data-portfolio-sort="original-order"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            
  
            <div className="row gy-4 portfolio-container">
              <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <a
                    href="assets/img/decor (9).jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image alt="abc"  className="img-fluid" src={Hall}/>
                  </a>
                </div>
              </div>
  
              <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                <div className="portfolio-wrap">
                  <a
                    href="assets/img/decor (10).jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image alt="abc"  className="img-fluid" src={Hall_2}/>
                  </a>
                </div>
              </div>
  
              <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                <div className="portfolio-wrap">
                  <a
                    href="assets/img/decor (11).jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image alt="abc"  className="img-fluid" src={Hall_3}/>
                  </a>
                </div>
              </div>
  
              <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                <div className="portfolio-wrap">
                  <a
                    href="assets/img/decor (12).jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image alt="abc"  className="img-fluid" src={Hall_4}/>
                  </a>
                </div>
              </div>
  
              <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <a
                    href="assets/img/decor (13).jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image alt="abc"  className="img-fluid" src={Hall_5}/>
                  </a>
                </div>
              </div>
  
              <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                <div className="portfolio-wrap">
                  <a
                    href="assets/img/decor (14).jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image alt="abc"  className="img-fluid" src={Hall_6}/>
                  </a>
                </div>
              </div>
  
              <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                <div className="portfolio-wrap">
                  <a
                    href="assets/img/decor (15).jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image alt="abc"  className="img-fluid" src={Hall_13}/>
                  </a>
                </div>
              </div>
  
              <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                <div className="portfolio-wrap">
                  <a
                    href="assets/img/decor (16).jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image alt="abc"  className="img-fluid" src={Hall_9}/>
                  </a>
                </div>
              </div>
  
              <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <a
                    href="assets/img/decor (17).jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image alt="abc"  className="img-fluid" src={Hall_12}/>
                  </a>
                </div>
              </div>
  
              <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                <div className="portfolio-wrap">
                  <a
                    href="assets/img/decor (2).jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image alt="abc"  className="img-fluid" src={Hall_8}/>
                  </a>
                </div>
              </div>
  
              <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                <div className="portfolio-wrap">
                  <a
                    href="assets/img/decor (26).jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image alt="abc"  className="img-fluid" src={Hall_15}/>
                  </a>
                </div>
              </div>
  
              <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                <div className="portfolio-wrap">
                  <a
                    href="assets/img/decor (27).jpeg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <Image alt="abc"  className="img-fluid" src={Hall_17}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      </div>
    );
  }
  
  export default Myevents;