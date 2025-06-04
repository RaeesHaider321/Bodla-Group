import { useParams } from 'react-router-dom';
import { Container, Image, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Event from '../images/bHomes.jpg';

// Sample gallery images data
const galleryImages = [
    {
        id: 1,
        title: "Conference Hall",
        image: Event,
        description: "Our main conference hall during the annual event",
        slug: "conference-hall",
        date: "June 15, 2023",
        location: "Main Auditorium"
    },
    {
        id: 2,
        title: "Networking Session",
        image: Event,
        description: "Attendees networking during the break",
        slug: "networking-session",
        date: "June 15, 2023",
        location: "Lobby Area"
    },
    {
        id: 3,
        title: "Keynote Speaker",
        image: Event,
        description: "Our keynote speaker delivering the presentation",
        slug: "keynote-speaker",
        date: "June 16, 2023",
        location: "Main Stage"
    },
    {
        id: 4,
        title: "Product Demo",
        image: Event,
        description: "Demonstration of our latest product",
        slug: "product-demo",
        date: "June 16, 2023",
        location: "Exhibition Hall"
    },
    {
        id: 5,
        title: "Award Ceremony",
        image: Event,
        description: "Annual award ceremony for top performers",
        slug: "award-ceremony",
        date: "June 17, 2023",
        location: "Grand Ballroom"
    },
    {
        id: 6,
        title: "Closing Remarks",
        image: Event,
        description: "CEO giving closing remarks",
        slug: "closing-remarks",
        date: "June 17, 2023",
        location: "Main Stage"
    }
];

export default function EventDetail() {
    const { eventTitle } = useParams();
    const navigate = useNavigate();

    // Find the event with matching slug
    const event = galleryImages.find(e => e.slug === eventTitle);

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

            <h2 className="mb-4">Event Gallery</h2>
            
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {galleryImages.map((image) => (
                    <Col key={image.id}>
                        <Card className="h-100">
                            <Image 
                                src={image.image} 
                                fluid 
                                className="card-img-top"
                                alt={image.title}
                            />
                            <Card.Body>
                                <Card.Title>{image.title}</Card.Title>
                                <Card.Text>{image.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}