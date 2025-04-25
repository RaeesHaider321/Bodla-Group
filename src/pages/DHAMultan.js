import React from 'react';
import { Tab, Tabs, Container, Row, Col, Card, Image } from 'react-bootstrap';
import dhalogo from '../images/dha-logo.png'
import dha360Zoo from '../images/DHAProjects/dha-360-Zoo.jpg'
import dhaAM99Hospital from '../images/DHAProjects/dha-AM-99-Hospital.jpg'
import dhaArenaEventComplex from '../images/DHAProjects/dha-Arena.jpg'
import dhaAskariHousing3 from '../images/DHAProjects/dha-Askari3.jpg'
import dhaCentreBusinessSquare from '../images/DHAProjects/dha-Centeral-Business-Square.jpeg'
import dhaEntertainment from '../images/DHAProjects/dha-Cinema.jpg'
import dhaDHAVillasCommunity from '../images/DHAProjects/dha-DHA-Villas.jpg'
import dhaDefenceOrchard from '../images/DHAProjects/dha-Defence-Orchard.jpeg'
import dhaEnergizationOfSectors from '../images/DHAProjects/dha-Energization-of-Sectors.jpg'
import dhaFoodCourt from '../images/DHAProjects/dha-Food-Court.jpg'
import dhaFuelStation from '../images/DHAProjects/dha-Fuel-Station.jpeg'
import dhaJabeenArcades from '../images/DHAProjects/dha-Jabeen-Arcades.jpeg'
import dhaMainBoulevards from '../images/DHAProjects/dha-Main-Boulevards.png'
import dhaMiwakiForest from '../images/DHAProjects/dha-Miwaki-Forest.jpeg'
import dhaMonuments from '../images/DHAProjects/dha-Monuments.jpg'
import dhaMosque from '../images/DHAProjects/dha-Mosque.jpg'
import dhaNursery from '../images/DHAProjects/dha-Nursery.jpg'
import dhaPakistanSquare from '../images/DHAProjects/dha-Pakistan-Square.jpeg'
import dhaParks from '../images/DHAProjects/dha-Parks.jpeg'
import dhaRescue1122 from '../images/DHAProjects/dha-Rescue1122.jpg'
import dhaResidenceFacilitationCenter from '../images/DHAProjects/dha-Residence-Facilitation-Center.jpeg'
import dhaRoadInfrastructure from '../images/DHAProjects/dha-Road-Infrastructure.jpeg'
import dhaRumanzaGolfCourse from '../images/DHAProjects/dha-Rumanza-Golf-Course.jpg'
import dhaSectors from '../images/DHAProjects/dha-Sectors.jpg'
import dhaSewerageTreatmentPlant from '../images/DHAProjects/dha-Sewerage.jpg'
import dhaSchoolSystem from '../images/DHAProjects/dha-Shool-Systems.jpg'
import dhaShoppingArcade from '../images/DHAProjects/dha-Shopping-Arcade.jpg'
import dhaSports from '../images/DHAProjects/dha-Sports.jpeg'
import dhaVetHospital from '../images/DHAProjects/dha-Vet-Hospital.jpg'
import dhaVillasCommercialCenter from '../images/DHAProjects/dha-Villas-Commercial.jpg'
// Developing
import dhaHeadOffice from '../images/DHAProjects/dhaHeadOffice.jpeg'
import dhaBusinessHub from '../images/DHAProjects/dhaBusinessHub.jpg'
import dhabodlaHomes from '../images/DHAProjects/dha-bodlaHomes.jpg'
import dhaSereneTower from '../images/DHAProjects/dhaSereneTower.jpg'
import dhaMangoMuseum from '../images/DHAProjects/dhaMangoMuseum.jpeg'
import dhaEducationCity from '../images/DHAProjects/dhaEducationCity.jpg'
import dhaMedicalCityAM99 from '../images/DHAProjects/dhaMedicalCityAM99.jpg'
import dhaBoulevardHeights from '../images/DHAProjects/dhaBoulevardHeights.jpg'
import dhaDowntownRumanza from '../images/DHAProjects/dhaDowntownRumanza.jpeg'
import dhaGolfViewRumanza from '../images/DHAProjects/dhaGolfViewRumanza.jpg'
// dhaUpcomingProjects
import dhaPark from '../images/DHAProjects/dhaPark.jpg';
import dhaNishatSchoolsColleges from '../images/DHAProjects/dhaNishatSchoolsColleges.jpg';
import dhaMegaMall from '../images/DHAProjects/dhaMegaMall.jpg';
import dhaFastUniversity from '../images/DHAProjects/dhaFastUniversity.jpg';
import dhaHiltonDoubleTree from '../images/DHAProjects/dhaHiltonDoubleTree.jpg';
import dhaBavylon from '../images/DHAProjects/dhaBavylon.jpg';
import dhaOneDestination from '../images/DHAProjects/dhaOneDestination.jpg';
import dhaMallOfCentralSquare from '../images/DHAProjects/dhaMallOfCentralSquare.jpg';
import dhaCommunityClub from '../images/DHAProjects/dhaCommunityClub.jpg';
import dhaPunjabGroupSchoolsColleges from '../images/DHAProjects/dhaPunjabGroupSchoolsColleges.jpg';
import dhaNadraRegionalOffice from '../images/DHAProjects/dhaNadraRegionalOffice.jpg';
import dha7CentralMultan from '../images/DHAProjects/dha7CentralMultan.jpg';
import dha01Boulevard from '../images/DHAProjects/dha01Boulevard.jpg';
import colaboration from '../images/CollaborationWithDHA.png'

