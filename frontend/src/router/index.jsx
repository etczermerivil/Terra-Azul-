import { createBrowserRouter } from "react-router-dom";
import LoginFormPage from "../components/LoginFormPage/LoginFormPage";
import SignupFormPage from "../components/SignupFormPage/SignupFormPage";
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Technology from "../pages/Technology";
import Services from "../pages/Services";
import Investors from "../pages/Investors";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "technology",
        element: <Technology/>,
      },
      {
        path: "investors",
        element: <Investors />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
    ],
  },
]);
