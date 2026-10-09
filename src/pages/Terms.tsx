import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';

const CONTACT_EMAIL = 'contact@vanguardtechops.com';

const Terms = () => (
  <LegalPage
    title="Terms & Conditions"
    description="Legal notice and terms of use for the Vanguard Tech Ops website."
    lastUpdated="9 October 2026"
    intro={
      <p>
        These terms govern your use of vanguardtechops.com. By using the site, you accept them. If you do not agree,
        please do not use the site.
      </p>
    }
    sections={[
      {
        title: 'Legal notice (Mentions légales)',
        body: (
          <>
            <p>
              <strong>Publisher:</strong> Yassine Sabhi, independent freelancer operating under the name Vanguard Tech Ops,
              based in France. The activity is not yet registered as a business; registration details will be added here
              once available.
            </p>
            <p><strong>Contact:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
            <p><strong>Publication director:</strong> Yassine Sabhi</p>
            <p>
              <strong>Website host:</strong> GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States
              (<a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a>)
            </p>
            <p>
              <strong>Contact form processing:</strong> Vercel, Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States
              (<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>)
            </p>
          </>
        ),
      },
      {
        title: 'Purpose of the website',
        body: (
          <p>
            This website presents the services offered by Vanguard Tech Ops: cloud and virtualization, web and e-commerce
            development, AI and automation, Shopify and WordPress development, and graphic and web design. The information on
            the site is for general purposes and is not a binding offer. Any project work is governed by a separate quote or
            agreement made with each client.
          </p>
        ),
      },
      {
        title: 'Intellectual property',
        body: (
          <>
            <p>
              The content of this site (texts, logo, design, images and videos) belongs to Yassine Sabhi unless stated
              otherwise, and is protected by intellectual property law. You may not copy, reproduce or reuse it without
              written permission.
            </p>
            <p>
              Third-party names and logos shown on the site (such as AWS, Microsoft Azure, Shopify, WordPress, GitHub, Google
              Gemini and Claude) belong to their respective owners. They are shown only to indicate the technologies we work
              with and do not imply any partnership or endorsement.
            </p>
          </>
        ),
      },
      {
        title: 'Using the site',
        body: (
          <>
            <p>You agree not to:</p>
            <ul>
              <li>use the site for any unlawful purpose;</li>
              <li>try to gain unauthorised access to the site or the systems behind it, or disrupt how it works;</li>
              <li>use the contact form to send spam, advertising or harmful content.</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Contact form',
        body: (
          <p>
            When you use the contact form, please give accurate information and avoid sending passwords or other
            confidential data. How we handle your details is explained in our <Link to="/privacy">Privacy Policy</Link>.
          </p>
        ),
      },
      {
        title: 'Accuracy and availability',
        body: (
          <p>
            We do our best to keep the information on this site accurate and up to date, but we cannot guarantee it is
            complete or free of errors. The site may be temporarily unavailable, for example during maintenance or because of
            our hosting providers.
          </p>
        ),
      },
      {
        title: 'Liability',
        body: (
          <p>
            To the extent permitted by law, we are not liable for indirect damage resulting from the use of this site or
            from the inability to use it. Nothing in these terms limits liability that cannot be limited under French law.
          </p>
        ),
      },
      {
        title: 'Links to other websites',
        body: (
          <p>
            The site may contain links to other websites. We do not control them and are not responsible for their content
            or their privacy practices.
          </p>
        ),
      },
      {
        title: 'Personal data and cookies',
        body: (
          <p>
            Our <Link to="/privacy">Privacy Policy</Link> explains what personal data we collect, how cookies are used, and
            your rights.
          </p>
        ),
      },
      {
        title: 'Changes to these terms',
        body: <p>We may update these terms at any time. The date at the top shows the latest version.</p>,
      },
      {
        title: 'Governing law',
        body: (
          <p>
            These terms are governed by French law. In case of a dispute, we will first try to find an amicable solution.
            Failing that, the competent French courts will have jurisdiction, without affecting any protections you have as
            a consumer under the law of your country of residence.
          </p>
        ),
      },
    ]}
  />
);

export default Terms;
