import LandingLayout from "@/layouts/LandingLayout";
import AboutPage from "@/pages/AboutPage";
import ContactUsPage from "@/pages/ContactUsPage";
import HomePage from "@/pages/HomePage";
import ProfilePage from "@/pages/ProfilePage";
import ErrorRouterElement from "./ErrorRouterElement";

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
