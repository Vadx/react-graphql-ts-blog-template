import { lazy } from "react";
import Loadable from "@/components/common/Loadable";
import ErrorRouterElement from "./ErrorRouterElement";
import LandingLayout from "@/layouts/LandingLayout";

const HomePage = Loadable(lazy(() => import("@/pages/HomePage")));
const AboutPage = Loadable(lazy(() => import("@/pages/AboutPage")));
const ProfilePage = Loadable(lazy(() => import("@/pages/ProfilePage")));
const ContactUsPage = Loadable(lazy(() => import("@/pages/ContactUsPage")));

const LandingRoutes = {
  path: "/",
  element: <LandingLayout />,
  errorElement: <ErrorRouterElement />,
  children: [
    {
      element: <HomePage />,
      index: true,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/contact-us",
      element: <ContactUsPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
  ],
};

export default LandingRoutes;
