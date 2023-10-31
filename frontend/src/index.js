import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import store from "./store"; // Import your Redux store

import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/css/all.css";
import "./assets/css/style.min.css";
import "./assets/js/common";
import Home from "./Home";
import HomeLayout from "./layouts/HomeLayout";
import NotFound from "./NotFound";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeLayout>
        <Home />
      </HomeLayout>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
