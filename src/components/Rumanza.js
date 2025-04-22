import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Icons from "../components/Icon";
import cardImage from '../images/card-image.jpg'
const Rumanza = () => {
  // Array containing timeline data
  const rumanzaData = [
    {
      id: 1,
      title: "Rumanza's Expansion",
      description: "Spanning 270 acres, Rumanza Golf & Country Club is home to Asia's largest 18-hole, par-72 championship golf course, designed to international standards. The development extends over an additional 295 acres, incorporating thoughtfully planned elements such as:",
      features: [
        'Premium residential plots (4 Kanal, 2 Kanal, 1 Kanal, and 12 Marla)',
        'An architecturally designed mosque',
        'Dedicated commercial areas with retail outlets',
        'Beautifully landscaped parks and green spaces',
        'A well-connected 80-ft-wide Ring Road and 45-ft-wide internal streets'
      ],
      image: cardImage
    },
    {
      id: 2,
      title: "Rumanza's Expansion",
      description: "Spanning 270 acres, Rumanza Golf & Country Club is home to Asia's largest 18-hole, par-72 championship golf course, designed to international standards. The development extends over an additional 295 acres, incorporating thoughtfully planned elements such as:",
      features: [
        'Premium residential plots (4 Kanal, 2 Kanal, 1 Kanal, and 12 Marla)',
        'An architecturally designed mosque',
        'Dedicated commercial areas with retail outlets',
        'Beautifully landscaped parks and green spaces',
        'A well-connected 80-ft-wide Ring Road and 45-ft-wide internal streets'
      ],
      image: cardImage
    },
    {
      id: 3,
      title: "Integrated Commercial & Residential Facilities",
      description: "Rumanza is more than just a golf course; it is a self-sustained community offering both premium residential plots and a thriving commercial area. With direct golf course views and easy access to retail outlets and commercial spaces, Rumanza promises an extravagant lifestyle with ample opportunities for businesses and residents alike.",
      features: [
        ''
      ],
      image: cardImage
    },
    {
      id: 4,
      title: "Alliance with Pearl Continental",
      description: "Rumanza has partnered with Pearl Continental to introduce ‘Rumanza by Pearl Continental’ a lavish five-star hotel that promises unmatched service and hospitality within the community. This collaboration elevates Rumanza’s status, offering residents and guests a refined living and leisure experience.",
      features: [
        ''
      ],
      image: cardImage
    },
    {
      id: 5,
      title: "Golf View Rumanza (GVR) by Bodla Group",
      description: "At the heart of Rumanza lies the Golf View Rumanza (GVR), a prestigious residential and commercial project by Bodla Group. Positioned within DHA Multan, GVR features luxury apartments, penthouses, and commercial spaces with sweeping views of the signature golf course, providing residents and investors with a rare opportunity to enjoy a premium lifestyle in one of Pakistan’s most sought-after communities.",
      features: [
        ''
      ],
      image: cardImage
    },
    {
      id: 6,
      title: "World-Class Golfing Facilities",
      description: "Rumanza’s 18-hole championship golf course is complemented by:",
      features: [
        'A fully equipped driving range with 28 bays on either side',
        'A short game practice area, including dedicated chipping and putting greens',
        'Professional coaching and training programs for golfers of all skill levels',
        'MUSCO lighting for evening play',
        'A strategically located Mid-Way House at the 10th tee',
        'Dedicated restrooms, Pro Shop, café, and locker rooms',
      ],
      image: cardImage
    },
    {
      id: 7,
      title: "Three Distinctive Ecological Zones",
      description: "The Golf-course and surrounding areas are carefully designed around three ecological themes:",
      features: [
        'Desert Land – Sculpted sand dunes, date palms, and desert flora, providing a striking contrast against lush fairways',
        'Wet Land – Four lakes with advanced aeration and a peninsula, promoting local biodiversity',
        'Wood Land – Shaded by mango, citrus, and lychee orchards, offering a serene environment and wildlife shelter'
      ],
      image: cardImage
    },
    {
      id: 8,
      title: "A Life Beyond Golf",
      description: "Rumanza provides a rare opportunity to build bespoke residences with direct golf course frontage. These residences are nestled within serene, landscaped surroundings and seamlessly aligned with the overall master plan. ",
      seconddescription: "Scenic walkways and tastefully positioned kiosks invite residents and visitors to immerse themselves in nature — where vibrant peacocks and gentle ducks roam freely, and gourmet flavors meet the charm of regional cuisine in a truly elevated lifestyle experience.",
      features: [
        ''
      ],
      image: cardImage
    },
    
    // Add more timeline items as needed
  ];

  return (
    <>
          <h2>About</h2>
          <p>Rumanza, a harmonious retreat from the fast pace of modern life. A thoughtfully integrated community, it provides residents with a range of exclusive residential and commercial facilities, all set within one of the most prestigious developments in Pakistan. Featuring premium plots, a state-of-the-art 18-hole golf course, beautifully landscaped parks, and an array of commercial spaces, Rumanza is the epitome of an upscale lifestyle.</p>
          <p>In addition to its residential and commercial offerings, Rumanza has formed a prestigious alliance with <b><span>Pearl Continental</span></b>, introducing a luxurious 5-star hotel that enhances the community's hospitality offerings. Rumanza also features the <b><span>Golf View Rumanza (GVR)</span></b>, a premium residential and commercial project by <b><span>Bodla Group</span></b>, strategically positioned within DHA Multan. This project offers elite living options, including apartments and penthouses with views of Pakistan's first signature golf course, creating an exceptional investment opportunity.</p>
          {rumanzaData.map((item, index) => (
            <Row key={item.id} className='align-items-center mb-5 g-4'>
              {/* For even indexes (0, 2, 4...), image on right */}
              {/* For odd indexes (1, 3, 5...), image on left */}
              {index % 2 === 0 ? (
                <>
                  <Col xs={12} md={6} data-aos="fade-right" data-aos-delay="300">
                    <Image src={item.image} alt='Bodla Group project' className='img-fluid w-100' />
                  </Col>
                  <Col xs={12} md={6} data-aos="fade-left" data-aos-delay="400">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.seconddescription}</p>
                    <ul className='p-0'>
                      {item.features.map((feature, i) => (
                        <li key={i}><Icons name="check" /> {feature}</li>
                      ))}
                    </ul>
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={12} md={6} data-aos="fade-right" data-aos-delay="300">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.seconddescription}</p>
                    <ul className='p-0'>
                      {item.features.map((feature, i) => (
                        <li key={i}><Icons name="check" /> {feature}</li>
                      ))}
                    </ul>
                  </Col>
                  <Col xs={12} md={6} data-aos="fade-left" data-aos-delay="400">
                    <Image src={item.image} alt='Bodla Group project' className='img-fluid w-100' />
                  </Col>
                </>
              )}
            </Row>
          ))}
          </>
  );
};

export default Rumanza;