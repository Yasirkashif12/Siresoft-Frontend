import { FooterColumn } from '../../cards';

const COMPANY_INFO = {
  name: 'SireSoft PK',
  locations: 'Pakistan | USA | UAE',
  founded: 'Established 2012',
  phone: '+92 (0) 123 456 7890',
  email: 'support@siresoft.pk',
  copyright: '© 2026 SireSoft PK. All rights reserved.'
};

const FOOTER_LINKS = {
  services: [
    { id: 'web-dev', label: 'Web Development' },
    { id: 'cloud-host', label: 'Cloud Hosting' },
    { id: 'digital-market', label: 'Digital Marketing' }
  ],
  legal: [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' },
    { id: 'refund', label: 'Refund Policy' }
  ]
};

export const SOCIAL_LINKS = [
  { id: 'social-1', label: 'Social Media 1' },
  { id: 'social-2', label: 'Social Media 2' },
  { id: 'social-3', label: 'Social Media 3' }
];

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 sm:py-12 md:py-16" role="contentinfo">
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{COMPANY_INFO.name}</h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-2">{COMPANY_INFO.locations}</p>
          <p className="text-gray-400 text-xs sm:text-sm">{COMPANY_INFO.founded}</p>
        </div>

        <FooterColumn title="Services" links={FOOTER_LINKS.services} />
        <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />

        <nav aria-label="Contact Information">
          <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4">Contact</h3>
          <div className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm text-gray-300">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-green-600 rounded px-1 py-1 inline-block"
              >
                {COMPANY_INFO.phone}
              </a>
            </p>
            <p className="text-xs sm:text-sm text-gray-300 break-all">
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-green-600 rounded px-1 py-1 inline-block"
              >
                {COMPANY_INFO.email}
              </a>
            </p>
            <div className="flex gap-2 sm:gap-3">
              {SOCIAL_LINKS.map((social) => (
                <button
                  key={social.id}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-green-600"
                  aria-label={social.label}
                ></button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <hr className="border-gray-700 mb-4 sm:mb-6"/>
      <p className="text-center text-xs sm:text-sm text-gray-500">
        {COMPANY_INFO.copyright}
      </p>
    </div>
  </footer>
);

export default Footer;
