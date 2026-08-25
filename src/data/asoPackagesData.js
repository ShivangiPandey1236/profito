// ASO Packages & Plans Data Store

export const ASO_PACKAGES_DATA = {
  hero: {
    titleLime: 'ASO',
    titleWhite: 'Packages & Plans',
    accentColor: '#bcd32e',
    subtitle: 'Boost your app store rankings, drive organic downloads, and maximize app visibility with our specialized ASO packages.'
  },

  billingCycles: [
    { id: 'month', name: 'Month', label: '(1 Month)' },
    { id: 'quarterly', name: 'Quarterly', label: '(3 Months)' },
    { id: 'half-yearly', name: 'Half Yearly', label: '(6 Months)' },
    { id: 'yearly', name: 'Yearly', label: '(12 Months)' }
  ],

  plans: [
    {
      id: 'lite',
      name: 'LITE',
      target: 'Small Business',
      isPopular: false,
      pricing: {
        month: '₹25,000',
        quarterly: '₹22,500',
        'half-yearly': '₹20,000',
        yearly: '₹18,000'
      },
      period: '/Month',
      features: [
        'Dedicated ASO Specialist, Shared Support Team',
        'Basic keyword research and app store optimization strategy development',
        '1 app store creative (icon or screenshot), quarterly updates',
        'Basic app performance tracking and visibility metrics',
        '1-hour monthly consultation to review progress and discuss improvement...'
      ]
    },
    {
      id: 'standard',
      name: 'STANDARD',
      target: 'Moderate Competition',
      isPopular: true,
      popularLabel: 'Popular',
      pricing: {
        month: '₹35,000',
        quarterly: '₹31,500',
        'half-yearly': '₹28,000',
        yearly: '₹25,000'
      },
      period: '/Month',
      features: [
        'Dedicated ASO Specialist and Graphic Designer, Shared Support Team',
        'Advanced keyword research and targeted ASO strategy development',
        '3 app store creatives (icons and screenshots), optimized for 2 platforms...',
        'Intermediate app performance tracking and user acquisition optimization...',
        '2 hours monthly consultation to refine strategies and boost app downloads...'
      ]
    },
    {
      id: 'advance',
      name: 'ADVANCE',
      target: 'Ecommerce / High Competition',
      isPopular: false,
      pricing: {
        month: '₹50,000',
        quarterly: '₹45,000',
        'half-yearly': '₹40,000',
        yearly: '₹35,000'
      },
      period: '/Month',
      features: [
        'Dedicated ASO Specialist, Graphic Designer, and Copywriter, Shared...',
        'Comprehensive competitor analysis and customized ASO strategy',
        '5 app store creatives (icons, screenshots, or videos), monthly updates...',
        'Advanced performance tracking with focus on user engagement and ROI...',
        '4 hours monthly consultation to optimize app visibility and drive...',
      ]
    },
    {
      id: 'enterprise',
      name: 'ENTERPRISE',
      target: 'Brands / High Competition',
      isPopular: false,
      pricing: {
        month: '₹150,000',
        quarterly: '₹135,000',
        'half-yearly': '₹120,000',
        yearly: '₹105,000'
      },
      period: '/Month',
      features: [
        'Dedicated ASO Specialist, Graphic Designer, Copywriter, and Data...',
        'In-depth market research and fully customized ASO strategy',
        '10+ app store creatives (icons, screenshots, and videos) across multiple platforms...',
        'Full-funnel optimization and advanced tracking to maximize app in...',
        '8 hours monthly consultation to review analytics, refine strategies...'
      ]
    }
  ]
}
