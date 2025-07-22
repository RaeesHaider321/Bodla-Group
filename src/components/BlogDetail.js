import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Container, Row, Col, Button, Image, Accordion, Card, ButtonGroup } from 'react-bootstrap';
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Whatsapp } from 'react-bootstrap-icons';
import "../styles/blogs.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find(post => post.slug === slug);

  // Get current URL for sharing
  const currentUrl = window.location.href;
  const shareTitle = encodeURIComponent(blog?.title || '');
  const shareText = encodeURIComponent(`Check out this blog post: ${blog?.title || ''}`);
  const imageUrl = encodeURIComponent(blog?.image || '');

  // Enhanced Social share URLs with images and better metadata
  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&picture=${imageUrl}&title=${shareTitle}&description=${shareText}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}&hashtags=blog`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${shareTitle}&summary=${shareText}&source=YourBlogName`,
    whatsapp: `https://wa.me/?text=${shareText}%20${currentUrl}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${currentUrl}&media=${imageUrl}&description=${shareText}`
  };

  // Copy URL to clipboard with rich text (title + URL)
  const copyToClipboard = () => {
    const richText = `${blog?.title || ''}\n${currentUrl}`;
    navigator.clipboard.writeText(richText).then(() => {
      alert('Blog post link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
      const textArea = document.createElement('textarea');
      textArea.value = richText;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        alert('Blog post link copied to clipboard!');
      } catch (err) {
        alert('Failed to copy link');
      }
      document.body.removeChild(textArea);
    });
  };

  // Dynamic meta tags for social sharing
  const setMetaTags = () => {
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', blog?.title || '');
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', shareText);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', blog?.image || '');
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', currentUrl);
    document.querySelector('meta[name="twitter:card"]')?.setAttribute('content', 'summary_large_image');
  };

  useEffect(() => {
    if (blog) {
      setMetaTags();
    }
  }, [blog]);

  if (!blog) return <p>Blog not found.</p>;

  return (
    <section className="py-4">
      <Container>
        <Button variant="outline-secondary" onClick={() => navigate("/blogs")} className="mb-3">
          ← Back to Blog List
        </Button>

        <Row className="mb-4">
          <Col>
            <Image src={blog.image} alt={blog.title} fluid rounded className="blog-featured-image" />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={7} lg={8}>
            <h1 className="blog-title">{blog.title}</h1>
            <p className="blog-meta">
              <small>By {blog.author} on {blog.date}</small>
            </p>

            <div className="social-share mb-4">
              <h5>Share this post:</h5>
              <ButtonGroup aria-label="Social share buttons" className="flex-wrap">
                <Button 
                  variant="outline-primary" 
                  onClick={() => window.open(socialLinks.facebook, '_blank', 'width=600,height=400')}
                  aria-label="Share on Facebook"
                  className="share-btn"
                >
                  <Facebook className="me-1" /> Share
                </Button>
                <Button 
                  variant="outline-info" 
                  onClick={() => window.open(socialLinks.twitter, '_blank', 'width=600,height=400')}
                  aria-label="Share on Twitter"
                  className="share-btn"
                >
                  <Twitter className="me-1" /> Tweet
                </Button>
                <Button 
                  variant="outline-primary" 
                  onClick={() => window.open(socialLinks.linkedin, '_blank', 'width=600,height=400')}
                  aria-label="Share on LinkedIn"
                  className="share-btn"
                >
                  <Linkedin className="me-1" /> Post
                </Button>
                <Button 
                  variant="outline-success" 
                  onClick={() => window.open(socialLinks.whatsapp, '_blank', 'width=600,height=400')}
                  aria-label="Share on WhatsApp"
                  className="share-btn"
                >
                  <Whatsapp className="me-1" /> Send
                </Button>
                <Button 
                  variant="outline-danger" 
                  onClick={() => window.open(socialLinks.pinterest, '_blank', 'width=600,height=400')}
                  aria-label="Share on Pinterest"
                  className="share-btn"
                >
                  <i className="bi bi-pinterest me-1"></i> Pin
                </Button>
                <Button 
                  variant="outline-secondary" 
                  onClick={copyToClipboard}
                  aria-label="Copy link"
                  className="share-btn"
                >
                  <LinkIcon className="me-1" /> Copy
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