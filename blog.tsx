
import Image from 'next/image'
import Hall_1 from '../public/img/decor (12).jpg'

function Blog() {
    return (
      <div>
 <div className="breadcrumbs">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Blog <i className="bi bi-file-earmark-post-fill"></i></h2>
              <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Blog</li>
          </ol>
        </div>
      </nav>
    </div>

  
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4 posts-list">

          <div className="col-xl-4 col-md-6">
            <article>

              <div className="post-img">
              <Image alt="abc"  className="img-fluid" src={Hall_1}/>              </div>

              <p className="post-category">Hall & Lawn</p>

              <h2 className="title">
                <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
              </h2>

              <div className="d-flex align-items-center">
                <img src="assets/img/blog/blog-author.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                <div className="post-meta">
                  <p className="post-author-list">Omnath Dubey</p>
                  <p className="post-date">
                    <time >Jan 1, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

          <div className="col-xl-4 col-md-6">
            <article>

              <div className="post-img">
              <Image alt="abc"  className="img-fluid" src={Hall_1}/>              </div>

              <p className="post-category">Hall & Lawn </p>

              <h2 className="title">
                <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
              </h2>

              <div className="d-flex align-items-center">
                <img src="assets/img/blog/blog-author-2.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                <div className="post-meta">
                  <p className="post-author-list">Omnath Dubey</p>
                  <p className="post-date">
                    <time >Jun 5, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

          <div className="col-xl-4 col-md-6">
            <article>

              <div className="post-img">
              <Image alt="abc"  className="img-fluid" src={Hall_1}/>              </div>

              <p className="post-category">Hall & Lawn</p>

              <h2 className="title">
                <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
              </h2>

              <div className="d-flex align-items-center">
                <img src="assets/img/blog/blog-author-3.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                <div className="post-meta">
                  <p className="post-author-list">Omnath Dubey</p>
                  <p className="post-date">
                    <time>Jun 22, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

          <div className="col-xl-4 col-md-6">
            <article>

              <div className="post-img">
              <Image alt="abc"  className="img-fluid" src={Hall_1}/>              </div>

              <p className="post-category"> Hall & Lawn </p>

              <h2 className="title">
                <a href="blog-details.html">Non rem rerum nam cum quo minus olor distincti</a>
              </h2>

              <div className="d-flex align-items-center">
                <img src="assets/img/blog/blog-author-4.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                <div className="post-meta">
                  <p className="post-author-list">Omnath Dubey</p>
                  <p className="post-date">
                    <time>Jun 30, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

          <div className="col-xl-4 col-md-6">
            <article>

              <div className="post-img">
              <Image alt="abc"  className="img-fluid" src={Hall_1}/>              </div>

              <p className="post-category">Hall & Lawn</p>

              <h2 className="title">
                <a href="blog-details.html">Accusamus quaerat aliquam qui debitis facilis consequatur</a>
              </h2>

              <div className="d-flex align-items-center">
                <img src="assets/img/blog/blog-author-5.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                <div className="post-meta">
                  <p className="post-author-list">Omnath Dubey</p>
                  <p className="post-date">
                    <time>Jan 30, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

          <div className="col-xl-4 col-md-6">
            <article>

              <div className="post-img">
              <Image alt="abc"  className="img-fluid" src={Hall_1}/>              </div>

              <p className="post-category">Hall & Lawn</p>

              <h2 className="title">
                <a href="blog-details.html">Distinctio provident quibusdam numquam aperiam aut</a>
              </h2>

              <div className="d-flex align-items-center">
                <img src="assets/img/blog/blog-author-6.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                <div className="post-meta">
                  <p className="post-author-list">Omnath Dubey</p>
                  <p className="post-date">
                    <time >Feb 14, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

        </div>

        <div className="blog-pagination">
          <ul className="justify-content-center">
            <li><a href="#">1</a></li>
            <li className="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </div>

      </div>
    </section>
      </div>
    );
  }
  
  export default Blog;