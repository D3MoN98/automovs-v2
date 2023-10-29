function OurServices() {
  return (
    <section className="container-fluid our-services" id="ourServices">
      <div className="row">
        <div className="col-12">
          <h1 className="heading_1">
            Our Car <span>Service</span> Offerings
          </h1>
          <div className="service-list row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <div className="card-img-otr">
                  <img
                    className="card-img-top"
                    src="images/car_wash_&_detailing.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">wash & detailing</h4>
                  <p className="card-text">
                    Elevate your vehicle's allure with our meticulous car wash &
                    detailing services. Experience a fresh, revitalized ride
                    like never before.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-img-otr">
                  <img
                    className="card-img-top"
                    src="images/car_interior_sanitization.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">interior sanitisation</h4>
                  <p className="card-text">
                    Ensure a clean, germ-free cabin with our car interior
                    sanitization. Drive confidently in a hygienic space.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-img-otr">
                  <img
                    className="card-img-top"
                    src="images/car underbody_rust_protection_&_coating.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    underbody rust protection & coating
                  </h4>
                  <p className="card-text">
                    Guard against corrosion with our underbody rust protection &
                    coating. Drive with confidence, knowing your car is
                    shielded.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-img-otr">
                  <img
                    className="card-img-top"
                    src="images/car_denting_&_painting.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">denting & painting</h4>
                  <p className="card-text">
                    Restore your car's charm with precision denting & painting.
                    Witness a seamless transformation that impresses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-img-otr">
                  <img
                    className="card-img-top"
                    src="images/car_ac_service_&_gas_charge.webp"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">ac service & gas charge</h4>
                  <p className="card-text">
                    Experience cool comfort with our car AC service & gas
                    recharge. Drive refreshed as your AC performs optimally.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-img-otr">
                  <img
                    className="card-img-top"
                    src="images/car_corrosion_protection.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">corrosion protection</h4>
                  <p className="card-text">
                    Shield your car from rust with our corrosion protection
                    services. Drive with peace of mind and a pristine exterior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
