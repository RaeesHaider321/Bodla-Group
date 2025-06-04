import { useParams } from 'react-router-dom';
import { Container, Image, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Event from '../images/bHomes.jpg';

const eventData = [
  {
    id: 1,
    title: "Annual Conference",
    slug: "annual-conference",
    image: Event,
    date: "June 15, 2023",
    location: "New York",
    description: "Full details about the annual conference...",
    agenda: ["9:00 AM - Registration", "10:00 AM - Keynote", "12:00 PM - Lunch"]
  },
  {
    id: 2,
    title: "Product Launch",
    slug: "product-launch",
    image: Event,
    date: "July 20, 2023",
    location: "San Francisco",
    description: "Full details about the product launch...",
    agenda: ["2:00 PM - Doors Open", "3:00 PM - Presentation", "5:00 PM - Networking"]
  }
];

export default function EventDetail() {
  const { eventTitle } = useParams();
  const navigate = useNavigate();
  
  // Find the event with matching slug
  const event = eventData.find(e => e.slug === eventTitle);

  if (!event) {
    return (
      <Container className="py-4">
        <Button variant="outline-secondary" onClick={() => navigate('/MediaCenter')} className="mb-3">
          &larr; Back to Media Center
        </Button>
        <div>Event not found</div>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Button variant="outline-secondary" onClick={() => navigate('/MediaCenter')} className="mb-3">
        &larr; Back to Media Center
      </Button>
      
      <h1>{event.title}</h1>
      <p>
        {event.date} • {event.location}
      </p>
      <Row>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Image src={event.image} fluid className="mb-4" />
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
      
      
    </Container>
  );
}