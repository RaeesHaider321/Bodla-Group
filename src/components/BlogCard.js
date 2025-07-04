import { Link, useNavigate } from "react-router-dom";
import {Card, Button } from 'react-bootstrap';

const BlogCard = ({ blog }) => {
 const navigate = useNavigate();
  return (
    <div className="blog-card">
      <Card>
        <Card.Img variant="top" src={blog.image} alt={blog.title} />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>{blog.excerpt}</Card.Text>
          <small>By {blog.author} on {blog.date}</small>
          {/* <Link to={`/blog/${blog.id}`}>Read More</Link> */}
          <div className="mt-3">
            <Button variant="primary" onClick={() => navigate(`/blog/${blog.id}`)}>
              Read More →
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>

  );
};

export default BlogCard;
