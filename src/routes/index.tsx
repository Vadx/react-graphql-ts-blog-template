import { createBrowserRouter } from "react-router-dom";
import BlogRoutes from "./BlogRoutes";
import ErrorRoutes from "./ErrorRoutes";
import LandingRoutes from "./LandingRoutes";

export const router = createBrowserRouter([
  LandingRoutes,
  BlogRoutes,
  ErrorRoutes,
]);
