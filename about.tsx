import Image from 'next/image'
import Hall_1 from '../public/img/decor (12).jpg'
import Hall_18 from '../public/img/hall8.jpg'

function About() {
  return (
    <div>
<section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>About Us <i className="bi bi-file-person"></i></h2>
              <p>
                Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
                porro incidunt dolores placeat sunt id nobis omnis tiledo stran
                delop Aperiam dolorum et et wuia molestias qui eveniet numquam
                nihil porro incidunt dolores placeat sunt id nobis omnis tiledo
                stran delop
              </p>
            </div>

            <div className="row gy-4">
              <div className="col-lg-6">

              <Image alt="abc"   className="img-fluid rounded-4 mb-4" src={Hall_1}/>
                

                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.{" "}
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident
                </p>
              </div>
              <div className="col-lg-6">
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Duis aute
                      irure dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Duis aute
                      irure dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident
                  </p>

                  <div className="position-relative mt-4">
                  <Image alt="abc"   className="img-fluid rounded-4" src={Hall_18}/>
                    
                    <a
                      href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                      className="glightbox play-btn"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
}

export default About;