import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormTextarea,
  CRow,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchService, updateService } from "store/serviceSlice";

function ServiceEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service.service);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: service,
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    data.id = id;

    dispatch(updateService(data))
      .then((resultAction) => {
        if (updateService.fulfilled.match(resultAction)) {
          toast.success("Updated successfully");
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

  useEffect(() => {
    dispatch(fetchService(id));
  }, [dispatch]);

  useEffect(() => {
    reset(service);
  }, [service]);

  return (
    <>
      <CRow>
        <CCol xs={12} className="text-end mb-4">
          <button type="button" className="btn btn-sm btn-primary">
            Add A New Service
          </button>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Service #{id} Edit</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Use this form to quickly edit your services.
              </p>
              <CForm onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: "Name is required",
                  }}
                  render={({ field }) => (
                    <CFormInput
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      type="text"
                      id="name"
                      label="Name"
                      placeholder="Name"
                      {...field}
                    />
                  )}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}

                <Controller
                  name="description"
                  control={control}
                  rules={{
                    required: "Description is required",
                  }}
                  render={({ field }) => (
                    <CFormTextarea
                      rows={3}
                      id="description"
                      label="Description"
                      placeholder="Description"
                      className={`form-control ${
                        errors.description ? "is-invalid" : ""
                      }`}
                      {...field}
                    />
                  )}
                />
                {errors.description && (
                  <div className="invalid-feedback">
                    {errors.description.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary mt-2"
                  disabled={isLoading}
                >
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
                    "Update"
                  )}
                </button>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default ServiceEdit;
