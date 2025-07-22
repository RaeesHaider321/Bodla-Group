import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Container, Row, Col, Button, Image, Table, Accordion, Card } from 'react-bootstrap';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';
import { useState } from 'react';
import "../styles/blogs.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find(post => post.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!blog) return <p>Blog not found.</p>;

  const shareUrl = window.location.href;
  const shareTitle = blog.title;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <Helmet>
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.contentSections[0]?.description || "Read this amazing blog post!"} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
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
                  <p>{section.intro}</p>
                  <h4>{section.title}</h4>
                  <p>{section.description}</p>
                  <p>{section.extraParagraph}</p>
                  {section.listing}
                  <p>{section.afterULParagraph}</p>
                </div>
              ))}

              <div className="share-section mt-5">
                <h4>Share this article Test 1</h4>
                <div className="d-flex align-items-center gap-3">
                  <TwitterShareButton url={shareUrl} title={shareTitle}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <FacebookShareButton url={shareUrl} quote={shareTitle}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <LinkedinShareButton url={shareUrl} title={shareTitle}>
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                  <Button 
                    variant="outline-primary" 
                    onClick={copyToClipboard}
                    className="d-flex align-items-center"
                  >
                    {copied ? 'Copied!' : 'Copy Link'}
                  </Button>
                </div>
              </div>

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
    </>
  );
};

export default BlogDetail;