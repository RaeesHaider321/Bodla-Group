import BlogCard from "./BlogCard";
import { blogPosts } from "../data/blogData";
import { Container, Row, Col } from 'react-bootstrap';
import InnerHeader from '../components/InnerHeader';
import aboutBg from '../images/construction-site.jpg';
import { Helmet } from "react-helmet";
import '../components/InnerHeader.css';
const BlogList = () => {
  return (
    <>
      <Helmet>
        <title>Latest Blog Posts | Your Site Name</title>
        <meta name="keywords" content="future of real estate in pakistan 2025, property prices in 2025 in pakistan, real estate future in pakistan, pakistan in 2025 future predictions, pakistan real estate market, will property prices go up in pakistan, is it good to invest in real estate in pakistan 2025, forecast for property in pakistan 2025, future of property investment in pakistan, best cities to invest in real estate pakistan 2025, economic stability and policy support, commercial property expansion, reduction in interest rates, gated communities, regulatory concerns and reforms, technological advancements in real estate, development of smart cities, mixed-use developments, growth in rental market, urbanization accelerates market growth, growth in property prices, digital infrastructure investments, high-rise buildings, diversification of investment options, rising interest in commercial real estate, sustainable and green real estate development, increased focus on affordable housing" />
        <meta name="description" content="Explore Pakistan's real estate future in 2025: property price forecasts, best cities to invest (Lahore, Karachi, Islamabad, Multan), commercial growth, smart cities, and government policies shaping the market." />
        <meta name="keywords" content="Impact of Budget 2025 on Real Estate in Pakistan Tax Relief, Housing Incentives & Market Trends" />
        <meta name="description" content="….reduced withholding tax (WHT) rates for property buyers, abolishes the Federal Excise Duty (FED) on property transactions, and offers a tax credit for affordable housing projects—specifically for houses up to 10 Marlas (about 250 square yards) and apartments up to 2,000 sq. ft." />
        <meta name="keywords" content="property budget 2025, budget 2025 tax relief, budget 2025-26 tax on property, federal government budget 2025, impact of budget 2025 on real estate in Pakistan, Pakistan budget 2025 real estate tax relief, federal budget 2025 property market impact, tax credits for affordable housing Pakistan 2025, overseas Pakistanis property investment tax benefits, housing incentives up to 10 marlas Pakistan, budget 2025 real estate impact Multan, property tax changes Multan 2025, CGT on property Islamabad 2025, real estate market Lahore and Karachi after budget, UAE expats Pakistan property tax relief 2025, Pakistan real estate market 2025, property investment opportunities Pakistan, tax exemptions for NRPs 2025, affordable housing schemes Pakistan, real estate growth post-budget" />

      </Helmet>
      <InnerHeader
        heading="Latest Blog "
        highlight="Posts"
        subtext="Dive into our freshest content and stay ahead of the curve"
        backgroundImage={aboutBg}
      />
      <section>
        <Container>
          <Row xs={1} md={3} lg={3} className="blog-list g-3">
            {blogPosts.map(blog => (
              <Col key={blog.id}>
                <BlogCard blog={blog} slug={blog.slug} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogList;