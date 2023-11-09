import {
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginAsync } from "store/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: "sjgalaxy98@gmail.com",
    password: "password",
  });
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: loginDetails,
  });

  const onSubmit = (data) => {
    // Handle form submission
    dispatch(loginAsync(data))
      .then((resultAction) => {
        if (loginAsync.fulfilled.match(resultAction)) {
          reset(loginDetails);
          toast.success("Login successfull");
          setLoginSuccessful(true);
        } else {
          const error = resultAction.error;
          throw error;
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">
                    Sign In to your account
                  </p>
                  {loginSuccessful && (
                    <Navigate to="/admin/dashboard" replace={true} />
                  )}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
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
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Controller
                        name="password"
                        control={control}
                        rules={{
                          required: "Password is required",
                        }}
                        render={({ field }) => (
                          <input
                            type="password"
                            className={`form-control ${
                              errors.password ? "is-invalid" : ""
                            }`}
                            id="password"
                            {...field}
                          />
                        )}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Log In
                    </button>
                  </form>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
