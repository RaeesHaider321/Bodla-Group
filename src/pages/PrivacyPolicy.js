import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import Icons from "../components/Icon";
import { Link } from 'react-router-dom';
const PrivacyPolicy = () => {
    return (
        <Container className='privacyPolicy'>
            <h1 className="text-center mb-4">Privacy <span>Policy</span></h1>
            <p className="text-muted text-center">
                Last updated: {new Date().toLocaleDateString()}
            </p>

            <article>
                <h2>Introduction</h2>
                <p>
                    We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
                    and safeguard your information when you visit our website. Please read this privacy policy carefully.
                    If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
            </article>

            <article className='mb-3'>
                <h2 >Information <span>We Collect</span></h2>
                <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Personal Data</Accordion.Header>
                        <Accordion.Body>
                            Personally identifiable information, such as your name, email address, and telephone number,
                            that you voluntarily give to us when you register with the site or when you choose to participate
                            in various activities related to the site.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Derivative Data</Accordion.Header>
                        <Accordion.Body>
                            Information our servers automatically collect when you access the site, such as your IP address,
                            browser type, operating system, access times, and the pages you have viewed directly before and
                            after accessing the site.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Cookies and Tracking Technologies</Accordion.Header>
                        <Accordion.Body>
                            We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize
                            the site and improve your experience. You can set your browser to refuse all or some browser cookies,
                            but this may affect certain functionalities of the site.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </article>

            <article className='mb-3'>
                <h2>Use of <span>Your Information</span></h2>
                <p>We may use the information we collect about you for various purposes, including to:</p>
                <ul className='check-list'>
                    <li><Icons name="check" />
                        Create and manage your account</li>
                    <li><Icons name="check" />
                        Deliver targeted advertising, coupons, newsletters, and promotions</li>
                    <li><Icons name="check" />
                        Email you regarding your account or order</li>
                    <li><Icons name="check" />
                        Enable user-to-user communications</li>
                    <li><Icons name="check" />
                        Generate a personal profile about you</li>
                    <li><Icons name="check" />
                        Increase the efficiency and operation of the site</li>
                    <li><Icons name="check" />
                        Monitor and analyze usage and trends</li>
                    <li><Icons name="check" />
                        Notify you of updates to the site</li>
                    <li><Icons name="check" />
                        Offer new products, services, and recommendations</li>
                    <li><Icons name="check" />
                        Perform other business activities as needed</li>
                </ul>
            </article>

            <article>
                <h2>Disclosure of <span>Your Information</span></h2>
                <p>
                    We may share information we have collected about you in certain situations. Your information may be
                    disclosed as follows:
                </p>
                <ul className='check-list'>
                    <li><Icons name="check" />
                        <p><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is
                            necessary to comply with the law, investigate or remedy potential violations, or protect the rights,
                            property, and safety of others.</p>
                    </li>
                    <li><Icons name="check" />
                        <p><strong>Third-Party Service Providers:</strong> We may share your information with third parties that
                            perform services for us or on our behalf.</p>
                    </li>
                    <li><Icons name="check" />
                        <p><strong>Marketing Communications:</strong> With your consent, we may share your information with third
                            parties for marketing purposes.</p>
                    </li>
                </ul>
            </article>

            <article>
                <h2>Security of <span>Your Information</span></h2>
                <p>
                    We use administrative, technical, and physical security measures to help protect your personal information.
                    While we have taken reasonable steps to secure the personal information you provide to us, please be aware
                    that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission
                    can be guaranteed against any interception or other type of misuse.
                </p>
            </article>

            <article>
                <h2>Policy <span>for Children</span></h2>
                <p>
                    We do not knowingly solicit information from or market to children under the age of 13. If you become aware
                    of any data we have collected from children under age 13, please contact us immediately.
                </p>
            </article>

            <article>
                <h2>Changes to This <span>Privacy Policy</span></h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                    Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
            </article>

            <article>
                <h2>Contact Us</h2>
                <p>
                    If you have questions or comments about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;