// Rumanza
import Rumanza from '../components/Rumanza'

import Icons from "../components/Icon";
import BodlaButton from '../components/Button';
const DHAMultan = () => {
  const dhaDevelopedProjects = [
    { id: 1, title: "Arena Event Complex and Hotel", imgSrc: dhaArenaEventComplex },
    { id: 2, title: "Food Court", imgSrc: dhaFoodCourt },
    { id: 3, title: "Rumanza Golf Course", imgSrc: dhaRumanzaGolfCourse },
    { id: 4, title: "360 Zoo", imgSrc: dha360Zoo },
    { id: 5, title: "Vet Hospital", imgSrc: dhaVetHospital },
    { id: 6, title: "Rescue 1122", imgSrc: dhaRescue1122 },
    { id: 7, title: "Nursery", imgSrc: dhaNursery },
    { id: 8, title: "Mosque", imgSrc: dhaMosque },
    { id: 9, title: "Entertainment", imgSrc: dhaEntertainment },
    { id: 10, title: "Sports", imgSrc: dhaSports },
    { id: 11, title: "Parks", imgSrc: dhaParks },
    { id: 12, title: "School System", imgSrc: dhaSchoolSystem },
    { id: 13, title: "Sectors", imgSrc: dhaSectors },
    { id: 14, title: "Shopping Arcade", imgSrc: dhaShoppingArcade },
    { id: 15, title: "Monuments", imgSrc: dhaMonuments },
    { id: 16, title: "Askari Housing - III", imgSrc: dhaAskariHousing3 },
    { id: 17, title: "DHA Villas Community", imgSrc: dhaDHAVillasCommunity },
    { id: 18, title: "Villas Commercial Center", imgSrc: dhaVillasCommercialCenter },
    { id: 19, title: "Energization of Sectors", imgSrc: dhaEnergizationOfSectors },
    { id: 20, title: "AM 99 Hospital", imgSrc: dhaAM99Hospital },
    { id: 21, title: "Sewerage Treatment Plant", imgSrc: dhaSewerageTreatmentPlant },
    { id: 22, title: "Centre Business Square", imgSrc: dhaCentreBusinessSquare },
    { id: 23, title: "Defence Orchard", imgSrc: dhaDefenceOrchard },
    { id: 24, title: "Residence Facilitation Center", imgSrc: dhaResidenceFacilitationCenter },
    { id: 25, title: "Fuel Station", imgSrc: dhaFuelStation },
    { id: 26, title: "Jabeen Arcades", imgSrc: dhaJabeenArcades },
    { id: 27, title: "Miwaki Forest", imgSrc: dhaMiwakiForest },
    { id: 28, title: "Pakistan Square", imgSrc: dhaPakistanSquare },
    { id: 29, title: "Main Boulevards", imgSrc: dhaMainBoulevards },
    { id: 30, title: "Road Infrastructure", imgSrc: dhaRoadInfrastructure }
  ];
  const dhaDevelopingProjects = [
    { id: 1, title: "Business Hub", imgSrc: dhaBusinessHub },
    { id: 2, title: "Bodla Homes", imgSrc: dhabodlaHomes },
    { id: 3, title: "One Destination", imgSrc: dhaOneDestination },
    { id: 4, title: "Golf View Rumanza", imgSrc: dhaGolfViewRumanza },
    { id: 5, title: "DHA Head Office", imgSrc: dhaHeadOffice },
    { id: 6, title: "Serene Tower", imgSrc: dhaSereneTower },
    { id: 7, title: "Mango Museum", imgSrc: dhaMangoMuseum },
    { id: 8, title: "DHA Education City", imgSrc: dhaEducationCity },
    { id: 9, title: "Medical/Health Care City - AM99", imgSrc: dhaMedicalCityAM99 },
    { id: 10, title: "BOULEVARD HEIGHTS", imgSrc: dhaBoulevardHeights },
    { id: 11, title: "Down Town Rumanza", imgSrc: dhaDowntownRumanza },
  ];
  const dhaUpcomingProjects = [
    { id: 1, title: "Park", imgSrc: dhaPark },
    { id: 2, title: "Nishat Group of Schools Colleges", imgSrc: dhaNishatSchoolsColleges },
    { id: 3, title: "Mega Mall", imgSrc: dhaMegaMall },
    { id: 4, title: "Fast University", imgSrc: dhaFastUniversity },
    { id: 5, title: "Hilton Double Tree", imgSrc: dhaHiltonDoubleTree },
    { id: 6, title: "Bavylon", imgSrc: dhaBavylon },
    { id: 7, title: "Mall of Central Square", imgSrc: dhaMallOfCentralSquare },
    { id: 8, title: "DHA Community Club", imgSrc: dhaCommunityClub },
    { id: 9, title: "The Punjab Group of schools & colleges", imgSrc: dhaPunjabGroupSchoolsColleges },
    { id: 10, title: "NADRA Regional Office", imgSrc: dhaNadraRegionalOffice },
    { id: 11, title: "7 Central Multan", imgSrc: dha7CentralMultan },
    { id: 12, title: "01 Boulevard", imgSrc: dha01Boulevard }
  ];

  return (
    <>
      <div className='dhaMultanBanner'>
        <Image src={colaboration} alt='' />
      </div>
      <div className="trustedAdvisors">
        <section className="overlay">
          <Container>
            <Row>
              <Col xs={12} md={9}>
                <h3>Bodla Group & <span>DHA Multan</span> </h3>
                <h6>We Work Together to Serve You.</h6>
              </Col>
              <Col xs={12} md={3} className='text-end'>
              <BodlaButton text="Show Your Work!" icon={<Icons name="rightArrow" />} variant="primary" link="/Contact" />
              </Col>
            </Row>
          </Container></section>
      </div>
      <section>

        <Container>
          <Tabs defaultActiveKey="Developed" id="dhaMultan" className="mb-3">
            <Tab eventKey="Developed" title="Developed Projects">
              <Row className='gy-4 justify-content-center'>
                {dhaDevelopedProjects.map((card, index) => (
                  <Col key={card.id} xs={6} md={3}>
                    <Card
                      className="h-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      data-aos-duration="800"
                    >
                      <div className='card-thumb-img'>
                        <Image src={card.imgSrc} alt={card.title} />
                      </div>
                      <Card.Body>
                        <div className='dha-logo'><Image src={dhalogo} alt="" /></div>
                        <h6>{card.title}</h6>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="Developing" title="Developing Projects">
              <Row className='gy-4 justify-content-center'>
                {dhaDevelopingProjects.map((card, index) => (
                  <Col key={card.id} xs={6} md={3}>
                    <Card
                      className="h-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      data-aos-duration="800"
                    >
                      <div className='card-thumb-img'>
                        <Image src={card.imgSrc} alt={card.title} />
                      </div>
                      <Card.Body>
                        <div className='dha-logo'><Image src={dhalogo} alt="" /></div>
                        <h6>{card.title}</h6>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="Upcoming" title="Upcoming Projects">
              <Row className='gy-4 justify-content-center'>
                {dhaUpcomingProjects.map((card, index) => (
                  <Col key={card.id} xs={6} md={3}>
                    <Card
                      className="h-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      data-aos-duration="800"
                    >
                      <div className='card-thumb-img'>
                        <Image src={card.imgSrc} alt={card.title} />
                      </div>
                      <Card.Body>
                        <div className='dha-logo'><Image src={dhalogo} alt="" /></div>
                        <h6>{card.title}</h6>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="Rumanza" title="Rumanza">
              <Row className='gy-4 justify-content-center p-4 rumanza'>
                <Rumanza/>
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </section>
    </>
  );
};

export default DHAMultan;