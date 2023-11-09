import Home from "Home";
import NotFound from "NotFound";
import Dashboard from "backend/Dashboard";
import Login from "backend/Login";
import DashboardLayout from "backend/layout/DashboardLayout";
import DefaultLayout from "backend/layout/DefaultLayout";
import AuthMiddleware from "backend/middleware/AuthMiddleware";
import GuestMiddleware from "backend/middleware/GuestMiddleware";
import ServiceEdit from "backend/views/service/ServiceEdit";
import ServiceList from "backend/views/service/ServiceList";
import HomeLayout from "layouts/HomeLayout";
import { Navigate } from "react-router-dom";

const routes = [
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
      <GuestMiddleware>
        <DefaultLayout>
          <Login />
        </DefaultLayout>
      </GuestMiddleware>
    ),
  },
  {
    path: "/admin",
    element: <Navigate replace={true} to="/admin/login" />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <AuthMiddleware>
        <DefaultLayout>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </DefaultLayout>
      </AuthMiddleware>
    ),
  },
  {
    path: "/admin/service",
    element: (
      <AuthMiddleware>
        <DefaultLayout>
          <DashboardLayout>
            <ServiceList />
          </DashboardLayout>
        </DefaultLayout>
      </AuthMiddleware>
    ),
  },
  {
    path: "/admin/service/:id",
    element: (
      <AuthMiddleware>
        <DefaultLayout>
          <DashboardLayout>
            <ServiceEdit />
          </DashboardLayout>
        </DefaultLayout>
      </AuthMiddleware>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
