import React, { useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PrivacyPolicy = () => {
    useEffect(() => {
        document.title = "Privacy Policy - Bodla Builders";
    }, []);
    const personalInformation = [
        {
            title: "Personal Identification Information",
            description: "Details that identify you, such as your full name, email address, phone number, postal address, date of birth, CNIC/passport number or other government-issued ID, and any other contact information. If you create an account, we may also collect login credentials like username and password."
        },
        {
            title: "Biometric Information",
            description: "Biometric identifiers or data you may provide for identity verification or security purposes. For example, this can include facial images (photos), fingerprints, or similar biometric data if you choose to use features like biometric login or identity verification within our Services. (We only collect such data with your knowledge – for instance, if you opt into a feature that requires it.)"
        },
        {
            title: "Financial and Transactional Information",
            description: "Information related to your financial dealings with us. This may include your payment details (such as credit/debit card numbers or bank account information), billing address, transaction history, and records of purchases or services (e.g., property bookings, payments, or investments) that you make through Bodla Builders."
        },
        {
            title: "Location Data",
            description: "Information about your geographic location. For example, we may collect precise GPS location data from your mobile device (with your permission through your device settings) to provide location-based services or information (such as showing properties near you). We may also derive approximate location from your IP address. You can control our access to precise location information via your smartphone's privacy settings."
        },
        {
            title: "Device and Technical Information",
            description: "Details about the device and technology you use to access our Services. This includes device type (mobile, tablet, computer), operating system and version, browser type and language, device identifiers or unique IDs, mobile network information, IP address, and crash logs. We also collect technical data about how your device interacts with our Services, such as time and date of access, pages viewed, and referral URLs."
        },
        {
            title: "Usage and Behavioural Data",
            description: "Information on how you use our website and apps. This covers your interactions and activities within the Services – for example, features you use, pages or screens you view, links you click, search queries you make, content you browse, and the time spent on different parts of our Services. We may also record mouse clicks, taps, scrolls, and other usage patterns to better understand user behaviour and preferences."
        },
        {
            title: "Communication Records",
            description: "Copies of and metadata about your communications with us. If you contact us by email, phone, through in-app chat, or via any other method, we may keep records of the correspondence. This could include inquiries, support requests, and feedback. Phone calls to our customer service lines may be recorded and/or monitored for quality assurance and training purposes. We also retain chat transcripts and voicemails when you communicate with us."
        },
        {
            title: "Cookies and Similar Technologies",
            description: "When you use our website (and possibly within our apps), we use cookies, pixels, and similar tracking technologies to collect data about your browsing activities. These technologies help us remember your preferences, understand how you navigate through our content, and personalize your experience. They may collect information such as your browser type, pages you visited, selections you made, and other browsing metadata. (For more details, see our Cookies Policy if available, or note that by using our Services you agree to our use of cookies and similar technologies for the purposes described in this Policy.)"
        },
        {
            title: "Information from Third Parties",
            description: "We may also obtain information about you from other sources. For example, if you choose to log in via a third-party platform (such as using a social media account or an authentication service), we might receive certain profile information from that third party. Additionally, we could receive demographic or interest data about you from marketing partners, public databases, real estate industry partners (such as DHA or other developers), or authorities. Any data we receive from third parties will be handled by us in accordance with this Privacy Policy."
        },
        {
            title: "Any Other Information You Provide",
            description: "You may voluntarily provide us with additional information. This could be when filling out forms on our app or website (such as inquiry forms, surveys, contest entries, or registration forms), posting content (like submitting reviews, comments, or pictures), or any other time you choose to send us information. We collect and store all such information that you share with us, without any limitation on its nature or format."
        }
    ];
    const usagePurposes = [
        {
            title: "Providing and Improving Services",
            description: "To deliver the features, products, and services you request, and to ensure our website and mobile apps function correctly. For instance, we use your information to display relevant property listings, process your account registration, facilitate searches, and enable interactive features. We also analyze usage information to fix issues, enhance performance, and improve the quality and design of our Services over time."
        },
        {
            title: "User Account Management",
            description: "To create and manage user accounts or profiles on our platform. This includes using your information to verify your identity when you register or log in (including biometric verification if you opt to use it), authenticate your access to the Services, and provide you with customer support. We may use your contact information to send account-related notifications (for example, confirmations, invoices, technical notices, updates, security alerts, and administrative messages)."
        },
        {
            title: "Processing Transactions",
            description: "To handle transactions and requests that you initiate. For example, if you purchase a service, book a property, or make a payment through our platform, we will use your financial and personal information to process the payment, execute the transaction, and maintain appropriate records. We also use transactional data to manage billing, invoicing, refunds, and to confirm completion of transactions."
        },
        {
            title: "Personalization",
            description: "To personalize and tailor your experience with Bodla Builders. We may use your data (such as past behaviour, location, or preferences) to show you content, recommendations, properties, or advertisements that are more relevant to you. Personalization can include customizing what you see on our app/website home screen, suggesting services you might be interested in, or remembering your preferences (like language or location settings)."
        },
        {
            title: "Communication",
            description: "To communicate with you about your account or any services you use. This includes responding to your inquiries or support requests, sending you updates, or information related to services you've requested, and contacting you with communications necessary for the operation of the Services (e.g. confirming your registration, sending password reset emails, notifying about changes to our terms or policies). These communications are typically not promotional in nature but are essential to our service relationship with you."
        },
        {
            title: "Marketing and Promotional Activities",
            description: "To inform you about new offers, promotions, events, products, or services that we or our partners are providing. We may use your contact information to send newsletters, promotional emails or SMS, special offers, and general information about our projects or developments that we think may be of interest to you. We may also use your data to tailor marketing messages or advertisements so that they are relevant to your interests (for example, showing you ads for properties in a location you've shown interest in). If you prefer not to receive marketing emails or texts, you can follow the opt-out instructions provided in those communications."
        },
        {
            title: "Analytics and Development",
            description: "To analyse how our users interact with our Services and to perform research and development. We review usage and demographic data to understand trends, user behaviour, and preferences. This analysis helps us to troubleshoot problems, improve the user experience, develop new features, and make informed decisions about business strategies. We may also use data analytics to test and evaluate the effectiveness of our marketing campaigns or new product offerings."
        },
        {
            title: "Safety and Security",
            description: "To maintain the safety, security, and integrity of our platform. Information we collect is used to monitor for fraudulent, suspicious, or unlawful activity on our apps and website. We might use data (like device information or account activity) to verify user identities, detect and prevent fraud or abuse, debug to identify and fix errors, and protect against unauthorized transactions or access. We also enforce our Terms of Service and other usage policies by using data to investigate potential violations and take appropriate action."
        },
        {
            title: "Legal Compliance and Enforcement",
            description: "To comply with our legal obligations and protect our rights. For instance, we may process personal data to fulfill reporting or auditing requirements under the law, to respond to valid legal requests such as court orders or subpoenas, or to satisfy government reporting obligations. Additionally, we may use and disclose information as necessary to enforce our agreements (such as our Terms of Service), to collect debts owed, to prevent harm to persons or property, and to resolve or defend legal claims."
        },
        {
            title: "Business Operations and General Administration",
            description: "To manage our everyday business needs. This includes using data for activities like staff training and quality control (for example, analysing customer service communications to improve our responses), performing audits and financial analysis, forecasting, and planning. We may also use information for corporate governance, reporting, and operational matters."
        },
        {
            title: "Other Purposes",
            description: "We may use your information for any other purpose that is disclosed to you at the time of collection or for which you provide consent. In the event we need to use your personal data in a new way not described above, we will let you know as required. In all cases, we use your information as permitted by applicable law and in accordance with this Privacy Policy."
        }
    ];
    const dataSharingParties = [
        {
            title: "Within Our Corporate Group",
            description: "We may share your information with other companies that are part of the Bodla Group (for example, our parent company, subsidiaries, affiliates, and other related entities). Employees and internal teams of Bodla Builders will have access to your information on a need-to-know basis, so they can perform their jobs and help deliver or improve our Services. All personnel are required to handle information in a manner consistent with this Privacy Policy."
        },
        {
            title: "Service Providers and Vendors",
            description: "We disclose personal data to third-party service providers who perform services and functions on our behalf. These partners assist us in operating our business and the Services – for instance, IT and hosting providers who maintain our app, website, and databases; payment processors who handle transaction payments securely; analytics and advertising partners who help us understand usage or run marketing campaigns; customer support tools that help manage inquiries; and other vendors like SMS/email delivery services, security service providers, etc. We only share the information necessary for these providers to carry out their services, and we contractually require them to protect your data and use it only for the purposes we specify."
        },
        {
            title: "Business Partners and Collaborators",
            description: "We might share your information with trusted business partners or co-developers in the real estate industry. For example, if we are jointly offering a product or promotion with another company or working with developers (such as DHA or other housing schemes) to fulfill your requests, we may need to share relevant information with them. Any such partners will be required to use your data in accordance with applicable privacy obligations. We may also share your details (such as your name or contact info) with third parties at your direction – for instance, if you ask us to connect you with a particular real estate service or external agent."
        },
        {
            title: "Legal Requirements and Protection",
            description: "We may disclose your information if we believe in good faith that such action is necessary to comply with a legal obligation or request. This includes responding to lawful requests by public authorities, court orders, subpoenas, or other legal processes. We may also share information when we believe it is necessary to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the safety of any person, violations of our Terms of Service or other agreements, or as evidence in litigation in which we are involved. In doing so, we will only provide the information that is required or appropriate in each circumstance."
        },
        {
            title: "Business Transfers (Mergers or Acquisitions)",
            description: "If Bodla Builders is involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, sale of company assets, or transition of service to another provider, your information may be transferred as part of such a transaction. In the event of such a corporate change, we will ensure that the successor entity is bound by terms substantially consistent with this Privacy Policy in how they handle your personal data. We will notify you (for example, via a notice on our website or within the app) of any change in ownership or uses of your personal data as a result of a business transition."
        },
        {
            title: "With Your Consent or At Your Direction",
            description: "Apart from the cases listed above, we will share your personal information with others outside of Bodla Builders only with your consent or at your direction. For instance, if you explicitly agree that we can share your information with a third-party for a particular purpose, or if you use our Services to intentionally interact with or direct us to share information with a third-party platform (such as sharing content to a social network or using an API integration), then we will share information in those instances."
        }
    ];
    return (
        <Container className="privacy-policy-container pt-3">
            <div className="privacy-policy-content">
                <article className="policy-section">
                    <h2>Introduction</h2>
                    <p>
                        Bodla Builders ("Bodla Builders", "we", "our", or "us") is committed to protecting your privacy.
                        This Privacy Policy describes how we collect, use, share, and safeguard your personal information
                        when you use our mobile applications (on iOS and Android) and our website (collectively, the "Services").
                        By accessing or using our Services, you agree to the collection and use of your information as described
                        in this Privacy Policy. If you do not agree with our practices, please do not use the Services.
                    </p>
                    <p>
                        This Privacy Policy applies to all users of Bodla Builders' Services and covers all information collected
                        through your interaction with our mobile apps and website. It does not apply to any third-party services
                        or websites that may be linked from our Services (see Third-Party Links and Services below). We may update
                        this policy from time to time and will post any changes on this page. We encourage you to review this
                        policy periodically for any updates.
                    </p>
                </article>

                <article className="policy-section">
                    <h2>Information <span>We Collect</span></h2>
                    <p>
                        We collect a wide range of personal, technical, transactional, and behavioural information from you
                        (and your devices) without limitation when you use our Services. This includes, but is not limited to,
                        the following:
                    </p>
                    <ul className='policy mb-3'>
                        {personalInformation.map((item, index) => (
                            <li key={index}>
                                <strong>{item.title}:</strong> {item.description}
                            </li>
                        ))}
                    </ul>
                    <p>
                        <strong>Note:</strong> In all cases, the provision of personal information is generally voluntary on your part.
                        However, certain Services (for example, creating an account or making a transaction) may require you to provide
                        specific data. If you choose not to provide required information, you may not be able to use some features of
                        our Services.
                    </p>
                </article>

                <article className="policy-section">
                    <h2>How We Use Your Information</h2>
                    <p>
                        Bodla Builders uses the collected information to operate, maintain, and improve our Services, as well as to
                        support our business functions. We process personal data for a variety of business and operational purposes,
                        including:
                    </p>
                    <ul className='policy mb-3'>
                        {usagePurposes.map((item, index) => (
                            <li key={index}>
                                <strong>{item.title}:</strong> {item.description}
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="policy-section">
                    <h2>Data Sharing and Disclosure</h2>
                    <p>
                        We understand the importance of keeping your personal information private, and we only share your data in certain
                        circumstances. Bodla Builders may share or disclose the information we collect from you with third parties as needed
                        to run our business, provide our Services, and comply with legal requirements. Such sharing may include:
                    </p>
                    <ul className='policy mb-3'>
                        {dataSharingParties.map((item, index) => (
                            <li key={index}>
                                <strong>{item.title}:</strong> {item.description}
                            </li>
                        ))}
                    </ul>
                    <p>
                        We do not sell your personal information to third parties for their own marketing purposes. In all cases of sharing,
                        we strive to only disclose what is necessary for the intended purpose and to ensure the parties who receive the
                        information are obligated to keep it secure and confidential.
                    </p>
                </article>

                <article className="policy-section">
                    <h2>International Data Transfers</h2>
                    <p>
                        Bodla Builders is based in Pakistan, but the data we collect may be processed, stored, and transferred internationally.
                        In order to operate our business and provide the Services, your personal information might be transferred to – and
                        maintained on – servers or databases located outside of your state, province, or country, including in countries that
                        may have different data protection standards than those that apply in your home jurisdiction.
                    </p>
                    <p>
                        In particular, we and our service providers may process information in multiple countries (for example, if we use a
                        cloud hosting provider with servers globally or engage an international partner). By using our Services and providing
                        your information, you understand and consent that your data may be transferred to and stored in other countries. In
                        all such cases, Bodla Builders will take appropriate measures to ensure your personal data remains protected. We
                        implement reasonable safeguards designed to protect your privacy when information is transferred across borders. These
                        may include contractual clauses with our service providers to ensure they uphold privacy protections, as well as
                        adherence to the principles outlined in this Privacy Policy regardless of where the data is processed.
                    </p>
                    <p>
                        Please note that foreign governments, courts, or law enforcement or regulatory agencies may be able to access your
                        personal data under their own laws. However, our practices regarding your personal information will continue to be
                        governed by this Privacy Policy at all times.
                    </p>
                </article>

                <article className="policy-section">
                    <h2>Data Retention</h2>
                    <p>
                        We retain your personal information for as long as it is necessary to fulfill the purposes for which it was collected,
                        or for other legitimate business purposes as permitted by law. This means we will keep your data for as long as you
                        maintain an account or ongoing relationship with us, and thereafter for as long as needed for record-keeping,
                        analytics, legal compliance, or to protect or defend our rights.
                    </p>
                    <p>
                        Bodla Builders may retain certain data for extended periods or indefinitely, at our discretion, subject to our
                        operational needs and applicable laws. For example, we might keep transaction records to comply with financial
                        regulations or preserve some information in backups or archives for fraud prevention or historical analysis. Even if
                        you cease to use our Services or deactivate your account, we may continue to store your information in an anonymized
                        or identifiable form if we believe it is necessary for our internal purposes and permitted by law.
                    </p>
                    <p>
                        We periodically review the data we hold, and when personal information is no longer required for any business or legal
                        purpose, we will securely delete it or anonymize it. Anonymization means we remove or alter data such that it can no
                        longer be linked to any individual. Please note, however, that there may be latency in removing data from our servers
                        and backup storage and we may retain data as required to comply with our legal obligations, resolve disputes, or
                        enforce our agreements.
                    </p>
                </article>

                <article className="policy-section">
                    <h2>Data Security</h2>
                    <p>
                        We take the security of your personal information seriously. Bodla Builders implements appropriate technical and
                        organizational security measures to protect your data against unauthorized access, alteration, disclosure, or
                        destruction. These measures include, for example, the use of encryption protocols to protect data transmission,
                        firewalls and intrusion detection systems to safeguard our network, and access controls to restrict access to
                        personal data on a need-to-know basis. We also train our staff about the importance of privacy and security, and
                        we regularly review our security procedures to consider new technologies and methods as appropriate.
                    </p>
                    <p>
                        Despite our efforts, please be aware that no method of electronic transmission or storage is 100% secure. We cannot
                        guarantee absolute security of your information, and any transmission of data to us is at your own risk. It is
                        important for you to also play a role in keeping your information safe. We encourage you to use strong, unique
                        passwords for your account, to never share your login credentials with others, and to log out of the Services when
                        you are finished using them on shared devices. If you suspect any unauthorized access to or use of your account,
                        please contact us immediately.
                    </p>
                    <p>
                        In the unfortunate event of a data breach or security incident, we will take all steps required by applicable laws
                        to notify affected users and mitigate the impact.
                    </p>
                </article>

                <article className="policy-section">
                    <h2>Children's Privacy</h2>
                    <p>
                        Our Services are not intended for individuals under the age of 18. Bodla Builders does not knowingly solicit or
                        collect personal information from children under 18 years old. If you are under 18, please do not use our mobile
                        applications or website, and do not provide us with any personal information. We encourage parents and guardians
                        to be aware of and supervise their children's online activities for their safety.
                    </p>
                    <p>
                        If we become aware that we have inadvertently collected personal data from a child under 18, we will promptly take
                        steps to delete such information from our records. If you are a parent or guardian and believe that a minor under
                        your care has provided personal information to Bodla Builders without your consent, please contact us immediately
                        (using the contact information below). We will work to remove the child's information and terminate any account
                        that the child has created, if applicable.
                    </p>
                </article>

                <article className="policy-section">
                    <h2>Third-Party Links and Services</h2>
                    <p>
                        Our Services may contain links to websites or services that are operated by third parties (for example, links to
                        property-related services, social media plug-ins, or embedded content hosted by others). In addition, some third-party
                        features or integrations in our mobile app or website might involve the third party collecting information directly
                        from you (such as an embedded map service or an analytics provider).
                    </p>
                    <p>
                        Please note that this Privacy Policy applies only to Bodla Builders' collection, use, and disclosure of information,
                        and does not extend to third parties or their websites. If you click on a third-party link or use a third-party
                        service through our platform, any personal data you provide is governed by that third party's privacy policy, not
                        ours. We do not control and are not responsible for the privacy practices of third parties. We recommend that you
                        review the privacy policies of any external sites or services you interact with to understand how they collect and
                        use your information.
                    </p>
                </article>

                <article className="policy-section">
                    <h2>Changes to this Privacy Policy</h2>
                    <p>
                        Bodla Builders may update or modify this Privacy Policy from time to time to reflect changes in our practices,
                        technologies, legal requirements, or for other operational reasons. When we make changes, we will post the updated
                        Privacy Policy on this page and update the "Last Updated" date at the top. Changes to the policy will become
                        effective immediately upon being posted, unless stated otherwise.
                    </p>
                    <p>
                        If we make any material changes that significantly affect how we handle your personal information, we may provide
                        additional notice to you (such as by posting a prominent notice on our website or within the app, or by sending an
                        email notification). However, we encourage you to periodically review this Privacy Policy to stay informed about
                        how we are protecting your information.
                    </p>
                    <p>
                        Your continued use of our Services after any changes to this Privacy Policy constitutes your acknowledgment of the
                        changes and your agreement to abide by the updated policy.
                    </p>
                </article>

                <article className="policy-section contact-section">
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions, concerns, or comments about this Privacy Policy or our privacy practices, please feel free
                        to contact us. We value your feedback and will address your inquiries as promptly as possible.
                    </p>
                    <p>
                        You can reach Bodla Builders through the following contact details:
                    </p>
                    <article className="mb-4">
                       <address>
                            <strong>Email:</strong> <Link to="mailto:info@bodlagroup.com">info@bodlagroup.com</Link><br />
                            <strong>Phone:</strong> <Link to="tel:06111126352">061-1111-26352</Link><br />
                            <strong>Address:</strong> Business Hub, Central Square, Sector K Phase I DHA Multan
                        </address>
                    </article>
                    <Alert variant="info"> <p>
                        <strong>Please do not hesitate to contact us</strong> if you need further information or assistance regarding your privacy. We are
                        here to help and answer any questions you may have about how we handle your personal data.
                    </p></Alert>
                </article>
            </div>
        </Container>
    );
};

export default PrivacyPolicy;