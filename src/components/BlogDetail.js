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

  // Helper function to get absolute URL
  const getAbsoluteUrl = (path) => {
    if (!path) return '';
    return path.startsWith('http') ? path : `${window.location.origin}${path}`;
  };

  // Current page URL and metadata
  const currentUrl = window.location.href;
  const absoluteImageUrl = getAbsoluteUrl(blog?.image);
  const shareTitle = encodeURIComponent(blog?.title || '');
  const shareDescription = encodeURIComponent(
    blog?.contentSections?.[0]?.intro || blog?.title || ''
  );

  // Set up explicit meta tags for social sharing
  useEffect(() => {
    if (!blog) return;

    const setOrCreateMetaTag = (attrs, content) => {
      // Find existing tag by either property or name
      let tag = document.querySelector(
        attrs.property 
          ? `meta[property="${attrs.property}"]` 
          : `meta[name="${attrs.name}"]`
      );
      
      if (!tag) {
        tag = document.createElement('meta');
        for (const [key, value] of Object.entries(attrs)) {
          tag.setAttribute(key, value);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Required OpenGraph tags (explicitly set)
    setOrCreateMetaTag({ property: 'og:title' }, blog.title);
    setOrCreateMetaTag({ property: 'og:description' }, shareDescription);
    setOrCreateMetaTag({ property: 'og:image' }, absoluteImageUrl);
    setOrCreateMetaTag({ property: 'og:url' }, currentUrl);
    setOrCreateMetaTag({ property: 'og:type' }, 'article');
    setOrCreateMetaTag({ property: 'og:image:width' }, '1200');
    setOrCreateMetaTag({ property: 'og:image:height' }, '630');
    setOrCreateMetaTag({ property: 'og:image:alt' }, blog.title);

    // Twitter Card tags (explicitly set)
    setOrCreateMetaTag({ name: 'twitter:card' }, 'summary_large_image');
    setOrCreateMetaTag({ name: 'twitter:title' }, blog.title);
    setOrCreateMetaTag({ name: 'twitter:description' }, shareDescription);
    setOrCreateMetaTag({ name: 'twitter:image' }, absoluteImageUrl);
    setOrCreateMetaTag({ name: 'twitter:image:alt' }, blog.title);

    // Additional recommended tags
    setOrCreateMetaTag({ name: 'description' }, shareDescription);

  }, [blog, currentUrl, absoluteImageUrl, shareDescription]);

  if (!blog) return <p>Blog not found.</p>;

  // Social share URLs with proper parameters
  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    whatsapp: `https://wa.me/?text=${shareTitle}%20${encodeURIComponent(currentUrl)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(absoluteImageUrl)}&description=${shareTitle}`
  };

  // Copy rich content to clipboard
  const copyToClipboard = () => {
    const richText = `${blog.title}\n\n${currentUrl}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(richText)
        .then(() => alert('Blog post link copied to clipboard!'))
        .catch(err => console.error('Failed to copy: ', err));
    } else {
      // Fallback for older browsers
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
    }
  };
  return (
    <section className="py-4">
      <Container>
        <Button variant="outline-secondary" onClick={() => navigate("/blogs")} className="mb-3">
          ← Back to Blog List
        </Button>

        <Row className="mb-4">
          <Col>
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fluid 
              rounded 
              className="blog-featured-image"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = '/default-blog-image.jpg';
              }}
            />
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
                  <Facebook className="me-1" /> Facebook
                </Button>
                <Button 
                  variant="outline-info" 
                  onClick={() => window.open(socialLinks.twitter, '_blank', 'width=600,height=400')}
                  aria-label="Share on Twitter"
                  className="share-btn"
                >
                  <Twitter className="me-1" /> Twitter
                </Button>
                <Button 
                  variant="outline-primary" 
                  onClick={() => window.open(socialLinks.linkedin, '_blank', 'width=600,height=400')}
                  aria-label="Share on LinkedIn"
                  className="share-btn"
                >
                  <Linkedin className="me-1" /> LinkedIn
                </Button>
                <Button 
                  variant="outline-success" 
                  onClick={() => window.open(socialLinks.whatsapp, '_blank', 'width=600,height=400')}
                  aria-label="Share on WhatsApp"
                  className="share-btn"
                >
                  <Whatsapp className="me-1" /> WhatsApp
                </Button>
                {absoluteImageUrl && (
                  <Button 
                    variant="outline-danger" 
                    onClick={() => window.open(socialLinks.pinterest, '_blank', 'width=600,height=400')}
                    aria-label="Share on Pinterest"
                    className="share-btn"
                  >
                    <i className="bi bi-pinterest me-1"></i> Pinterest
                  </Button>
                )}
                <Button 
                  variant="outline-secondary" 
                  onClick={copyToClipboard}
                  aria-label="Copy link"
                  className="share-btn"
                >
                  <LinkIcon className="me-1" /> Copy Link
                </Button>
              </ButtonGroup>
            </div>

            {/* Rest of your blog content remains the same */}
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