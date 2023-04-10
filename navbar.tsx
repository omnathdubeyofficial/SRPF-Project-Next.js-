

function Navbar() {
    return (
      <div>
    <section id="topbar" className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center"><a href="thecurrenttimes1232gmail.com">thecurrenttimes123@gmail.com</a></i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91 9838381169</span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </section>
  
    <header id="header" className="header d-flex align-items-center">
  
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index" className="logo d-flex align-items-center">
         
           <img src="//" alt=""/>
          <h1>Krishna Lawn<span>.</span></h1>
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="index">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="gallery">Gallery</a></li>
            <li><a href="myevents">Events</a></li>
            <li><a href="blog">Blogs</a></li>
            <li><a href="bookingdate">Book Now</a></li>
            
            <li><a href="bookingform">Booking Form</a></li>
            <li><a href="mycart">My Cart</a></li>

          </ul>
        </nav>
  
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
  
      </div>
    </header>
    
      </div>
    );
  }
  
  export default Navbar;