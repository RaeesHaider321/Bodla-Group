import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/BlogDetail.css';
import EmergingTrends from '../images/blogs/Emerging Trends in Real Estate in Pakistan.jpg';

const BlogDetail = () => {
  const { blogSlug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [headings, setHeadings] = useState([]);
  const contentRef = useRef(null);

  // Extract headings and add IDs for anchor links
  const processContent = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Find all h4 headings
    const headingElements = doc.querySelectorAll('h4');
    const extractedHeadings = [];
    
    headingElements.forEach((heading, index) => {
      const id = `section-${index}`;
      heading.id = id;
      
      // Add a wrapper div with padding for the highlighted section
      const wrapper = doc.createElement('div');
      wrapper.className = 'section-wrapper';
      heading.parentNode.insertBefore(wrapper, heading);
      wrapper.appendChild(heading);
      
      // Move the next elements until next heading into the wrapper
      let next = heading.nextElementSibling;
      while (next && next.tagName !== 'H4') {
        const current = next;
        next = next.nextElementSibling;
        wrapper.appendChild(current);
      }
      
      extractedHeadings.push({
        id,
        text: heading.textContent
      });
    });
    
    setHeadings(extractedHeadings);
    return doc.body.innerHTML;
  };

  // Scroll to section when TOC item is clicked
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate the offset considering the fixed header
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Add highlight effect to the wrapper
      const wrapper = element.parentElement;
      wrapper.classList.add('highlight-section');
      setTimeout(() => {
        wrapper.classList.remove('highlight-section');
      }, 2000);
    }
  };

  // Extract the sidebar content
  const extractSidebarContent = (content) => {
    const headingRegex = /<(h[2-4])>(.*?)<\/h[2-4]>\s*<ul>[\s\S]*?<\/ul>/;
    const match = content.match(headingRegex);
    
    if (!match) return { mainContent: content, sidebarContent: null };
    
    const sidebarContent = match[0];
    const mainContent = content.replace(sidebarContent, '');
    
    return { mainContent, sidebarContent };
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const mockBlogs = [
          {
            id: 1,
            slug: 'getting-started-with-react',
            title: 'Emerging Trends in Real Estate in Pakistan 2025',
            content: `
              <h4>A New Era of Property Investment</h4>
<p>The Real Estate Future in Pakistan is undergoing a powerful transformation in 2025. As Pakistan’s cities expand and its middle class grows, demand is soaring across both residential and commercial sectors. According to experts, the future of real estate in Pakistan 2025 is directly tied to strong urban migration, government incentives, and massive infrastructure investments. These factors, backed by data from Pakistan in 2025 future predictions, are making real estate one of the country’s most stable long-term investments.</p>

<h4>Economic Stability & Policy Support</h4>
<p>Economic Stability is a crucial factor in the real estate boom. In 2025, Pakistan has seen significant growth in GDP, foreign direct investment, and remittance inflows. This has resulted in increased investor confidence. Government efforts to improve the ease of doing business and stable financial regulations have played a key role in boosting demand for real estate. Major cities like Lahore, Karachi, and Multan are benefiting from these changes. The stability has also allowed developers to launch new projects, particularly in middle-income and affordable housing segments.</p>

<h4>Commercial Property Expansion on the Rise</h4>
<p>Commercial Property Expansion is being driven by Pakistan’s growing economy and rising demand for retail, office, and logistics space. E-commerce growth has accelerated the need for warehouses and distribution hubs. Major cities are witnessing the construction of modern commercial complexes and business parks. The hospitality sector, particularly in northern tourist regions, is also attracting real estate investment. With urban centers expanding, commercial properties are proving to be lucrative options for investors seeking higher rental yields and capital appreciation.</p>

<h4>Reduction in Interest Rates: A Catalyst for Growth</h4>
<p>A key development in 2025 is the Reduction in Interest Rates. The State Bank of Pakistan has reduced the policy rate from 22% to 13%, with predictions of single digits ahead. This shift has made bank savings less attractive and redirected capital toward real estate. Lower borrowing costs have allowed more individuals to buy property and more developers to finance new projects. The construction sector is seeing a revival, and real estate transactions have significantly increased due to this monetary easing.</p>

<h4>Gated Communities for Modern Living</h4>
<p>Gated Communities are becoming the preferred residential option for families in Pakistan. These communities offer enhanced security, organized layouts, parks, gyms, schools, and on-site shopping centers. In a time of growing security concerns, the peace of mind provided by gated housing is highly valued. Projects in Lahore, Islamabad, and Karachi are catering to this trend. Sustainable and green environments within these communities further attract buyers. Gated communities are not only desirable but also offer strong resale and rental potential.</p>

<h4>Regulatory Concerns & Reforms</h4>
<p>Regulatory Concerns have long plagued the real estate industry in Pakistan. Issues like unclear property titles, unapproved developments, and lack of transparency have deterred many investors. However, reforms such as the introduction of Real Estate Regulatory Authority (RERA) in several provinces are helping restore trust. These measures are promoting accountability and legal compliance. Transparent property dealings are now becoming more common, encouraging both local and foreign investment. RERA’s presence is also leading to faster project approvals and dispute resolution.</p>

<h4>Technological Advancements in Real Estate</h4>
<p>The Technological Advancements in Real Estate are reshaping how properties are bought, sold, and managed in Pakistan. PropTech startups are offering services such as online listings, virtual property tours, and AI-powered investment analytics. Blockchain is being explored for secure transactions and title verification. Digital documentation and remote property exploration are becoming standard. Property management apps are also helping landlords and tenants manage rentals more efficiently. These tools are making real estate more transparent, accessible, and efficient.</p>

<h4>Development of Smart Cities</h4>
<p>The Development of Smart Cities is transforming Pakistan’s urban landscape. Government-backed projects are integrating smart infrastructure, sustainable energy, efficient transportation, and digital communication systems. These cities aim to offer a higher quality of life while addressing urban population challenges. Projects in Islamabad, Multan, and Faisalabad are showcasing smart grids, surveillance systems, and public Wi-Fi. The real estate demand in these areas is growing rapidly as people seek smarter, more connected living environments. Smart cities are the future of planned urbanization.</p>

<h4>Mixed Used Developments Gain Popularity</h4>
<p>Mixed Used Developments combine residential, commercial, and recreational spaces, offering convenience and better utilization of land. Urban centers are increasingly adopting this model. For example, developments like Urban Heights in Bahria Town offer commercial units on the lower floors and apartments above. These spaces promote a walkable lifestyle where people can live, work, and shop without commuting. Such projects are attracting young professionals and families alike. Developers prefer them due to higher returns and diversified revenue streams.</p>

<h4>Growth in Rental Market</h4>
<p>The Growth in Rental Market is visible in major cities due to increased urban migration, job opportunities, and rising education demand. Areas near universities and business hubs have seen consistent rental demand. Lahore, in particular, has outperformed other cities in rental yields. Short-term rentals through platforms like Airbnb are also gaining popularity, especially in tourist-friendly regions. Serviced apartments managed by hospitality brands are another growing trend, offering steady income and professional management to property owners.</p>

<h4>Urbanization Accelerates Market Growth</h4>
<p>Pakistan is undergoing rapid Urbanization, with people relocating to cities for jobs, education, and healthcare. This shift has led to a growing demand for housing and infrastructure in urban areas. Cities like Karachi, Lahore, and Islamabad are seeing a surge in construction of residential apartments and commercial centers. Projects like the Orange Line Metro and Lahore Ring Road have improved accessibility, raising property values. Urbanization is not just reshaping skylines but also increasing real estate investment opportunities.</p>

<h4>Growth in Property Prices</h4>
<p>There is a steady Growth in Property Prices due to infrastructure projects, population growth, and demand in urban zones. Areas near transportation hubs, CPEC routes, and commercial zones are seeing faster appreciation. Developers are launching projects with flexible plans to meet increasing demand. Investors are capitalizing on price rises in semi-urban and suburban regions as well. With land scarcity in core cities, peripheral areas are becoming hotspots. Overall, property remains a solid asset for capital gains in 2025.</p>

<h4>Digital Infrastructure Investments</h4>
<p>The demand for cloud computing, AI, and 5G has spurred Digital Infrastructure Investments in Pakistan. This includes data centers, telecom towers, and IT parks. As companies expand their digital footprint, the real estate required to support these technologies is in high demand. Investors are exploring opportunities in cities that offer space and connectivity. Government support and public-private partnerships are accelerating these developments. These investments are boosting the value of surrounding land and attracting international attention.</p>

<h4>High-rise Buildings Dominate City Skylines</h4>
<p>High-rise Buildings are becoming the norm in high-density urban areas. With limited horizontal space, vertical developments are solving housing shortages. Projects like Urban Heights in Bahria Town are setting benchmarks for modern vertical living. These buildings offer panoramic views, rooftop amenities, and advanced security. They also appeal to buyers looking for luxury within city limits. High-rise construction is optimizing land use while offering modern facilities. This trend is expected to grow in 2025 and beyond.</p>

<h4>Diversification of Investment Options</h4>
<p>A key trend in 2025 is the Diversification of Investment Options in real estate. REITs (Real Estate Investment Trusts), crowdfunding platforms, and fractional ownership models are allowing small investors to enter the market. These tools reduce risk and offer exposure to high-value projects. Overseas Pakistanis are also using digital platforms to invest remotely. Diversification is giving rise to new investment behavior, with more people opting for flexible, tech-enabled, and professionally managed portfolios.</p>

<h4>Rising Interest in Commercial Real Estate</h4>
<p>There is a Rising Interest in Commercial Real Estate due to business expansion, startup culture, and logistics demand. Offices, retail spaces, and industrial warehouses are being developed in major and secondary cities. E-commerce growth has increased the need for fulfillment centers and last-mile delivery hubs. Northern areas are seeing new hospitality projects due to tourism. Commercial properties offer higher returns than residential ones and are attracting both local and international investors.</p>

<h4>Sustainable and Green Real Estate Development</h4>
<p>Sustainable and Green Real Estate Development is gaining traction as environmental awareness increases. Developers are integrating solar energy, rainwater harvesting, and eco-friendly materials. Green certifications are becoming a selling point. Sustainable homes reduce utility costs and appeal to buyers seeking healthier lifestyles. Projects in Islamabad and Lahore are leading this movement. Environmental regulations are expected to tighten, making green building not only a preference but a necessity in the near future.</p>

<h4>Increased Focus on Affordable Housing</h4>
<p>The Increased Focus on Affordable Housing addresses the needs of Pakistan’s growing population. Developers are offering low-cost units with flexible payment plans. Government schemes are supporting projects for low and middle-income groups. Projects like Urban Enclave on Raiwind Road are examples of how affordability and quality can coexist. These homes are achieving strong occupancy and becoming popular among first-time buyers. Affordable housing is expected to dominate new launches in 2025.</p>

<h4>Conclusion</h4>
<p>The future of real estate in Pakistan 2025 is marked by innovation, accessibility, and long-term potential. From smart cities and green construction to REITs and affordable housing, the trends indicate a maturing and resilient market. The Pakistan real estate market continues to adapt to changing needs, both locally and globally. Whether you are an investor, homeowner, or developer, 2025 offers diverse opportunities with strong potential for returns. Now is the time to act smartly, diversify, and build for the future.</p>
<div class="table-responsive">
        <table class="table table-bordered table-striped">
          <thead>
    <tr>
      <th>Keyword</th>
      <th>Count</th>
    </tr>
  </thead>
          <tbody>
    <tr><td>future of real estate in pakistan 2025</td><td>3</td></tr>
    <tr><td>property prices in 2025 in pakistan</td><td>2</td></tr>
    <tr><td>real estate future in pakistan</td><td>2</td></tr>
    <tr><td>pakistan in 2025 future predictions</td><td>2</td></tr>
    <tr><td>pakistan real estate market</td><td>2</td></tr>
    <tr><td>will property prices go up in pakistan</td><td>1</td></tr>
    <tr><td>is it good to invest in real estate in pakistan 2025</td><td>1</td></tr>
    <tr><td>what is the forecast for property in pakistan 2025</td><td>1</td></tr>
    <tr><td>what is the future of property investment in pakistan</td><td>1</td></tr>
    <tr><td>best cities to invest in real estate pakistan 2025</td><td>1</td></tr>
  </tbody>
      </div>
      <h2>Frequently Asked Questions (FAQs)</h2>
      <h4>1. What is the future of real estate in Pakistan 2025?</h4>
<p>The future is promising, with rising infrastructure development, interest rate reductions, and regulatory reforms making the sector more attractive for investment.</p>

<h4>2. Will property prices go up in Pakistan in 2025?</h4>
<p>Yes, property prices are expected to increase steadily, particularly in urban centers and areas near infrastructure projects.</p>

<h4>3. Is it good to invest in real estate in Pakistan 2025?</h4>
<p>Absolutely. With improved policies, lower interest rates, and expanding urbanization, 2025 is a favorable year for real estate investment.</p>

<h4>4. What is the forecast for property in Pakistan 2025?</h4>
<p>Experts predict a robust increase in demand across residential, commercial, and rental segments due to economic and demographic trends.</p>

<h4>5. What is the future of property investment in Pakistan?</h4>
<p>Diversified options like REITs and smart cities are reshaping the investment landscape, making it more accessible and rewarding.</p>

<h4>6. Best cities to invest in real estate in Pakistan 2025?</h4>
<p>Lahore, Islamabad, Karachi, and Multan top the list due to strong infrastructure, demand, and ongoing development projects.</p>

              <h3>Table of Content</h3>
              <ul>
                <li>A New Era of Property Investment</li>
<li>Economic Stability & Policy Support</li>
<li>Commercial Property Expansion on the Rise</li>
<li>Reduction in Interest Rates: A Catalyst for Growth</li>
<li>Gated Communities for Modern Living</li>
<li>Regulatory Concerns & Reforms</li>
<li>Technological Advancements in Real Estate</li>
<li>Development of Smart Cities</li>
<li>Mixed Used Developments Gain Popularity</li>
<li>Growth in Rental Market</li>
<li>Urbanization Accelerates Market Growth</li>
<li>Growth in Property Prices</li>
<li>Digital Infrastructure Investments</li>
<li>High-rise Buildings Dominate City Skylines</li>
<li>Diversification of Investment Options</li>
<li>Rising Interest in Commercial Real Estate</li>
<li>Sustainable and Green Real Estate Development</li>
<li>Increased Focus on Affordable Housing</li>
<li>Final Verdict</li>
              </ul>
              
      
            `,
            date: '2023-05-15',
            author: 'Jane Doe',
            featuredImage: EmergingTrends,
            categories: ['Development', 'React']
          },
          {
            id: 2,
            slug: 'advanced-react-patterns',
            title: 'Advanced React Patterns',
            content: `
              <p>Advanced React patterns include techniques like Render Props, Higher-Order Components, and the Context API.</p>
              <p>These patterns help you write more reusable and maintainable code.</p>
              <h4>Common Patterns</h4>
              <ul>
                <li>Render Props</li>
                <li>Higher-Order Components</li>
                <li>Compound Components</li>
              </ul>
            `,
            date: '2023-06-20',
            author: 'John Smith',
            featuredImage: '/images/blog-placeholder-2.jpg',
            categories: ['Advanced', 'Patterns']
          },
          {
            id: 3,
            slug: 'state-management-in-react',
            title: 'State Management in React',
            content: `
              <p>State management in React can be handled in various ways. For simple applications, React's built-in useState and useReducer hooks might be sufficient.</p>
              <p>For more complex applications, you might consider libraries like Redux or MobX.</p>
              <h4>Options</h4>
              <ul>
                <li>Context API</li>
                <li>Redux</li>
                <li>MobX</li>
                <li>Recoil</li>
              </ul>
            `,
            date: '2023-07-10',
            author: 'Alice Johnson',
            featuredImage: '/images/blog-placeholder-3.jpg',
            categories: ['State', 'Management']
          }
        ];

        const foundBlog = mockBlogs.find(blog => blog.slug === blogSlug);
        if (foundBlog) {
          setBlog({
            ...foundBlog,
            content: processContent(foundBlog.content)
          });
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogSlug]);

  if (loading) {
    return <div className="container py-5 text-center">Loading blog post...</div>;
  }

  if (!blog) {
    return (
      <div className="container py-5 text-center">
        <h2>Blog post not found</h2>
        <Link to="/blogs" className="btn btn-primary mt-3">
          Back to all posts
        </Link>
      </div>
    );
  }

  const { mainContent, sidebarContent } = extractSidebarContent(blog.content);

  return (
    <Container className="py-5">
      <Link to="/blogs" className="btn btn-outline-secondary mb-4">
        ← Back to all posts
      </Link>

      <article>
        <header className="mb-4">
          <h1 className="fw-bolder mb-1">{blog.title}</h1>
          <div className="text-muted fst-italic mb-2">
            Posted on {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} by {blog.author}
          </div>
          <div className="mb-3">
            {blog.categories.map((category, index) => (
              <span key={index} className="badge bg-secondary me-2">
                {category}
              </span>
            ))}
          </div>
        </header>

        <figure className="mb-4">
          <img
            className="img-fluid rounded w-100"
            src={blog.featuredImage}
            alt={blog.title}
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </figure>

        <Row>
          {/* Main content column (col-9) */}
          <Col lg={9} ref={contentRef}>
            <div dangerouslySetInnerHTML={{ __html: mainContent }} />
          </Col>
          
          {/* Sidebar column (col-3) */}
          <Col lg={3}>
            <Card className="sticky-top" style={{ top: '80px' }}>
              <Card.Body>
                <h4 className="sidebar-heading">Table of Contents</h4>
                <ul className="toc-list">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <button 
                        className="toc-link btn btn-link text-start p-0"
                        onClick={() => scrollToSection(heading.id)}
                      >
                        {heading.text}
                      </button>
                    </li>
                  ))}
                </ul>
                {/* {sidebarContent && (
                  <div dangerouslySetInnerHTML={{ __html: sidebarContent }} />
                )} */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </article>
    </Container>
  );
};

export default BlogDetail;