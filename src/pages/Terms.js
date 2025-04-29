import React from 'react';
import { Container, Accordion, Badge } from 'react-bootstrap';
import Icons from "../components/Icon";
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <Container className='terms'>
            <div className="text-center mb-5">
                <h1>Terms and <span>Conditions</span></h1>
                <p className="text-muted">
                    Last Updated: {new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
                <Badge bg="warning" text="dark" className="mb-3 p-2">
                    Please read these terms carefully before using our service
                </Badge>
            </div>

            <article className="mb-5">
                <h2 className="mb-3 border-bottom pb-2">1. Introduction</h2>
                <p>
                    Welcome to our website. These Terms and Conditions govern your use of our website and services.
                    By accessing or using our service, you agree to be bound by these terms. If you disagree with any
                    part of the terms, you may not access the service.
                </p>
            </article>

            <article className="mb-5">
                <h2 className="mb-3 border-bottom pb-2">2. User <span>Responsibilities</span></h2>
                <p>When using our services, you agree to:</p>
                <ul className='check-list mb-3'>
                    <li><Icons name="check" />Provide accurate and complete information when required</li>
                    <li><Icons name="check" />Maintain the confidentiality of your account credentials</li>
                    <li><Icons name="check" />Not engage in any illegal or unauthorized activities</li>
                    <li><Icons name="check" />Not interfere with or disrupt the service or servers</li>
                </ul>
                <p>
                    Violation of these responsibilities may result in termination of your access to our services.
                </p>
            </article>

            <article className="mb-5">
                <h2 className="mb-3 border-bottom pb-2">3. Intellectual <span>Property</span></h2>
                <p>
                    The service and its original content, features, and functionality are and will remain the exclusive
                    property of our company and its licensors. Our trademarks and trade dress may not be used in connection
                    with any product or service without our prior written consent.
                </p>
            </article>

            <article className="mb-5">
                <h2 className="mb-3 border-bottom pb-2">4. Payments and <span>Subscriptions</span></h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Payment Terms</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                All payments are processed through secure payment gateways. You agree to provide current,
                                complete, and accurate purchase and account information for all purchases made via the service.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Subscription Renewals</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Unless you cancel before renewal, your subscription will automatically renew under the exact
                                same conditions unless you cancel it or we cancel it. You may cancel your subscription at any time.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Refund Policy</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                We offer refunds within 30 days of purchase under certain conditions. Please contact our support
                                team for refund requests.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </article>

            <article className="mb-5">
                <h2 className="mb-3 border-bottom pb-2">5. Limitation of <span>Liability</span></h2>
                <p>
                    In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages,
                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className='check-list'>
                    <li><Icons name="check" />Your access to or use of or inability to access or use the service</li>
                    <li><Icons name="check" />Any conduct or content of any third party on the service</li>
                    <li><Icons name="check" />Any unauthorized access, use or alteration of your transmissions or content</li>
                </ul>
            </article>

            <article className="mb-5">
                <h2 className="mb-3 border-bottom pb-2">6. Termination</h2>
                <p>
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                    whatsoever, including without limitation if you breach these Terms and Conditions.
                </p>
                <p>
                    Upon termination, your right to use the service will immediately cease. All provisions of the Terms which
                    by their nature should survive termination shall survive termination.
                </p>
            </article>

            <article className="mb-5">
                <h2 className="mb-3 border-bottom pb-2">7. Governing Law</h2>
                <p>
                    These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without
                    regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms
                    will not be considered a waiver of those rights.
                </p>
            </article>

            <article className="mb-5">
                <h2 className="mb-3 border-bottom pb-2">8. Changes to Terms</h2>
                <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will
                    provide notice of any changes by posting the new Terms on this page and updating the "Last Updated" date.
                </p>
                <p>
                    By continuing to access or use our service after those revisions become effective, you agree to be bound
                    by the revised terms.
                </p>
            </article>

            <article className="mb-4">
                <h2 className="mb-3 border-bottom pb-2">9. Contact <span>Information</span></h2>
                <p>
                    If you have any questions about these Terms, please contact us:
                </p>
                <address>
                    <strong>Email:</strong> <Link to="mailto:info@bodlagroup.com">info@bodlagroup.com</Link><br />
                    <strong>Phone:</strong> <Link to="tel:06111126352">061-1111-26352</Link><br />
                    <strong>Address:</strong> Business Hub, Central Square, Sector K Phase I DHA Multan
                </address>
            </article>
        </Container>
    );
};

export default TermsAndConditions;