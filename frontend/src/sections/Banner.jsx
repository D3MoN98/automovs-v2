function Banner() {
  return (
    <section className="container-fluid banner py-5">
      <div className="row">
        <div className="col-6">
          <h1 className="banner-heading display-5 fw-bold">
            <span className="light-text"> Need Car Servicing?</span> <br />
            Welcome To
            <span className="automovs-text">
              Auto<span>movs</span>
            </span>
          </h1>
          <p className="fs-5">
            Automovs will make your life easier by helping you to book your car
            servicing without even going to the maintenance person.
          </p>
          <div className="banner-action">
            <a href="#onlineBooking" className="btn-v1">
              Book Online
            </a>
            <span className="call-separator"> </span>
            <a className="call-link" href="tel:+916291839827">
              <i className="fal fa-phone"></i> 6291839827
            </a>
          </div>
        </div>
        <div className="col-6">
          <div
            id="carouselExampleInterval"
            className="carousel carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="images/Maruti_Ertiga.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/Maruti_Swift.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/XUV300.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/Baleno.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#ourServices" className="arrows scrollTo">
        <i className="fal fa-chevron-down"></i>
        <br />
        Scroll
      </a>
    </section>
  );
}

export default Banner;
