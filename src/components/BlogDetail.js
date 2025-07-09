import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Container, Row, Col, Button, Image, Table, Accordion, Card } from 'react-bootstrap';
import "../styles/blogs.css";

const BlogDetail = () => {
  const { slug } = useParams(); // Changed from id to slug
  const navigate = useNavigate();
  const blog = blogPosts.find(post => post.slug === slug); // Changed lookup


  if (!blog) return <p>Blog not found.</p>;

  return (
    <section className="py-4">
      <Container>
        <Button variant="outline-secondary" onClick={() => navigate("/blogs")} className="mb-3">
          ← Back to Blog List
        </Button>

        <Row className="mb-4">
          <Col>
            <Image src={blog.image} alt={blog.title} fluid rounded />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={7} lg={8}>
            <h1>{blog.title}</h1>
            <p>
              <small>By {blog.author} on {blog.date}</small>
            </p>

            {blog.contentSections?.map((section, index) => (
              <div id={section.id} key={index} className="scroll-section mb-4">
                <h4>{section.title}</h4>
                <p>{section.description}</p>
              </div>
            ))}

            
            {blog.faq && blog.faq.length > 0 && (
              <>
                <h4 className="mt-5">Frequently Asked Questions (FAQs)</h4>
                <Accordion defaultActiveKey={null} flush>
                  {blog.faq.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </>
            )}

          </Col>
          <Col xs={12} md={5} lg={4} className="sticky-top" >
            <Card className="tableOfContent">
              <Card.Body>
                {blog.listItems && blog.listItems.length > 0 && (
                  <>
                    <h4 className="heading">Table of Content</h4>
                    <ul>
                      {blog.listItems.map((item, index) => (
                        <li key={index}>
                          {/* <a href={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`} className="toc-link">
                            {item}
                          </a> */}
                          <a href={`#${blog.contentSections[index].id}`} className="toc-link">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetail;
