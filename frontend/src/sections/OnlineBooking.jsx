import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { storeBooking } from "../store/bookingSlice";

function OnlineBooking() {
  const services = useSelector((state) => state.service.services);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [booking, setBooking] = useState({
    name: "Sudipta",
    email: "sjgalaxy98@gmail.com",
    contact_no: "6291839827",
    preferred_date: new Date().toISOString().split("T")[0],
    preferred_time: "12:00",
    service_id: "",
    address: "",
    extra_detail: "",
  });

  useEffect(() => {
    const dateInput = document.getElementById("bookingDate");
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: booking,
  });

  const onSubmit = (data) => {
    setIsLoading(true);

    dispatch(storeBooking(data))
      .then((resultAction) => {
        if (storeBooking.fulfilled.match(resultAction)) {
          reset(booking);
          toast.success("Form submited successfully");
        } else {
          const error = resultAction.error;
          throw error;
        }
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        setIsLoading(false);
      });
  };

  return (
    <section className="book-online container-fluid" id="onlineBooking">
      <div className="row">
        <div className="col-8">
          <h1 className="heading_1">
            Book <span>Online</span>
          </h1>
          <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-12">
              <label htmlFor="bookingName" className="form-label">
                Name
              </label>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <input
                    type="text"
                    id="bookingName"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    {...field}
                  />
                )}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="bookingEmail" className="form-label">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="bookingEmail"
                    {...field}
                  />
                )}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="bookingContactNo" className="form-label">
                Contact No
              </label>
              <Controller
                name="contact_no"
                control={control}
                rules={{ required: "Contact No is required" }}
                render={({ field }) => (
                  <input
                    type="tel"
                    className={`form-control ${
                      errors.contact_no ? "is-invalid" : ""
                    }`}
                    id="bookingContactNo"
                    {...field}
                  />
                )}
              />
              {errors.contact_no && (
                <div className="invalid-feedback">
                  {errors.contact_no.message}
                </div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="bookingDate" className="form-label">
                Preferred Date
              </label>
              <Controller
                name="preferred_date"
                control={control}
                render={({ field }) => (
                  <input
                    type="date"
                    className="form-control"
                    id="bookingDate"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="bookingTime" className="form-label">
                Preferred Time
              </label>
              <Controller
                name="preferred_time"
                control={control}
                render={({ field }) => (
                  <input
                    type="time"
                    className="form-control"
                    id="bookingTime"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="bookingServiceType" className="form-label">
                Service Type
              </label>
              <Controller
                name="service_id"
                control={control}
                render={({ field }) => (
                  <select
                    id="bookingServiceType"
                    className="form-select"
                    {...field}
                  >
                    <option selected disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                    <option value="">Not Mentioned</option>
                  </select>
                )}
              />
            </div>

            <div className="col-12">
              <label htmlFor="bookingAddress" className="form-label">
                Address
              </label>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    className="form-control"
                    id="bookingAddress"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="col-12">
              <label htmlFor="bookingExtraDetails" className="form-label">
                Extra Details
              </label>
              <Controller
                name="extra_detail"
                control={control}
                render={({ field }) => (
                  <textarea
                    type="text"
                    className="form-control"
                    id="bookingExtraDetails"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn-v1" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Loading...</span>
                  </>
                ) : (
                  "Book Online"
                )}
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
