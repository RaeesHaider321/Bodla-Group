import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="blog-card clickable-card" 
      onClick={() => navigate(`/blog/${blog.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <Card>
        <Card.Img variant="top" src={blog.image} alt={blog.title} />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>{blog.excerpt}</Card.Text>
          <small>By {blog.author} on {blog.date}</small>
          <div className="mt-3">
            <span className="text-primary">Read More →</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCard;