function footer() {
  return (
    <footer>
      <section className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="logo">
              <img src="images/rsz_logo.png" alt="" />
            </div>
            <p>
              Automovs will make your life easier by helping you to book your
              car servicing without even going to the maintenance person.
            </p>
          </div>
          <div className="col-2">
            <h3 className="heading_3">Quick Links</h3>
            <nav className="nav">
              <a className="nav-link active" href="#" aria-current="page">
                Home
              </a>
              <a className="nav-link" href="#ourServices">
                Our Services
              </a>
              <a className="nav-link" href="#onlineBooking">
                Quick Booking
              </a>
              <a className="nav-link" href="#aboutUs">
                About Us
              </a>
              <a className="nav-link" href="#contactUs">
                Contact Us
              </a>
            </nav>
          </div>
          <div className="col-4">
            <h3 className="heading_3">Social Links</h3>
            <nav className="nav social-links">
              <a className="nav-link" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="nav-link" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="nav-link" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </nav>
            <div className="contact-info">
              <a href="tel:+916291839827">
                <i className="fal fa-phone"></i> 6291839827
              </a>
              <a href="mailto:info@automovs.com">
                <i className="fal fa-envelope"></i> info@automovs.com
              </a>
              <address>
                <i className="fal fa-address-card"></i> 23/4b Banamali Nasker
                Road, Behala, Kolkata 70060
              </address>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-footer">
        <div className="copyright-info">
          <p>Copyright © 2023 All Rights Reserved.</p>
        </div>
        <nav className="nav ms-auto">
          <a className="nav-link" href="/privacy-policy">
            Privacy Policy
          </a>
          <a className="nav-link" href="/terms-and-conditions">
            Terms & Conditions
          </a>
        </nav>
      </section>
    </footer>
  );
}

export default footer;
