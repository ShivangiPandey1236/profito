// Privacy Policy & Data Protection Data Store

export const PRIVACY_DATA = {
  meta: {
    lastUpdated: 'August 31, 2026',
    effectiveDate: 'January 1, 2026',
    version: '2.4',
    organization: 'Profito Interactive',
    dpoEmail: 'privacy@profitointeractive.com',
    supportEmail: 'contactus@profitointeractive.com'
  },

  hero: {
    badge: 'TRUST & DATA GOVERNANCE',
    titleHighlight: 'Privacy Policy',
    titleMain: '& Data Security Statement',
    subtitle: 'At Profito Interactive, we prioritize the protection of your personal information, client assets, and digital data. Learn how we collect, handle, safeguard, and honor your privacy rights across all our digital marketing and tech solutions.',
    stats: [
      { label: 'Security Standard', value: 'ISO 27001' },
      { label: 'Data Encryption', value: '256-Bit SSL' },
      { label: 'Compliance Level', value: 'GDPR & CCPA' },
      { label: 'Response SLA', value: '< 24 Hours' }
    ]
  },

  keyPillars: [
    {
      id: 'pillar-encryption',
      icon: 'ShieldCheck',
      title: 'End-to-End Encryption',
      desc: 'All client data transmitted across our websites and web applications is encrypted using high-grade 256-bit TLS/SSL protocols.'
    },
    {
      id: 'pillar-selling',
      icon: 'Lock',
      title: 'Zero Data Monetization',
      desc: 'We never sell, rent, or trade your personal data, lead details, or business analytics to third-party data brokers.'
    },
    {
      id: 'pillar-compliance',
      icon: 'FileCheck',
      title: 'Global Compliance',
      desc: 'Fully aligned with General Data Protection Regulation (GDPR), CCPA/CPRA, and international data governance frameworks.'
    },
    {
      id: 'pillar-control',
      icon: 'UserCheck',
      title: 'Complete User Control',
      desc: 'You hold full right to access, inspect, modify, export, or request deletion of your stored personal details at any time.'
    }
  ],

  quickNav: [
    { id: 'information-collection', label: '1. Information We Collect' },
    { id: 'data-usage', label: '2. How We Use Data' },
    { id: 'cookies-tracking', label: '3. Cookies & Tracking' },
    { id: 'data-sharing', label: '4. Information Sharing' },
    { id: 'data-security', label: '5. Security Protocols' },
    { id: 'user-rights', label: '6. Your Privacy Rights' },
    { id: 'data-retention', label: '7. Data Retention' },
    { id: 'international-transfers', label: '8. Global Transfers' },
    { id: 'children-privacy', label: '9. Children’s Privacy' },
    { id: 'policy-changes', label: '10. Policy Updates' },
    { id: 'contact-privacy', label: '11. Contact Privacy Team' }
  ],

  sections: [
    {
      id: 'information-collection',
      badge: 'SECTION 01',
      icon: 'Database',
      title: 'Information We Collect',
      subtitle: 'We collect information directly provided by you, automatically gathered through your site visits, and supplied by authorized partners.',
      subsections: [
        {
          title: 'A. Personal Information You Provide Directly',
          content: 'When you fill out consultation forms, request proposals, subscribe to our marketing insights, apply for job openings, or communicate with our specialists, we may collect:',
          bullets: [
            'Contact Details: Full name, business email address, phone number, and physical mailing address.',
            'Business & Account Details: Company name, job title, website URL, industry segment, and project requirements.',
            'Career Data: Resumes, portfolio links, work experience, and cover notes (when applying for careers).',
            'Communication History: Email correspondences, form inquiry submissions, and chat records with our support team.'
          ]
        },
        {
          title: 'B. Technical Data Collected Automatically',
          content: 'As you navigate through our platform, automated log systems and analytics tools collect technical telemetry:',
          bullets: [
            'Device & Network Identifiers: IP address, device type, browser specifications, operating system, and mobile network operator.',
            'Usage Metrics: Pages visited, time spent per page, click paths, entry/exit pages, and referring site URLs.',
            'Location Information: Approximate geographic location derived from your IP address (country/city level).'
          ]
        }
      ],
      takeaway: 'We only request personal information essential to fulfilling your service inquiry or delivering optimal digital marketing solutions.'
    },
    {
      id: 'data-usage',
      badge: 'SECTION 02',
      icon: 'Cpu',
      title: 'How We Use Your Information',
      subtitle: 'Every data point we process serves a specific, legitimate business purpose aligned with delivering high-impact services.',
      subsections: [
        {
          title: 'Core Operational & Service Delivery Purposes',
          content: 'We utilize your personal and business data for the following key activities:',
          bullets: [
            'Delivering customized SEO, PPC, digital branding, and AI search visibility solutions tailored to your business needs.',
            'Processing proposal requests, preparing scope-of-work documents, and executing service agreements.',
            'Communicating project updates, reporting deliverables, and answering technical support inquiries.',
            'Enhancing user experience, optimizing site navigation speed, and performing A/B testing on web interfaces.',
            'Conducting market research, platform performance auditing, and preventative security checks.',
            'Fulfilling legal obligations, protecting against fraudulent activities, and enforcing contractual terms.'
          ]
        }
      ],
      takeaway: 'We process personal data based on legitimate business interests, contractual necessity, or explicit user consent.'
    },
    {
      id: 'cookies-tracking',
      badge: 'SECTION 03',
      icon: 'Cookie',
      title: 'Cookies & Tracking Technologies',
      subtitle: 'Our website uses cookies, web beacons, and analytical pixels to remember preferences, analyze traffic, and deliver personalized experiences.',
      subsections: [
        {
          title: 'Types of Cookies We Use',
          content: 'We categorize our digital cookies into four distinct operational buckets:',
          bullets: [
            'Strictly Necessary Cookies: Essential for basic website navigation, form submission security, and user session stability.',
            'Performance & Analytics Cookies: Helps us understand visitor engagement, popular pages, and performance bottlenecks via Google Analytics.',
            'Functional Cookies: Remembers chosen language preferences, regional settings, and form field pre-fills.',
            'Targeting & Advertising Cookies: Used to deliver relevant remarketing campaign announcements across Google & Meta networks.'
          ]
        },
        {
          title: 'Managing Cookie Preferences',
          content: 'You can modify or disable non-essential cookies at any time through your web browser settings. Note that disabling certain essential cookies may affect specific interactive features on our portal.'
        }
      ],
      takeaway: 'You retain full control over non-essential cookie tracking and can adjust your preferences via your browser settings.'
    },
    {
      id: 'data-sharing',
      badge: 'SECTION 04',
      icon: 'Share2',
      title: 'Information Sharing & Third-Party Disclosure',
      subtitle: 'We strictly protect your data integrity and only share information with vetted partners under strict confidentiality agreements.',
      subsections: [
        {
          title: 'Vetted Service Providers & Infrastructure Partners',
          content: 'We may share necessary data subsets with trusted third-party vendor platforms that assist our operations:',
          bullets: [
            'Cloud Infrastructure & Hosting: Secure cloud servers hosted on AWS and Google Cloud Platform.',
            'Communication & Email Gateways: Transactional email servers, customer relationship management (CRM) tools, and live chat platforms.',
            'Analytics & Performance Auditing: Specialized auditing tools (Google Analytics, Search Console, Ahrefs) strictly for traffic evaluation.'
          ]
        },
        {
          title: 'Legal Compliance & Corporate Protection',
          content: 'We may disclose personal information if required by law enforcement, court subpoenas, regulatory mandates, or to defend the legal rights, safety, and property of Profito Interactive and its clients.'
        }
      ],
      takeaway: 'Profito Interactive NEVER sells user data to data brokers or advertising exchanges.'
    },
    {
      id: 'data-security',
      badge: 'SECTION 05',
      icon: 'Shield',
      title: 'Data Protection & Security Infrastructure',
      subtitle: 'We employ enterprise-grade security protocols to protect client records and proprietary assets from unauthorized access.',
      subsections: [
        {
          title: 'Technical & Physical Safeguards',
          content: 'Our data security framework includes multi-tiered technical controls:',
          bullets: [
            'SSL/TLS Transport Layer Encryption: All data transmitted over our domains is encrypted using 256-bit certificates.',
            'Role-Based Access Control (RBAC): Strict administrative privilege limits ensuring employees only access data required for their specific role.',
            'Firewalls & Intrusion Detection: Continuous monitoring of network traffic to prevent malware, DDoS, and unauthorized access attempts.',
            'Regular Vulnerability Audits: Periodic system penetration tests and code review scans to maintain platform resilience.'
          ]
        }
      ],
      takeaway: 'While no internet transmission is 100% immune, we maintain top-tier defense layers to safeguard your digital footprint.'
    },
    {
      id: 'user-rights',
      badge: 'SECTION 06',
      icon: 'UserCheck',
      title: 'Your Privacy Rights (GDPR, CCPA & Global)',
      subtitle: 'Depending on your jurisdiction, you possess explicit legal rights over how your personal information is stored and processed.',
      subsections: [
        {
          title: 'Summary of User Rights',
          content: 'You may exercise any of the following rights by contacting our Data Protection Team:',
          bullets: [
            'Right to Access & Information: Request details on what personal data we hold about you and how it is processed.',
            'Right to Rectification: Ask us to correct inaccurate or incomplete personal information in our systems.',
            'Right to Erasure ("Right to be Forgotten"): Request permanent deletion of your stored personal records.',
            'Right to Data Portability: Obtain a structured, machine-readable copy of your personal data for transfer.',
            'Right to Restrict or Object: Request that we pause processing or opt-out of marketing communications at any time.',
            'Right to Non-Discrimination: We will never discriminate against you for exercising any of your statutory privacy rights.'
          ]
        }
      ],
      takeaway: 'To submit a privacy rights request, send an email to privacy@profitointeractive.com. We respond within 24–48 hours.'
    },
    {
      id: 'data-retention',
      badge: 'SECTION 07',
      icon: 'Clock',
      title: 'Data Retention & Archival Protocols',
      subtitle: 'We only retain your personal data for as long as necessary to fulfill the purpose for which it was originally collected.',
      subsections: [
        {
          title: 'Retention Timelines',
          content: 'Our standard data retention periods are structured as follows:',
          bullets: [
            'Inquiry & Lead Records: Retained for up to 24 months after last contact unless deleted upon user request.',
            'Active Client Account Data: Kept for the duration of the service contract plus 7 years to meet tax and accounting legal obligations.',
            'Job Applicant Profiles: Stored for up to 12 months for prospective talent recruitment, unless requested otherwise.'
          ]
        }
      ],
      takeaway: 'Once retention periods expire, records are securely overwritten or permanently purged from active databases.'
    },
    {
      id: 'international-transfers',
      badge: 'SECTION 08',
      icon: 'Globe',
      title: 'International Data Transfers',
      subtitle: 'Profito Interactive operates globally. Information collected may be transferred across international borders in compliance with data transfer standards.',
      subsections: [
        {
          title: 'Cross-Border Protection Standards',
          content: 'When personal data is transferred outside your home country or the European Economic Area (EEA), we ensure adequate protections are in place by relying on EU Standard Contractual Clauses (SCCs) and verified cloud security standards.'
        }
      ],
      takeaway: 'Your data receives uniform high-level security controls regardless of geographical data storage nodes.'
    },
    {
      id: 'children-privacy',
      badge: 'SECTION 09',
      icon: 'HeartHandshake',
      title: 'Children’s Privacy Protection',
      subtitle: 'Our services are exclusively intended for business professionals, enterprises, and adults aged 18 and older.',
      subsections: [
        {
          title: 'Strict Minor Data Policy',
          content: 'We do not knowingly solicit or collect personal information from individuals under the age of 18. If we learn that a minor has submitted personal details without parental consent, we immediately delete that data from our servers.'
        }
      ],
      takeaway: 'If you believe a minor has shared information with us, please report it to privacy@profitointeractive.com immediately.'
    },
    {
      id: 'policy-changes',
      badge: 'SECTION 10',
      icon: 'RefreshCw',
      title: 'Updates to This Privacy Policy',
      subtitle: 'We periodically update this policy to reflect evolving legal frameworks, technological enhancements, and service updates.',
      subsections: [
        {
          title: 'Revision & Notification Process',
          content: 'Any updates will be posted directly to this page with an updated "Last Modified" timestamp at the top of the policy. We encourage periodic reviews to stay informed about our data protection safeguards.'
        }
      ],
      takeaway: 'Continued use of our website or services after policy updates signifies acceptance of the revised privacy terms.'
    },
    {
      id: 'contact-privacy',
      badge: 'SECTION 11',
      icon: 'Mail',
      title: 'Contact Our Data Protection Team',
      subtitle: 'Have questions, feedback, or wish to submit a data access request? Reach out directly to our dedicated Data Protection Officer.',
      subsections: [
        {
          title: 'Direct Privacy Contacts',
          content: 'You can contact our privacy officer through any of the following channels:',
          bullets: [
            'Data Protection Officer Email: privacy@profitointeractive.com',
            'General Support Email: sales@profitointeractive.com',
            'Headquarters Office: Profito Interactive, Sector 65, Noida, Uttar Pradesh, India',
            'Telephone Support: +91-9560133711 / +1-855-763-0320'
          ]
        }
      ],
      takeaway: 'All privacy inquiries receive priority handling with an official response within 1 business day.'
    }
  ],

  faqs: [
    {
      question: 'How can I request access to or deletion of my personal data?',
      answer: 'Simply send an email to privacy@profitointeractive.com with the subject line "Data Subject Request". Include your full name and email address registered with us. Our Data Protection Team will verify your request and send your data report or deletion confirmation within 2 business days.'
    },
    {
      question: 'Does Profito Interactive sell client data to third parties?',
      answer: 'No, absolutely not. Profito Interactive has never sold, rented, or monetized personal information, lead lists, or client analytics data, and will never do so.'
    },
    {
      question: 'How does Profito Interactive comply with GDPR and CCPA regulations?',
      answer: 'We comply with GDPR and CCPA by offering transparent privacy notices, strict opt-in cookie banners, end-to-end data encryption, standardized contractual transfer clauses, and dedicated mechanisms for user data access, correction, and deletion.'
    },
    {
      question: 'What happens to my data after my service contract ends?',
      answer: 'Active project data is archived securely for billing audit requirements and then permanently destroyed or anonymized in accordance with our 7-year legal tax retention policy.'
    }
  ]
};
