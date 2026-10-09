import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage, { LegalSection } from '../components/LegalPage';
import { openCookieSettings } from '@/src/lib/consent';
import { useLanguage } from '@/src/i18n/LanguageContext';

const CONTACT_EMAIL = 'contact@vanguardtechops.com';
const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
const cnil = <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>;
const settingsButton = (label: string) => (
  <button onClick={openCookieSettings} className="text-primary underline underline-offset-2 hover:text-white">{label}</button>
);

const en: { intro: React.ReactNode; sections: LegalSection[] } = {
  intro: (
    <p>
      This policy explains what personal data is collected when you visit vanguardtechops.com or contact us,
      why it is collected, and the rights you have under the EU General Data Protection Regulation (GDPR) and
      the French Data Protection Act (loi Informatique et Libertés).
    </p>
  ),
  sections: [
    {
      title: 'Who is responsible for your data',
      body: (
        <p>
          The data controller is <strong>Yassine Sabhi</strong>, an independent freelancer based in France,
          operating under the name Vanguard Tech Ops. For any question about your data, write to {mail}.
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
            <strong>Your preferences:</strong> we store your cookie choice and your language in your browser so we don't ask you again on every visit.
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
            To use these rights, email {mail}. We will reply within one month. If you think your rights are not respected,
            you can file a complaint with the French data protection authority, the CNIL ({cnil}).
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
            <strong>Strictly necessary:</strong> we store your cookie choice (<code>vto-consent</code>, kept for 6 months) and
            your language (<code>vto-lang</code>) in your browser's local storage. These do not require consent.
          </p>
          <p>
            <strong>Analytics:</strong> no analytics tool is active at the moment. If we add one, it will only run if you
            have accepted analytics cookies, and this policy will be updated to name the provider.
          </p>
          <p>
            Fonts are served from our own website, so no data is sent to third parties when they load. We do not use
            advertising cookies.
          </p>
          <p>You can change your choice at any time: {settingsButton('open cookie settings')}.</p>
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
  ],
};

const fr: { intro: React.ReactNode; sections: LegalSection[] } = {
  intro: (
    <p>
      Cette politique explique quelles données personnelles sont collectées lorsque vous visitez vanguardtechops.com ou
      nous contactez, pourquoi elles le sont, et quels sont vos droits au titre du Règlement général sur la protection
      des données (RGPD) et de la loi Informatique et Libertés.
    </p>
  ),
  sections: [
    {
      title: 'Responsable du traitement',
      body: (
        <p>
          Le responsable du traitement est <strong>Yassine Sabhi</strong>, freelance indépendant basé en France, exerçant
          sous le nom Vanguard Tech Ops. Pour toute question sur vos données, écrivez à {mail}.
        </p>
      ),
    },
    {
      title: 'Données collectées',
      body: (
        <>
          <p><strong>Lorsque vous utilisez le formulaire de contact :</strong> votre nom, votre adresse e-mail, le service qui vous intéresse et votre message.</p>
          <p>
            <strong>Lorsque vous visitez le site :</strong> comme pour tout site web, nos hébergeurs reçoivent automatiquement
            des données techniques telles que votre adresse IP, le type de navigateur et les pages demandées. Elles servent à
            afficher le site et à le sécuriser.
          </p>
          <p>
            <strong>Vos préférences :</strong> nous enregistrons votre choix concernant les cookies et votre langue dans votre
            navigateur, pour ne pas vous les redemander à chaque visite.
          </p>
          <p>
            <strong>Mesure d’audience (uniquement avec votre accord) :</strong> si vous acceptez les cookies de mesure
            d’audience, des informations sur votre utilisation du site (pages consultées, durée, type d’appareil) peuvent être
            collectées. Voir la section 9.
          </p>
          <p>Nous ne collectons aucune donnée sensible et ne vendons jamais vos données.</p>
        </>
      ),
    },
    {
      title: 'Finalités et bases légales',
      body: (
        <ul>
          <li><strong>Répondre à votre demande et préparer un devis</strong> : mesures précontractuelles prises à votre demande (art. 6.1.b du RGPD).</li>
          <li><strong>Vous envoyer un e-mail de confirmation</strong> lorsque vous utilisez le formulaire : même base légale.</li>
          <li><strong>Faire fonctionner et sécuriser le site</strong> : notre intérêt légitime à proposer un site fonctionnel et sûr (art. 6.1.f).</li>
          <li><strong>Mesure d’audience</strong> : votre consentement (art. 6.1.a), que vous pouvez retirer à tout moment.</li>
          <li><strong>Conserver les documents exigés par la loi</strong> si vous devenez client, comme les factures : obligation légale (art. 6.1.c).</li>
        </ul>
      ),
    },
    {
      title: 'Destinataires des données',
      body: (
        <>
          <p>Vos données ne sont accessibles qu’à Yassine Sabhi et aux prestataires nécessaires au fonctionnement du site :</p>
          <ul>
            <li><strong>GitHub, Inc.</strong> (GitHub Pages) : hébergement du site.</li>
            <li><strong>Vercel, Inc.</strong> : traitement des messages envoyés via le formulaire de contact.</li>
            <li><strong>Zoho Corporation</strong> : service e-mail utilisé pour recevoir votre message et envoyer l’e-mail de confirmation.</li>
          </ul>
          <p>Ces prestataires agissent pour notre compte et ne peuvent pas utiliser vos données à leurs propres fins.</p>
        </>
      ),
    },
    {
      title: 'Transferts hors de l’Union européenne',
      body: (
        <p>
          GitHub et Vercel sont basés aux États-Unis : certaines données peuvent donc y être traitées. Ces transferts
          reposent sur des garanties reconnues par la Commission européenne, comme le Data Privacy Framework UE–États-Unis ou
          les clauses contractuelles types.
        </p>
      ),
    },
    {
      title: 'Durée de conservation',
      body: (
        <ul>
          <li><strong>Messages du formulaire de contact</strong> : 1 an après notre dernier échange, puis supprimés.</li>
          <li><strong>Si vous devenez client</strong> : les données nécessaires au contrat et aux factures sont conservées aussi longtemps que la loi l’exige (10 ans pour les pièces comptables en France).</li>
          <li><strong>Journaux techniques</strong> : conservés par nos hébergeurs pour une durée limitée, selon leurs propres politiques.</li>
          <li><strong>Votre choix concernant les cookies</strong> : 6 mois, après quoi nous vous le redemandons.</li>
        </ul>
      ),
    },
    {
      title: 'Vos droits',
      body: (
        <>
          <p>Vous disposez des droits suivants :</p>
          <ul>
            <li>accéder aux données que nous détenons sur vous et en obtenir une copie ;</li>
            <li>les faire rectifier ou effacer ;</li>
            <li>limiter leur utilisation ou vous y opposer ;</li>
            <li>les recevoir dans un format portable ;</li>
            <li>retirer votre consentement à tout moment, sans effet sur ce qui a été fait auparavant ;</li>
            <li>définir des directives sur le sort de vos données après votre décès (droit propre au droit français).</li>
          </ul>
          <p>
            Pour exercer ces droits, écrivez à {mail}. Nous vous répondrons dans un délai d’un mois. Si vous estimez que vos
            droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL ({cnil}).
          </p>
        </>
      ),
    },
    {
      title: 'Sécurité',
      body: (
        <p>
          Le site est servi uniquement via une connexion chiffrée (HTTPS), et les données du formulaire de contact sont
          transmises de façon chiffrée. L’accès à vos données est limité à ce qui est nécessaire pour vous répondre.
        </p>
      ),
    },
    {
      title: 'Cookies et technologies similaires',
      body: (
        <>
          <p>
            <strong>Strictement nécessaires :</strong> nous enregistrons votre choix concernant les cookies
            (<code>vto-consent</code>, conservé 6 mois) et votre langue (<code>vto-lang</code>) dans le stockage local de votre
            navigateur. Ils ne nécessitent pas de consentement.
          </p>
          <p>
            <strong>Mesure d’audience :</strong> aucun outil de mesure d’audience n’est actif pour le moment. Si nous en
            ajoutons un, il ne fonctionnera que si vous avez accepté ces cookies, et cette politique sera mise à jour pour
            nommer le prestataire.
          </p>
          <p>
            Les polices de caractères sont hébergées sur notre propre site : aucune donnée n’est envoyée à des tiers lors de
            leur chargement. Nous n’utilisons pas de cookies publicitaires.
          </p>
          <p>Vous pouvez modifier votre choix à tout moment : {settingsButton('ouvrir les paramètres des cookies')}.</p>
        </>
      ),
    },
    {
      title: 'Mineurs',
      body: <p>Ce site s’adresse aux entreprises et aux adultes. Nous ne collectons pas sciemment de données concernant des enfants de moins de 15 ans.</p>,
    },
    {
      title: 'Modifications de cette politique',
      body: (
        <p>
          Nous pouvons mettre à jour cette politique, par exemple lors de l’ajout d’un nouveau prestataire. La date indiquée
          en haut de page correspond à la dernière version. Voir aussi nos <Link to="/terms">conditions générales</Link>.
        </p>
      ),
    },
  ],
};

const Privacy = () => {
  const { lang } = useLanguage();
  const content = lang === 'fr' ? fr : en;
  return (
    <LegalPage
      title={lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
      description={lang === 'fr'
        ? 'Comment Vanguard Tech Ops collecte, utilise et protège vos données personnelles, et quels sont vos droits.'
        : 'How Vanguard Tech Ops collects, uses and protects your personal data, and the rights you have over it.'}
      lastUpdated={lang === 'fr' ? '9 octobre 2026' : '9 October 2026'}
      intro={content.intro}
      sections={content.sections}
    />
  );
};

export default Privacy;
