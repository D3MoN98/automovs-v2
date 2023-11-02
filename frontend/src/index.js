import "assets/css/all.css";
import "assets/dashboard/scss/style.scss";
import "assets/js/common";
import "assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript

import store from "store"; // Import your Redux store

import Dashboard from "backend/Dashboard";
import DashboardLayout from "backend/layout/DashboardLayout";
import DefaultLayout from "backend/layout/DefaultLayout";
import Login from "backend/Login";
import Home from "Home";
import HomeLayout from "layouts/HomeLayout";
import NotFound from "NotFound";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "reportWebVitals";

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
    path: "/admin/login",
    element: (
      <DefaultLayout>
        <Login />
      </DefaultLayout>
    ),
  },

  {
    path: "/admin/dashboard",
    element: (
      <DefaultLayout>
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      </DefaultLayout>
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
