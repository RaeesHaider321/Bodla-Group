import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogList.css';
import InnerHeader from '../components/InnerHeader';
import aboutBg from '../images/construction-site.jpg';

import EmergingTrends from '../images/blogs/Emerging Trends in Real Estate in Pakistan.jpg';



const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchBlogs = async () => {
      try {
        // In a real app, you would fetch from an API
        const mockBlogs = [
          {
            id: 1,
            slug: 'getting-started-with-react',
            title: 'Emerging Trends in Real Estate in Pakistan 2025',
            excerpt: 'EmergingTrends',
            date: '2023-06-20',
            featuredImage: EmergingTrends
          },
          {
            id: 2,
            slug: 'advanced-react-patterns',
            title: 'Advanced React Patterns',
            excerpt: 'Explore advanced patterns like render props and higher-order components.',
            date: '2023-06-20',
            featuredImage: '/images/blog-placeholder-2.jpg'
          },
          {
            id: 3,
            slug: 'state-management-in-react',
            title: 'State Management in React',
            excerpt: 'Compare different state management solutions for React apps.',
            date: '2023-07-10',
            featuredImage: '/images/blog-placeholder-3.jpg'
          }
        ];
        setBlogs(mockBlogs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="container py-5 text-center">Loading blogs...</div>;
  }

  return (
    <>
    <InnerHeader 
        title="Latest Blog Posts" 
        subtitle="Dive into our freshest content and stay ahead of the curve" 
        // caption="Who we are"
        bgImage={aboutBg}
      />
      
    <div className="container py-5">
      <div className="row">
        {blogs.map(blog => (
          <div key={blog.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src={blog.featuredImage} 
                className="card-img-top" 
                alt={blog.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text small">
                  {new Date(blog.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="card-text">{blog.excerpt}</p>
                <Link 
                  to={`/blogs/${blog.slug}`} 
                  className="btn btn-primary"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogList;