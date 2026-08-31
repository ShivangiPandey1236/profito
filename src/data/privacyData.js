// Privacy Policy & Data Protection Data Store - Profito Interactive Pvt. Ltd.

export const PRIVACY_DATA = {
  meta: {
    lastUpdated: 'August 31, 2026',
    effectiveDate: 'January 1, 2026',
    version: '3.0',
    companyName: 'Profito Interactive Pvt. Ltd.',
    website: 'www.profitointeractive.com',
    email: 'hello@profitointeractive.com',
    hrEmail: 'hr@profitointeractive.com',
    phone: '+91 928 951 1130',
    address: 'C - 104, Sector 65, Noida - 201301, India'
  },

  hero: {
    badge: 'LEGAL & COMPLIANCE',
    titleHighlight: 'Privacy Policy',
    titleMain: '& Data Protection Statement',
    subtitle: 'Profito Interactive Pvt. Ltd. is committed to protecting your privacy and ensuring your personal data is handled securely and transparently in accordance with DPDP Act 2023, GDPR, CCPA, and global privacy standards.',
    stats: [
      { label: 'Primary Law', value: 'DPDP Act 2023' },
      { label: 'Global Compliance', value: 'GDPR & CCPA' },
      { label: 'Data Encryption', value: '256-Bit SSL' },
      { label: 'Jurisdiction', value: 'Noida, India' }
    ]
  },

  quickNav: [
    { id: 'sec-1-introduction', label: '1. Introduction' },
    { id: 'sec-2-definitions', label: '2. Definitions' },
    { id: 'sec-3-scope-applicability', label: '3. Scope & Applicability' },
    { id: 'sec-4-legal-basis', label: '4. Legal Basis for Processing' },
    { id: 'sec-5-categories-data', label: '5. Categories of Personal Data' },
    { id: 'sec-6-purpose-processing', label: '6. Purpose of Processing' },
    { id: 'sec-7-disclosure-transfer', label: '7. Disclosure & Transfer of Data' },
    { id: 'sec-8-data-retention', label: '8. Data Retention' },
    { id: 'sec-9-security-measures', label: '9. Security Measures' },
    { id: 'sec-10-your-rights', label: '10. Your Rights' },
    { id: 'sec-11-grievance-redressal', label: '11. Grievance Redressal' },
    { id: 'sec-12-childrens-privacy', label: '12. Children’s Privacy' },
    { id: 'sec-13-amendments', label: '13. Amendments' },
    { id: 'sec-14-governing-law', label: '14. Governing Law & Jurisdiction' },
    { id: 'sec-15-contact-information', label: '15. Contact Information' }
  ],

  /* =========================================================================
     15 SECTIONS OF PRIVACY POLICY DATA
     ========================================================================= */
  sections: [
    /* 1. INTRODUCTION */
    {
      id: 'sec-1-introduction',
      number: '1',
      icon: 'FileText',
      title: 'INTRODUCTION',
      lead: 'Profito Interactive Pvt. Ltd. (hereinafter referred to as "the Company," "Profito Interactive," "Profito," "we," "our," or "us") is committed to protecting and respecting the privacy of individuals whose personal data it processes.',
      paragraphs: [
        'This Privacy Policy ("Policy") sets forth the principles and practices relating to the collection, use, storage, protection, transfer, and disclosure of Personal Data when you:'
      ],
      listItems: [
        'Access or use our website www.profitointeractive.com ("Website");',
        'Engage with us through any form of communication or interaction;',
        'Submit an inquiry, request a quotation, or contact us regarding our services;',
        'Receive services from us pursuant to a contract or engagement.'
      ],
      footnoteHeading: 'Applicable Legislation Framework:',
      footnoteBullets: [
        'The Digital Personal Data Protection Act, 2023 (India) ("DPDP Act");',
        'The Information Technology Act, 2000;',
        'The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011;',
        'Regulation (EU) 2016/679 (General Data Protection Regulation — "GDPR"), where applicable;',
        'California Consumer Privacy Act ("CCPA"), where applicable; and',
        'Other applicable data protection and privacy legislation in jurisdictions where our clients and users are located.'
      ]
    },

    /* 2. DEFINITIONS */
    {
      id: 'sec-2-definitions',
      number: '2',
      icon: 'BookOpen',
      title: 'DEFINITIONS',
      lead: 'For the purposes of this Policy, the key terms defined below carry specific meanings under applicable privacy laws:',
      definitions: [
        {
          term: 'Personal Data',
          text: 'Any data about an individual who is identifiable by or in relation to such data, including information provided through our website, communication channels, inquiry forms, or service engagements.'
        },
        {
          term: 'Processing',
          text: 'Any operation or set of operations performed on Personal Data, including collection, recording, organisation, storage, retrieval, consultation, use, disclosure, dissemination, erasure, or destruction.'
        },
        {
          term: 'Data Principal',
          text: 'Refers to the individual to whom the Personal Data relates.'
        },
        {
          term: 'Data Fiduciary',
          text: 'Refers to Profito Interactive Pvt. Ltd., where the Company determines the purpose and means of processing Personal Data.'
        },
        {
          term: 'Sensitive Personal Data',
          text: 'Refers to information classified as sensitive or protected under applicable laws and regulations.'
        },
        {
          term: 'Cookies',
          text: 'Small files placed on your device to support website functionality, analytics, tracking, and improvement of user experience.'
        }
      ]
    },

    /* 3. SCOPE AND APPLICABILITY */
    {
      id: 'sec-3-scope-applicability',
      number: '3',
      icon: 'Target',
      title: 'SCOPE AND APPLICABILITY',
      lead: 'This Policy governs the processing of Personal Data across all digital interactions and client engagements with Profito Interactive Pvt. Ltd.',
      blocks: [
        {
          heading: 'This Policy applies to the Processing of Personal Data:',
          items: [
            'Collected directly from you through our website, electronic communications, contact forms, inquiry forms, or service engagement;',
            'Provided voluntarily when you communicate with us or request information about our services;',
            'Received from publicly available sources, referrals, or third-party service providers acting on our behalf;',
            'Processed in connection with our marketing, analytics, customer support, business operations, and service delivery activities.'
          ]
        },
        {
          heading: 'This Policy does not apply to:',
          items: [
            'Anonymous, de-identified, or aggregated information that cannot reasonably be used to identify an individual;',
            'Third-party websites, applications, or services linked from our Website, which are governed by their respective privacy policies.'
          ]
        }
      ]
    },

    /* 4. LEGAL BASIS FOR PROCESSING */
    {
      id: 'sec-4-legal-basis',
      number: '4',
      icon: 'ShieldCheck',
      title: 'LEGAL BASIS FOR PROCESSING',
      lead: 'We may process Personal Data on one or more of the following legally recognised bases:',
      definitions: [
        {
          term: 'Consent',
          text: 'Where you have provided consent for Processing your Personal Data for a specific purpose.'
        },
        {
          term: 'Contractual Necessity',
          text: 'Where Processing is necessary for providing services or fulfilling contractual obligations.'
        },
        {
          term: 'Legal Obligation',
          text: 'Where Processing is necessary to comply with applicable laws, regulations, legal processes, or governmental requirements.'
        },
        {
          term: 'Legitimate Interests',
          text: 'Where Processing is necessary for purposes such as business operations, analytics, website improvement, fraud prevention, security, and service improvement, provided such interests do not override applicable privacy rights.'
        }
      ],
      paragraphs: [
        'Where consent is the legal basis for Processing, you may withdraw your consent at any time in accordance with applicable law.'
      ]
    },

    /* 5. CATEGORIES OF PERSONAL DATA PROCESSED */
    {
      id: 'sec-5-categories-data',
      number: '5',
      icon: 'Database',
      title: 'CATEGORIES OF PERSONAL DATA PROCESSED',
      lead: 'Depending on how you interact with Profito Interactive, we process the following categories of data:',
      blocks: [
        {
          heading: 'a) Data You Provide Voluntarily',
          text: 'Depending on how you interact with us, we may collect:',
          items: [
            'Full name and designation;',
            'Company or organisation details;',
            'Email address and telephone number;',
            'Billing, invoicing, and payment-related information, where applicable;',
            'Project requirements and business preferences;',
            'Information provided through inquiry, contact, or quotation forms;',
            'Correspondence and communications with our team;',
            'Files, documents, images, or other materials voluntarily shared with us.'
          ]
        },
        {
          heading: 'b) Data Collected Automatically',
          text: 'When you access or use our Website, we may automatically collect certain information, including:',
          items: [
            'IP address;',
            'Browser type and version;',
            'Device and operating system information;',
            'Website navigation and interaction data;',
            'Pages visited and session information;',
            'Approximate location inferred from IP address;',
            'Cookies, pixels, analytics information, and similar technologies.'
          ]
        }
      ]
    },

    /* 6. PURPOSE OF PROCESSING */
    {
      id: 'sec-6-purpose-processing',
      number: '6',
      icon: 'Cpu',
      title: 'PURPOSE OF PROCESSING',
      lead: 'We process your Personal Data strictly for specified, lawful, and legitimate business purposes:',
      listItems: [
        'To respond to inquiries and requests submitted through our Website;',
        'To provide quotations, proposals, and information about our services;',
        'To deliver and manage services provided to clients;',
        'To communicate with clients, prospective clients, and business partners;',
        'To process payments, billing, and maintain business and financial records;',
        'To understand your requirements and tailor our services accordingly;',
        'To improve our Website, services, functionality, and user experience;',
        'To send marketing communications, promotional information, and newsletters where permitted or consented to;',
        'To maintain internal records and manage business operations;',
        'To detect, prevent, and investigate fraud, security incidents, misuse, or unlawful activities;',
        'To comply with applicable laws, legal orders, regulatory requirements, and governmental requests.'
      ]
    },

    /* 7. DISCLOSURE AND TRANSFER OF PERSONAL DATA */
    {
      id: 'sec-7-disclosure-transfer',
      number: '7',
      icon: 'Share2',
      title: 'DISCLOSURE AND TRANSFER OF PERSONAL DATA',
      lead: 'We respect the confidentiality of your Personal Data and do not sell your Personal Data to third parties.',
      paragraphs: [
        'We may disclose or provide access to Personal Data only where reasonably necessary for legitimate business purposes, including to:'
      ],
      listItems: [
        'Employees and authorised personnel who require the information to perform tasks related to your project or service;',
        'Service providers supporting our hosting, IT, CRM, analytics, marketing, communication, or other business operations;',
        'Payment processors or other service providers where necessary to provide requested services;',
        'Legal, regulatory, governmental, or law-enforcement authorities where required by applicable law;',
        'Relevant parties in connection with a merger, acquisition, restructuring, or transfer of business or assets, subject to appropriate confidentiality and data protection obligations.'
      ],
      footnoteHeading: 'Cross-Border Transfers',
      footnoteText: 'Where Personal Data is transferred or accessed outside India, such transfers shall be carried out in accordance with applicable data protection laws and appropriate safeguards, contractual protections, or other legally recognised mechanisms.'
    },

    /* 8. DATA RETENTION */
    {
      id: 'sec-8-data-retention',
      number: '8',
      icon: 'Clock',
      title: 'DATA RETENTION',
      lead: 'We retain Personal Data only for as long as reasonably necessary to fulfill the purposes for which it was collected, provide our services, maintain business records, resolve disputes, and comply with applicable legal and regulatory obligations.',
      paragraphs: [
        'When Personal Data is no longer required, we may securely delete, destroy, or anonymise it in accordance with our internal procedures and applicable law.'
      ]
    },

    /* 9. SECURITY MEASURES */
    {
      id: 'sec-9-security-measures',
      number: '9',
      icon: 'Lock',
      title: 'SECURITY MEASURES',
      lead: 'At Profito Interactive Pvt. Ltd., we take reasonable technical and organizational measures to protect Personal Data against unauthorised access, disclosure, alteration, misuse, loss, or destruction.',
      footnoteHeading: 'Our security practices include:',
      listItems: [
        'Encryption and secure transmission of information where appropriate;',
        'Access controls and authentication mechanisms;',
        'Role-based access to Personal Data;',
        'Restricting access to information to employees or authorised personnel who need it for specific business or project-related purposes;',
        'Security monitoring and appropriate technical safeguards;',
        'Periodic review of our security practices and procedures.'
      ],
      paragraphs: [
        'Although we take reasonable steps to protect your information, no method of electronic storage or transmission can be guaranteed to be completely secure.'
      ]
    },

    /* 10. YOUR RIGHTS */
    {
      id: 'sec-10-your-rights',
      number: '10',
      icon: 'UserCheck',
      title: 'YOUR RIGHTS',
      lead: 'Subject to applicable laws and regulations, Data Principals possess the following rights regarding their Personal Data:',
      listItems: [
        'Request access to Personal Data held about you;',
        'Request correction or rectification of inaccurate or outdated information;',
        'Request deletion or erasure of Personal Data, subject to applicable legal obligations;',
        'Withdraw consent where Processing is based on consent;',
        'Request information regarding how your Personal Data is processed;',
        'Request a copy of your Personal Data where applicable;',
        'Raise a grievance regarding the Processing or handling of your Personal Data.'
      ],
      paragraphs: [
        'To exercise any applicable rights, you may contact us using the contact details provided in this Policy.'
      ]
    },

    /* 11. GRIEVANCE REDRESSAL */
    {
      id: 'sec-11-grievance-redressal',
      number: '11',
      icon: 'Shield',
      title: 'GRIEVANCE REDRESSAL',
      lead: 'If you have any questions, concerns, complaints, or grievances regarding the collection, use, Processing, or protection of your Personal Data, you may contact us directly:',
      grievanceCard: {
        company: 'Profito Interactive Pvt. Ltd.',
        email: 'hello@profitointeractive.com',
        phone: '+91 928 951 1130',
        address: 'C - 104, Sector 65, Noida - 201301, India'
      },
      paragraphs: [
        'We will review and respond to privacy-related grievances within the timelines prescribed under applicable laws.'
      ]
    },

    /* 12. CHILDREN'S PRIVACY */
    {
      id: 'sec-12-childrens-privacy',
      number: '12',
      icon: 'HeartHandshake',
      title: "CHILDREN'S PRIVACY",
      lead: 'Our Website and services are not intended for individuals under the age of 18 years.',
      paragraphs: [
        'We do not knowingly collect Personal Data from children or minors. If we become aware that Personal Data of a minor has been collected without appropriate consent or legal basis, we will take reasonable steps to delete such information in accordance with applicable law.'
      ]
    },

    /* 13. AMENDMENTS */
    {
      id: 'sec-13-amendments',
      number: '13',
      icon: 'RefreshCw',
      title: 'AMENDMENTS',
      lead: 'We reserve the right to modify or update this Privacy Policy from time to time to reflect changes in our practices, services, technology, or applicable legal and regulatory requirements.',
      paragraphs: [
        'Any material changes to this Policy may be communicated through our Website or other appropriate means where reasonably practicable.',
        'We encourage you to review this Policy periodically to remain informed about how we protect your Personal Data.'
      ]
    },

    /* 14. GOVERNING LAW & JURISDICTION */
    {
      id: 'sec-14-governing-law',
      number: '14',
      icon: 'Scale',
      title: 'GOVERNING LAW & JURISDICTION',
      lead: 'This Privacy Policy shall be governed by and construed in accordance with the laws of India.',
      paragraphs: [
        'Any disputes arising in connection with this Policy or the Processing of Personal Data shall be subject to the jurisdiction of the competent courts in Noida, Uttar Pradesh, India, unless otherwise required by applicable law.'
      ]
    },

    /* 15. CONTACT INFORMATION */
    {
      id: 'sec-15-contact-information',
      number: '15',
      icon: 'Mail',
      title: 'CONTACT INFORMATION',
      lead: 'For any inquiries, requests, or communications regarding this Privacy Policy, please contact Profito Interactive Pvt. Ltd.:',
      contactCard: {
        company: 'Profito Interactive Pvt. Ltd.',
        website: 'www.profitointeractive.com',
        generalEmail: 'hello@profitointeractive.com',
        hrEmail: 'hr@profitointeractive.com',
        phone: '+91 928 951 1130',
        office: 'C - 104, Sector 65, Noida - 201301, India'
      }
    }
  ]
};
