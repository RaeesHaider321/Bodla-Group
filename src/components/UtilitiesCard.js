import { Card } from "react-bootstrap";
import Icons from "./Icon";
import { Link } from 'react-router-dom';

function UtilitiesCard({ title, icon, link }) {
    return (
        <Card className="utilitiesCard">
            {/* <a href={link}> */}
            <Link to={link}>
                <Card.Body className="d-inline-flex align-items-center">
                <span className="service-icon">{typeof icon === "string" ? <Icons name={icon} /> : icon}</span>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                </Link>
            {/* </a> */}
        </Card>
    );
}

export default UtilitiesCard;
