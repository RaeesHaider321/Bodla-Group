import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Container, Row, Col, Button, Image, Table, Accordion, Card, ButtonGroup } from 'react-bootstrap';
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Whatsapp } from 'react-bootstrap-icons';
import "../styles/blogs.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find(post => post.slug === slug);
  
  if (!blog) return <p>Blog not found.</p>;

  // Get current URL for sharing
  const currentUrl = window.location.href;
  const shareTitle = encodeURIComponent(blog.title);
  const shareText = encodeURIComponent(`Check out this blog post: ${blog.title}`);

  // Social share URLs
  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${shareTitle}`,
    whatsapp: `https://wa.me/?text=${shareText}%20${currentUrl}`
  };

  // Copy URL to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('Link copied to clipboard!');
  };

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

            {/* Social Share Buttons */}
            <div className="social-share mb-4">
              <h5>Share this post:</h5>
              <ButtonGroup aria-label="Social share buttons">
                <Button 
                  variant="outline-primary" 
                  onClick={() => window.open(socialLinks.facebook, '_blank')}
                  aria-label="Share on Facebook"
                >
                  <Facebook /> Facebook
                </Button>
                <Button 
                  variant="outline-info" 
                  onClick={() => window.open(socialLinks.twitter, '_blank')}
                  aria-label="Share on Twitter"
                >
                  <Twitter /> Twitter
                </Button>
                <Button 
                  variant="outline-primary" 
                  onClick={() => window.open(socialLinks.linkedin, '_blank')}
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin /> LinkedIn
                </Button>
                <Button 
                  variant="outline-success" 
                  onClick={() => window.open(socialLinks.whatsapp, '_blank')}
                  aria-label="Share on WhatsApp"
                >
                  <Whatsapp /> WhatsApp
                </Button>
                <Button 
                  variant="outline-secondary" 
                  onClick={copyToClipboard}
                  aria-label="Copy link"
                >
                  <LinkIcon /> Copy Link
                </Button>
              </ButtonGroup>
            </div>

            {blog.contentSections?.map((section, index) => (
              <div id={section.id} key={index} className="scroll-section mb-4">
                <p>{section.intro}</p>
                <h4>{section.title}</h4>
                <p>{section.description}</p>
                <p>{section.extraParagraph}</p>
                {section.listing}
                <p>{section.afterULParagraph}</p>
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
          
          <Col xs={12} md={5} lg={4} className="sticky-top">
            <Card className="tableOfContent">
              <Card.Body>
                {blog.listItems && blog.listItems.length > 0 && (
                  <>
                    <h4 className="heading">Table of Content</h4>
                    <ul>
                      {blog.listItems.map((item, index) => (
                        <li key={index}>
                          <a href={`#${blog.contentSections[index].id}`} className="toc-link">
                            {item}
                          </a>
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