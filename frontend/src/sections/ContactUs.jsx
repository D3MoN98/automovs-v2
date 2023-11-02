import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { storeContact } from "../store/contactSlice";

function ContactUs() {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: "Sudipta",
    email: "sjgalaxy98@gmail.com",
    contact_no: "6291839827",
    enquiry: "Test",
  });
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: contact,
  });

  const onSubmit = (data) => {
    setIsLoading(true);

    dispatch(storeContact(data))
      .then((resultAction) => {
        if (storeContact.fulfilled.match(resultAction)) {
          reset(contact);
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
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            <div className="col-md-12">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "Name is required",
                }}
                render={({ field }) => (
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    {...field}
                  />
                )}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    {...field}
                  />
                )}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="contact_no" className="form-label">
                Contact No
              </label>
              <Controller
                name="contact_no"
                control={control}
                rules={{
                  required: "Contact no is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Invalid phone number",
                  },
                }}
                render={({ field }) => (
                  <input
                    type="tel"
                    className={`form-control ${
                      errors.contact_no ? "is-invalid" : ""
                    }`}
                    id="contact_no"
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

            <div className="col-12">
              <label htmlFor="enquiry" className="form-label">
                Enquiry
              </label>
              <Controller
                name="enquiry"
                control={control}
                rules={{ required: "Enquiry is required" }}
                render={({ field }) => (
                  <textarea
                    className={`form-control ${
                      errors.enquiry ? "is-invalid" : ""
                    }`}
                    id="enquiry"
                    {...field}
                  />
                )}
              />
              {errors.enquiry && (
                <div className="invalid-feedback">{errors.enquiry.message}</div>
              )}
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
                  "Send Enquiry"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
