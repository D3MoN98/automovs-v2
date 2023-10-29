function OnlineBooking() {
  return (
    <section className="book-online container-fluid" id="onlineBooking">
      <div className="row">
        <div className="col-8">
          <h1 className="heading_1">
            Book <span>Online</span>
          </h1>
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

            <div className="col-md-6">
              <label htmlFor="date" className="form-label">
                Preferred Date
              </label>
              <input type="date" className="form-control" id="date" />
            </div>

            <div className="col-md-6">
              <label htmlFor="time" className="form-label">
                Preferred Time
              </label>
              <input type="time" className="form-control" id="time" />
            </div>

            <div className="col-md-12">
              <label htmlFor="serviceType" className="form-label">
                Service Type
              </label>
              <select id="serviceType" className="form-select">
                <option>...</option>
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input type="text" className="form-control" id="address" />
            </div>

            <div className="col-12">
              <label htmlFor="extraDetails" className="form-label">
                Extra Details
              </label>
              <textarea
                type="text"
                className="form-control"
                id="extraDetails"
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn-v1">
                Book Online
              </button>
            </div>
          </form>
        </div>
        <div className="col-4 img-otr">
          <img
            className="book-online-img"
            src="images/book-online.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default OnlineBooking;
