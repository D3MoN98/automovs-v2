import axios from "axios";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

// const badResponseCodeExceptions = [422];

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
  timeout: 10000, // Adjust the timeout as needed
});

// instance.headers.common["Accept"] = "application/json";
// instance.headers.common["Authorization"] = "AUTH TOKEN";
// instance.headers.post["Content-Type"] = "application/json";

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle specific HTTP error codes (e.g., 404, 500, 422) or other error responses here
      console.error("Axios Error Response:", error.response.data);
      console.error("Status Code:", error.response.status);
    } else if (error.request) {
      // Handle network-related errors (e.g., no internet connection) here
      toast.error("Network Error:", error.message);
    } else {
      // Handle other errors here
      toast.error("Request Error:", error.message);
    }

    // Re-throw the error to propagate it further
    throw error;
  }
);

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // if (!badResponseCodeExceptions.includes(error.response.status)) {
//     //   toast.error(error.response.statusText);
//     // }
//     // if (
//     //   error.response.status == 401 &&
//     //   error.response.statusText == "Unauthorized"
//     // ) {
//     //   localStorage.removeItem("auth_token");
//     //   localStorage.removeItem("auth_user");
//     //   window.location.href = "/";
//     // }
//     // return Promise.reject(error);
//   }
// );

export default axiosInstance;
