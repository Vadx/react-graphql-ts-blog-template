import PostList from "../../components/PostList";
import Seo from "../../components/SEO";

const BlogPage = () => {
  return (
    <>
      <Seo
        title="Articles"
        metaDescription="Articles page"
        metaKeywords="Articles page Keywords"
      />
      <PostList />
    </>
  );
};

export default BlogPage;
