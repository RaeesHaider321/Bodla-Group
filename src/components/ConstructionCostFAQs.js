import { Accordion, Card, Col, Row } from "react-bootstrap";
function ConstructionCostFAQs() {
  // FAQ data array
  const faqs = [
    {
      id: "0",
      question: "What is the average timeline for house construction?",
      answer: "Timelines vary depending on the size, design, and approvals, but typically range from 8 to 12 months."
    },
    {
      id: "1",
      question: "How are construction costs estimated?",
      answer: "They are based on materials, labor, design specifications, and finishing requirements. A detailed cost estimate is usually provided before work begins."
    },
    {
      id: "2",
      question: "Can I make design changes during construction?",
      answer: "Yes, but it may affect both the cost and timeline. Always discuss possible changes with your contractor beforehand."
    },
    {
      id: "3",
      question: "What measures ensure quality during construction?",
      answer: "Reputable builders follow engineering standards, use quality materials, and conduct regular inspections to ensure durability and safety."
    },
    {
      id: "3",
      question: "Do you offer the construction of houses?",
      answer: "Yes, Maymar provides customized house construction services tailored to client needs and preferences."
    }
  ];

  return (
    <>
    <Col sm={12} md={10}>
                        <h2>Construction Cost <span>FAQs</span></h2>
                        <p>Get answers to common questions about construction costs, budgeting, and cost-saving strategies.</p>
                    </Col>
    <Accordion defaultActiveKey="0">
      {faqs.map((faq) => (
        <Accordion.Item key={faq.id} eventKey={faq.id}>
          <Accordion.Header>{faq.question}</Accordion.Header>
          <Accordion.Body>
            {faq.answer}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    </>
  );
}

export default ConstructionCostFAQs;