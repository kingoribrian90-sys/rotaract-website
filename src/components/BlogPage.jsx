import { blogPosts } from "../data/content";
import BlogCard from "./BlogCard";
import { PageHero } from "./SectionPrimitives";

function BlogPage() {
  return (
    <section id="blog" className="page-section">
      <PageHero tag="Stories & Updates" title="Our Blog">
        Discover stories, insights, and updates from our community of leaders
        making a difference.
      </PageHero>
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default BlogPage;
