import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage, { LegalSection } from '../components/LegalPage';
import { useLanguage } from '@/src/i18n/LanguageContext';

const CONTACT_EMAIL = 'contact@vanguardtechops.com';
const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
const github = <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a>;
const vercel = <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>;

const en: { intro: React.ReactNode; sections: LegalSection[] } = {
  intro: (
    <p>
      These terms govern your use of vanguardtechops.com. By using the site, you accept them. If you do not agree,
      please do not use the site.
    </p>
  ),
  sections: [
    {
      title: 'Legal notice (Mentions légales)',
      body: (
        <>
          <p>
            <strong>Publisher:</strong> Yassine Sabhi, independent freelancer operating under the name Vanguard Tech Ops,
            based in France. The activity is not yet registered as a business; registration details will be added here
            once available.
          </p>
          <p><strong>Contact:</strong> {mail}</p>
          <p><strong>Publication director:</strong> Yassine Sabhi</p>
          <p><strong>Website host:</strong> GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States ({github})</p>
          <p><strong>Contact form processing:</strong> Vercel, Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States ({vercel})</p>
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
  ],
};

const fr: { intro: React.ReactNode; sections: LegalSection[] } = {
  intro: (
    <p>
      Les présentes conditions encadrent l’utilisation du site vanguardtechops.com. En utilisant le site, vous les
      acceptez. Si vous n’êtes pas d’accord, merci de ne pas utiliser le site.
    </p>
  ),
  sections: [
    {
      title: 'Mentions légales',
      body: (
        <>
          <p>
            <strong>Éditeur :</strong> Yassine Sabhi, freelance indépendant exerçant sous le nom Vanguard Tech Ops, basé en
            France. L’activité n’est pas encore immatriculée ; les informations d’immatriculation seront ajoutées ici dès
            qu’elles seront disponibles.
          </p>
          <p><strong>Contact :</strong> {mail}</p>
          <p><strong>Directeur de la publication :</strong> Yassine Sabhi</p>
          <p><strong>Hébergeur du site :</strong> GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis ({github})</p>
          <p><strong>Traitement du formulaire de contact :</strong> Vercel, Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis ({vercel})</p>
        </>
      ),
    },
    {
      title: 'Objet du site',
      body: (
        <p>
          Ce site présente les services proposés par Vanguard Tech Ops : cloud et virtualisation, développement web et
          e-commerce, IA et automatisation, développement Shopify et WordPress, et design graphique et web. Les informations
          du site sont fournies à titre général et ne constituent pas une offre ferme. Toute prestation fait l’objet d’un
          devis ou d’un contrat distinct conclu avec chaque client.
        </p>
      ),
    },
    {
      title: 'Propriété intellectuelle',
      body: (
        <>
          <p>
            Le contenu de ce site (textes, logo, design, images et vidéos) appartient à Yassine Sabhi, sauf mention
            contraire, et est protégé par le droit de la propriété intellectuelle. Toute copie, reproduction ou réutilisation
            sans autorisation écrite est interdite.
          </p>
          <p>
            Les noms et logos de tiers présents sur le site (comme AWS, Microsoft Azure, Shopify, WordPress, GitHub, Google
            Gemini et Claude) appartiennent à leurs propriétaires respectifs. Ils indiquent uniquement les technologies que
            nous utilisons et n’impliquent aucun partenariat ni soutien.
          </p>
        </>
      ),
    },
    {
      title: 'Utilisation du site',
      body: (
        <>
          <p>Vous vous engagez à ne pas :</p>
          <ul>
            <li>utiliser le site à des fins illicites ;</li>
            <li>tenter d’accéder sans autorisation au site ou aux systèmes qui le font fonctionner, ni perturber son fonctionnement ;</li>
            <li>utiliser le formulaire de contact pour envoyer du spam, de la publicité ou des contenus malveillants.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Formulaire de contact',
      body: (
        <p>
          Lorsque vous utilisez le formulaire de contact, merci de fournir des informations exactes et de ne pas envoyer de
          mots de passe ou d’autres données confidentielles. Le traitement de vos informations est décrit dans notre{' '}
          <Link to="/privacy">politique de confidentialité</Link>.
        </p>
      ),
    },
    {
      title: 'Exactitude et disponibilité',
      body: (
        <p>
          Nous faisons de notre mieux pour que les informations de ce site soient exactes et à jour, sans pouvoir garantir
          qu’elles soient complètes ou exemptes d’erreurs. Le site peut être temporairement indisponible, par exemple lors
          d’une maintenance ou du fait de nos hébergeurs.
        </p>
      ),
    },
    {
      title: 'Responsabilité',
      body: (
        <p>
          Dans les limites permises par la loi, nous ne sommes pas responsables des dommages indirects résultant de
          l’utilisation du site ou de l’impossibilité de l’utiliser. Rien dans ces conditions ne limite une responsabilité
          qui ne peut l’être en droit français.
        </p>
      ),
    },
    {
      title: 'Liens vers d’autres sites',
      body: (
        <p>
          Le site peut contenir des liens vers d’autres sites. Nous ne les contrôlons pas et ne sommes pas responsables de
          leur contenu ni de leurs pratiques en matière de confidentialité.
        </p>
      ),
    },
    {
      title: 'Données personnelles et cookies',
      body: (
        <p>
          Notre <Link to="/privacy">politique de confidentialité</Link> explique quelles données personnelles nous
          collectons, comment les cookies sont utilisés et quels sont vos droits.
        </p>
      ),
    },
    {
      title: 'Modification des conditions',
      body: <p>Nous pouvons modifier ces conditions à tout moment. La date indiquée en haut de page correspond à la dernière version.</p>,
    },
    {
      title: 'Droit applicable',
      body: (
        <p>
          Les présentes conditions sont régies par le droit français. En cas de litige, nous chercherons d’abord une
          solution amiable. À défaut, les tribunaux français compétents seront saisis, sans préjudice des protections dont
          vous bénéficiez en tant que consommateur en vertu de la loi de votre pays de résidence.
        </p>
      ),
    },
  ],
};

const Terms = () => {
  const { lang } = useLanguage();
  const content = lang === 'fr' ? fr : en;
  return (
    <LegalPage
      title={lang === 'fr' ? 'Conditions générales' : 'Terms & Conditions'}
      description={lang === 'fr'
        ? 'Mentions légales et conditions d’utilisation du site Vanguard Tech Ops.'
        : 'Legal notice and terms of use for the Vanguard Tech Ops website.'}
      lastUpdated={lang === 'fr' ? '9 octobre 2026' : '9 October 2026'}
      intro={content.intro}
      sections={content.sections}
    />
  );
};

export default Terms;
