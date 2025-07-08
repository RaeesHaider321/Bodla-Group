import BlogCard from "./BlogCard";
import { blogPosts } from "../data/blogData";
import { Container, Row, Col } from 'react-bootstrap';
import InnerHeader from '../components/InnerHeader';
import aboutBg from '../images/construction-site.jpg';
// import { Helmet } from 'react-helmet-async';
import { Helmet } from "react-helmet";

const BlogList = () => {
  return (
    <>
      <Helmet>
        <title>Latest Blog Posts | Your Site Name</title>
        <meta name="keywords" content="future of real estate in pakistan 2025, property prices in 2025 in pakistan, real estate future in pakistan, pakistan in 2025 future predictions, pakistan real estate market, will property prices go up in pakistan, is it good to invest in real estate in pakistan 2025, forecast for property in pakistan 2025, future of property investment in pakistan, best cities to invest in real estate pakistan 2025, economic stability and policy support, commercial property expansion, reduction in interest rates, gated communities, regulatory concerns and reforms, technological advancements in real estate, development of smart cities, mixed-use developments, growth in rental market, urbanization accelerates market growth, growth in property prices, digital infrastructure investments, high-rise buildings, diversification of investment options, rising interest in commercial real estate, sustainable and green real estate development, increased focus on affordable housing" />
        <meta name="description" content="Explore Pakistan's real estate future in 2025: property price forecasts, best cities to invest (Lahore, Karachi, Islamabad, Multan), commercial growth, smart cities, and government policies shaping the market." />
      </Helmet>
      
      <InnerHeader 
        title="Latest Blog Posts" 
        subtitle="Dive into our freshest content and stay ahead of the curve" 
        bgImage={aboutBg}
      />
      
      <section>
        <Container>
          <Row xs={1} md={3} lg={3} className="blog-list g-3">
            {blogPosts.map(blog => (
              <Col key={blog.id}><BlogCard blog={blog} /></Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogList;