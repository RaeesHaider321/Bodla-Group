import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Icons from "../components/Icon";
import BodlaButton from './Button';
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
          <div className='mt-3'>
            <BodlaButton text="Read More" icon={<Icons name="rightArrow" />} variant="primary" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCard;