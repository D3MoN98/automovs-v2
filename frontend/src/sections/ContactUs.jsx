function ContactUs() {
  return (
    <section className="contact-us container-fluid" id="contactUs">
      <h1 className="heading_1">
        Contact <span>Us</span>
      </h1>
      <div className="row">
        <div className="col-6 contact-info-otr">
          <h3 className="heading_3">Our Contact information</h3>

          <ul className="contact-info">
            <li>
              <span className="contact-info-title">Phone Number</span>
              <i className="fal fa-phone"></i>
              <a href="tel:+916291839827">6291839827</a>
            </li>
            <li>
              <span className="contact-info-title">Email Address</span>
              <i className="fal fa-envelope"></i>
              <a href="mailto:info@automovs.com">info@automovs.com</a>
            </li>
            <li>
              <span className="contact-info-title">Address</span>
              <i className="fal fa-address-card"></i>
              <address>
                23/4b Banamali Nasker Road, Behala, Kolkata 70060
              </address>
            </li>
          </ul>
        </div>
        <div className="col-6 contact-form-otr">
          <form className="row g-3">
            <div className="col-md-12">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input type="tel" className="form-control" id="phone" />
            </div>

            <div className="col-12">
              <label htmlFor="enquery" className="form-label">
                Enquery
              </label>
              <textarea
                type="text"
                className="form-control"
                id="enquery"
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn-v1">
                Send Enquery
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
