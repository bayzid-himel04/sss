import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import LoginPage from "../context/LoginPage";
import FreeDashboard from "../context/dashboard/FreeDashboard";
import CorporateDashboard from "../context/dashboard/CorporateDashboard";
import DefenseDashboard from "../context/dashboard/DefenseDashboard";
import ModerateDashboard from "../context/dashboard/ModerateDashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login/free",
        element: <LoginPage userType="free" />,
      },
      {
        path: "login/corporate",
        element: <LoginPage userType="corporate" />,
      },
      {
        path: "login/defense",
        element: <LoginPage userType="defense" />,
      },
      {
        path: "login/moderate",
        element: <LoginPage userType="moderate" />,
      },
      {
        path: "dashboard/free",
        element: <FreeDashboard />,
      },
      {
        path: "dashboard/corporate",
        element: <CorporateDashboard />,
      },
      {
        path: "dashboard/defense",
        element: <DefenseDashboard />,
      },
      {
        path: "dashboard/moderate",
        element: <ModerateDashboard />,
      },
    ],
  },
]);

export default Router;
