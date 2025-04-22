import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import cardImage from '../images/card-image.jpg'
const TimelineSection = () => {
  // Array containing timeline data
  const timelineData = [
    {
      id: 1,
      year: "2014-2016",
      title: "Time crafts true value.",
      description: "With the affection for land in heart, CEO- Peer Muhammad Sohaib Tariq Bodla initiated the Story of Bodla Group as Bodla Builders with the inception of Defence Housing Authority (DHA) on the highly-coveted terrain of Multan. Compelled with unyielding passion, Mr. Sohaib Bodla envisioned the rebirth of the historic land of Multan. Hence, in 2016, he led the charge by securing 100 acres of land for revival in DHA Multan and became a beacon to refinement on this land rich in potential.",
      image: "path-to-image1.jpg"
    },
    {
      id: 2,
      year: "2017",
      title: "Relationship of Confidence & Trust",
      description: "The confluence of relentless pursuit and a commitment to exceptional standards, CEO- Mr. Sohaib Bodla along with Chairman - Col. Tahir Iqbal Bodla and Managing Director - Peer Junaid Iqbal Bodla paved the way in community development of DHA Multan and commendably developed DHA Villas, a standing testament of finesse. By 2017, Bodla Builders fortified a solid relationship of trust and reliability with DHA Multan and to make footprints further stronger, Bodla Group aligned their vision with DHA Multan, eliciting to the launch of 10-Marla Affidavit files, prioritizing on price sustainability and consumer potential gains.",
      image: cardImage
    },
    {
      id: 3,
      year: "2018-2019",
      title: "Expanding our Horizons",
      description: "Rooted in a strong legacy of success in Multan, Bodla Builders swiftly identified the untapped potential of the wider Pakistani real estate market. Expanding beyond their established base, they strategically opened a Lahore sub-office in 2018, marking a significant step in their regional growth. This expansion was quickly followed by the prestigious Askari Villas construction project in 2019, affirming their reputation for excellence in residential construction. Proving their adaptability and market awareness. Bodla Builders introduced the competitively priced 5-Marla Affidavit Files and re-energized interest in DHA Villas through strategic re-marketing.",
      image: cardImage
    },
    {
      id: 4,
      year: "2020-2021",
      title: "Soaring to new heights",
      description: "Marking a bold leap in regional development, the visionary Peer Shoaib Tariq Bodla sought to revolutionize Multan's Commercial & Residential landscape with the groundbreaking project, ‘Business Hub’. The project's Memorandum of Understanding in 2020, followed by its groundbreaking in 2021, marked a pivotal moment in the company's trajectory as a new era of urban development. Simultaneously, Bodla Builders extended their reach to Islamabad, establishing a sub-office and initiating the 5.2 Marla residential project, further diversifying their portfolio beyond the commercial sphere.",
      image: cardImage
    },
    {
      id: 5,
      year: "2022 - 2023",
      title: "The Birth of Bodla Group",
      description: "The year 2022 accelerated Bodla Builders' growth quest with the groundbreaking of Golf View Rumanza, setting the stage for an even more transformative 2023. That year saw the launch of major projects like the 8-Marla development and One Destination, alongside a significant contribution of 450 Acres of Land to DHA Multan. This period of rapid progress culminated in the formation of Bodla Group—signifying their emergence as a multifaceted entity, a leading player in regional development and innovation.",
      image: cardImage
    },
    {
      id: 6,
      year: "2024",
      title: "Leading with Legacy",
      description: "Bodla Group continued its upward momentum in 2024 with the launch of One Destination, reaffirming its expertise in large-scale, visionary development. The year also brought industry-wide recognition as the Group’s Managing Director was elected President of the DHAMRA Association. Expanding its footprint beyond traditional real estate, Bodla Group now actively operates across construction, development, consultancy, marketing, and construction supply—establishing itself as a comprehensive and influential force in shaping the future of Pakistan’s built environment.",
      image: cardImage
    },
    // Add more timeline items as needed
  ];

  return (
    <Container>
      <Row className='justify-content-center cardImage text-justify'>
        <Col xs={12} md={12}>
          {timelineData.map((item, index) => (
            <Row key={item.id} className='align-items-center mb-5 g-4'>
              {/* For even indexes (0, 2, 4...), image on right */}
              {/* For odd indexes (1, 3, 5...), image on left */}
              {index % 2 === 0 ? (
                <>
                  <Col xs={12} md={6} data-aos="fade-right" data-aos-delay="300">
                    <Image src={item.image} alt='Bodla Group project' className='img-fluid w-100' />
                  </Col>
                  <Col xs={12} md={6} data-aos="fade-left" data-aos-delay="400">
                    <p>{item.year}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={12} md={6} data-aos="fade-right" data-aos-delay="300">
                    <p>{item.year}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </Col>
                  <Col xs={12} md={6} data-aos="fade-left" data-aos-delay="400">
                    <Image src={item.image} alt='Bodla Group project' className='img-fluid w-100' />
                  </Col>
                </>
              )}
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default TimelineSection;