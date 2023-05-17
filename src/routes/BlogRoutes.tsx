import { lazy } from "react";
import Loadable from "@/components/common/Loadable";

import BlogLayout from "@/layouts/BlogLayout";
import ErrorRouterElement from "./ErrorRouterElement";

const BlogPage = Loadable(lazy(() => import("@/pages/BlogPage")));
const SinglePostPage = Loadable(lazy(() => import("@/pages/SinglePostPage")));

const BlogRoutes = {
  path: "/articles",
  element: <BlogLayout />,
  errorElement: <ErrorRouterElement />,
  children: [
    {
      element: <BlogPage />,
      index: true,
    },
    {
      path: "/articles/:postId",
      element: <SinglePostPage />,
    },
  ],
};

export default BlogRoutes;
