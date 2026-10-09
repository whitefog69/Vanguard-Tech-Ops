import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';
import { openCookieSettings } from '@/src/lib/consent';

const CONTACT_EMAIL = 'contact@vanguardtechops.com';

const Privacy = () => (
  <LegalPage
    title="Privacy Policy"
    description="How Vanguard Tech Ops collects, uses and protects your personal data, and the rights you have over it."
    lastUpdated="9 October 2026"
    intro={
      <p>
        This policy explains what personal data is collected when you visit vanguardtechops.com or contact us,
        why it is collected, and the rights you have under the EU General Data Protection Regulation (GDPR) and
        the French Data Protection Act (loi Informatique et Libertés).
      </p>
    }
    sections={[
      {
        title: 'Who is responsible for your data',
        body: (
          <p>
            The data controller is <strong>Yassine Sabhi</strong>, an independent freelancer based in France,
            operating under the name Vanguard Tech Ops. For any question about your data, write to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        ),
      },
      {
        title: 'What data we collect',
        body: (
          <>
            <p><strong>When you use the contact form:</strong> your name, email address, the service you are interested in, and your message.</p>
            <p>
              <strong>When you visit the site:</strong> like any website, our hosting providers automatically receive technical data
              such as your IP address, browser type and the pages requested. This is used to deliver the site and keep it secure.
            </p>
            <p>
              <strong>Your cookie choice:</strong> we store your cookie preference in your browser so we don't ask you again on every visit.
            </p>
            <p>
              <strong>Analytics (only with your consent):</strong> if you accept analytics cookies, information about how you use the
              site (pages visited, time on page, device type) may be collected. See section 9.
            </p>
            <p>We do not collect sensitive data, and we never sell your data.</p>
          </>
        ),
      },
      {
        title: 'Why we use it and on what legal basis',
        body: (
          <ul>
            <li><strong>Replying to your request and preparing a quote</strong>: steps taken at your request before a possible contract (GDPR art. 6(1)(b)).</li>
            <li><strong>Sending you a confirmation email</strong> when you use the contact form: same basis.</li>
            <li><strong>Running and securing the website</strong>: our legitimate interest in providing a working, secure site (art. 6(1)(f)).</li>
            <li><strong>Analytics</strong>: your consent (art. 6(1)(a)), which you can withdraw at any time.</li>
            <li><strong>Keeping records required by law</strong> if you become a client, such as invoices: legal obligation (art. 6(1)(c)).</li>
          </ul>
        ),
      },
      {
        title: 'Who receives your data',
        body: (
          <>
            <p>Your data is only accessed by Yassine Sabhi and by the service providers needed to run the site:</p>
            <ul>
              <li><strong>GitHub, Inc.</strong> (GitHub Pages): hosts the website.</li>
              <li><strong>Vercel, Inc.</strong>: processes contact form submissions.</li>
              <li><strong>Zoho Corporation</strong>: email service used to receive your message and send the confirmation email.</li>
            </ul>
            <p>These providers act on our behalf and may not use your data for their own purposes.</p>
          </>
        ),
      },
      {
        title: 'Transfers outside the European Union',
        body: (
          <p>
            GitHub and Vercel are based in the United States, so some data may be processed there. These transfers rely on
            safeguards recognised by the European Commission, such as the EU–U.S. Data Privacy Framework or Standard
            Contractual Clauses.
          </p>
        ),
      },
      {
        title: 'How long we keep it',
        body: (
          <ul>
            <li><strong>Contact form messages</strong>: 1 year after our last exchange, then deleted.</li>
            <li><strong>If you become a client</strong>: data needed for the contract and invoices is kept for as long as the law requires (10 years for accounting records in France).</li>
            <li><strong>Technical logs</strong>: kept by our hosting providers for a limited time, according to their own policies.</li>
            <li><strong>Your cookie choice</strong>: 6 months, after which we ask again.</li>
          </ul>
        ),
      },
      {
        title: 'Your rights',
        body: (
          <>
            <p>You have the right to:</p>
            <ul>
              <li>access the data we hold about you and get a copy;</li>
              <li>have it corrected or deleted;</li>
              <li>restrict or object to its use;</li>
              <li>receive it in a portable format;</li>
              <li>withdraw your consent at any time, without affecting what was done before;</li>
              <li>give instructions on what happens to your data after your death (a right specific to French law).</li>
            </ul>
            <p>
              To use these rights, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will reply within one month.
              If you think your rights are not respected, you can file a complaint with the French data protection
              authority, the CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
            </p>
          </>
        ),
      },
      {
        title: 'Security',
        body: (
          <p>
            The site is served only over an encrypted connection (HTTPS), and contact form data is sent over an encrypted
            connection. Access to your data is limited to what is needed to answer you.
          </p>
        ),
      },
      {
        title: 'Cookies and similar technologies',
        body: (
          <>
            <p>
              <strong>Strictly necessary:</strong> we store your cookie choice in your browser's local storage
              (name: <code>vto-consent</code>, kept for 6 months). This does not require consent.
            </p>
            <p>
              <strong>Analytics:</strong> no analytics tool is active at the moment. If we add one, it will only run if you
              have accepted analytics cookies, and this policy will be updated to name the provider.
            </p>
            <p>
              Fonts are served from our own website, so no data is sent to third parties when they load. We do not use
              advertising cookies.
            </p>
            <p>
              You can change your choice at any time:{' '}
              <button onClick={openCookieSettings} className="text-primary underline underline-offset-2 hover:text-white">
                open cookie settings
              </button>.
            </p>
          </>
        ),
      },
      {
        title: 'Children',
        body: <p>This site is intended for businesses and adults. We do not knowingly collect data from children under 15.</p>,
      },
      {
        title: 'Changes to this policy',
        body: (
          <p>
            We may update this policy, for example when adding a new service provider. The date at the top shows the latest
            version. See also our <Link to="/terms">Terms &amp; Conditions</Link>.
          </p>
        ),
      },
    ]}
  />
);

export default Privacy;
