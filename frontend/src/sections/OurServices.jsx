import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../store/serviceSlice";

function OurServices() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.service.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <section className="container-fluid our-services" id="ourServices">
      <div className="row">
        <div className="col-12">
          <h1 className="heading_1">
            Our Car <span>Service</span> Offerings
          </h1>
          <div className="service-list row row-cols-1 row-cols-md-3 g-4">
            {services.length == 0 ? (
              <p>No service available at the moment</p>
            ) : (
              services.map((item, index) => (
                <div className="col" key={index}>
                  <div className="card h-100">
                    <div className="card-img-otr">
                      <img
                        className="card-img-top"
                        src={`http://localhost:8000/storage/${item.image}`}
                        alt="Card image cap"
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{item.name}</h4>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
