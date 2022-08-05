import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<>loading....</>}>
      <Component />
    </Suspense>
  );
};

export default function Index() {
  const routes = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    { path: "/auth/login", element: <Login /> },
    { path: "/auth/register", element: <Register /> },
    { path: "/auth/dashbord", element: <Dashbord /> },
  ]);

  return routes;
}

const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Register = Loadable(lazy(() => import("../pages/auth/Register")));
const Dashbord = Loadable(lazy(()=>import("../pages/dashbord/Dashbord")));
