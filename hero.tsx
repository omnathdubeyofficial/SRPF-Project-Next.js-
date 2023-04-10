import Image from 'next/image'
import Hall_1 from '../public/img/logo.jpg'

function Hero() {
    return (
      <div>
    <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2>
                Welcome<i className="bi bi-google-play"></i> 
              </h2>
              <p>
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started">
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2">

            <Image alt="abc" data-aos="zoom-out"
                data-aos-delay="100" className="img-fluid" src={Hall_1}/>
              
            </div>
          </div>
        </div>
  
        <div className="icon-boxes position-relative">
          <div className="container position-relative">
            <div className="row gy-4 mt-5">
              <div
                className="col-xl-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <h4 className="title">
                    <a href="" className="stretched-link">
                      Welcome
                    </a>
                  </h4>
                </div>
              </div>
  
              <div
                className="col-xl-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-gem"></i>
                  </div>
                  <h4 className="title">
                    <a href="" className="stretched-link">
                      Welcome
                    </a>
                  </h4>
                </div>
              </div>
  
              <div
                className="col-xl-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <h4 className="title">
                    <a href="" className="stretched-link">
                      Welcome
                    </a>
                  </h4>
                </div>
              </div>
  
              <div
                className="col-xl-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-command"></i>
                  </div>
                  <h4 className="title">
                    <a href="" className="stretched-link">
                      Welcome
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    
      </div>
    );
  }
  
  export default Hero;