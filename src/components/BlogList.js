import BlogCard from "./BlogCard";
import { blogPosts } from "../data/blogData";
import { Container, Row, Col } from 'react-bootstrap';
import InnerHeader from '../components/InnerHeader';
import aboutBg from '../images/construction-site.jpg';
const BlogList = () => {
  return (
    <>
    <InnerHeader 
        title="Latest Blog Posts" 
        subtitle="Dive into our freshest content and stay ahead of the curve" 
        // caption="Who we are"
        bgImage={aboutBg}
      />
    <section>
    <Container>
      <Row xs={1} md={3} lg={3} className="blog-list g-3">
        {blogPosts.map(blog => (
          <Col ><BlogCard key={blog.id} blog={blog} /></Col>
        ))}
      </Row>
    </Container>
    </section>
    </>
  );
};

export default BlogList;
