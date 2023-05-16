import BlogLayout from "@/layouts/BlogLayout";
import BlogPage from "@/pages/BlogPage";
import SinglePostPage from "@/pages/SinglePostPage";
import ErrorRouterElement from "./ErrorRouterElement";

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
