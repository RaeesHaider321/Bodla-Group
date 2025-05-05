import { Card } from "react-bootstrap";
import Icons from "./Icon";

function UtilitiesCard({ title, icon, link }) {
    return (
        <Card className="utilitiesCard">
            {/* <a href={link}> */}
                <Card.Body className="d-inline-flex align-items-center">
                <span className="service-icon">{typeof icon === "string" ? <Icons name={icon} /> : icon}</span>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            {/* </a> */}
        </Card>
    );
}

export default UtilitiesCard;
