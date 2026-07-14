import React, { useState } from 'react'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import logo from '../assets/logo-pr (1).png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    {
      name: 'Digital Marketing',
      columns: [
        {
          sections: [
            {
              title: 'AI Search & Visibility',
              items: [
                'LLMO Services',
                'AI Search Optimization (AI SEO)',
                'Generative Engine Optimization (GEO)',
                'Answer Engine Optimization (AEO)',
                'Hybrid Engine Optimization (HEO)',
                'AI Brand Visibility'
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'SEO Services',
              items: [
                'Best SEO Company',
                'SEO Services',
                'Enterprise SEO',
                'Local SEO',
                'Ecommerce SEO',
                'Technical SEO',
                'Small Business SEO',
                'Authority Building Plan'
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Content & Link Building',
              items: [
                'Content Marketing',
                'Link Building',
                'Blogging Outreach'
              ]
            },
            {
              title: 'Paid Advertising (PPC)',
              items: [
                'PPC Management',
                'Google Ads',
                'Performance Marketing',
                'Lead Generation',
                'Bing Ads Management',
                'Ecommerce PPC',
                'Shopping Ads Management',
                'Conversion Rate Optimization'
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Social Media & Video',
              items: [
                'Social Media Marketing',
                'Organic Social',
                'Meta Ads',
                'Instagram Ads',
                'YouTube Video Marketing',
                'Marketplace Marketing',
                'Amazon Marketing'
              ]
            },
            {
              title: 'Packages',
              items: [
                'Digital Marketing Packages',
                'SEO Packages',
                'Local SEO Packages',
                'Ecommerce SEO Packages',
                'PPC Packages',
                'Social Media Packages',
                'ASO Packages'
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Web & App',
      columns: [
        {
          sections: [
            {
              title: 'Web Development',
              items: [
                'Custom Web Development',
                'WordPress Development',
                'PHP Development',
                'Laravel Development',
                'ASP .Net Development',
                'CMS Development',
                'Shopify Development',
                'Magento Development',
                'WooCommerce Development',
                'Headless / Jamstack Dev',
                'Web Application Development',
                'API Development & Integration',
                'Website Maintenance & Support',
                'Website Migration',
                'Development Packages'
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Website Design',
              items: [
                'Website Design',
                'UI / UX Design',
                'Responsive Design',
                'Website Redesign',
                'Landing Page Design',
                'Website Design Packages'
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Mobile Apps',
              items: [
                'Mobile App Development',
                'Android App Development',
                'iOS App Development',
                'Cross-Platform App Development',
                'App Store Optimization (ASO)',
                'App Maintenance & Support'
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'AI Automation',
      columns: [
        {
          sections: [
            {
              title: 'AI Marketing Automation',
              items: [
                'Marketing Automation',
                'CRM Automation',
                'Email & Workflow Automation',
                'Lead Nurturing Automation'
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'AI Solutions by Industry',
              items: [
                'AI Automation for Ecommerce',
                'AI Automation for SaaS',
                'AI Automation for B2B'
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'AI Development & Consulting',
              items: [
                'AI Chatbot Development',
                'AI Agent Development',
                'AI Integration Services',
                'Custom AI Solutions',
                'AI Consulting'
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Branding',
      columns: [
        {
          sections: [
            {
              title: 'Brand Strategy',
              items: [
                'Brand Management',
                'Brand Identity',
                'Brand Positioning',
                'Brand Guidelines',
                'Rebranding'
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Creative Design',
              items: [
                'Logo Design',
                'Graphic Design',
                'Packaging Design',
                'Motion Graphics',
                'Video Production',
                'Infographic Design',
                'Social Media Creatives'
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Brand Promotion & ORM',
              items: [
                'Digital Branding',
                'Online Reputation Management (ORM)',
                'Online Response Management',
                'Personal Branding',
                'Influencer Marketing'
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Industries',
      columns: [
        {
          sections: [
            {
              title: 'Technology',
              items: ['SaaS', 'B2B', 'IT & Technology', 'Startups']
            },
            {
              title: 'Ecommerce & Retail',
              items: ['Ecommerce', 'Retail', 'Fashion & Apparel', 'D2C Brands']
            }
          ]
        },
        {
          sections: [
            {
              title: 'Healthcare & Wellness',
              items: ['Healthcare', 'Dental', 'Doctors & Clinics', 'Fitness & Wellness', 'Pharma']
            },
            {
              title: 'Professional Services',
              items: ['Law Firms', 'Accounting & Finance', 'Insurance', 'Consulting']
            }
          ]
        },
        {
          sections: [
            {
              title: 'Real Estate & Industrial',
              items: ['Real Estate', 'Construction', 'Manufacturing', 'Interior Design']
            },
            {
              title: 'Local & Lifestyle',
              items: ['Education', 'Hospitality & Travel', 'Restaurants', 'Automotive']
            }
          ]
        }
      ]
    },
    {
      name: 'About',
      columns: [
        {
          sections: [
            {
              title: 'Our Work',
              items: ['Case Studies', 'Our Portfolio', 'Client Testimonials']
            }
          ]
        },
        {
          sections: [
            {
              title: 'Company',
              items: ['About Us', 'Our Team', 'Awards & Recognition', 'Careers']
            }
          ]
        },
        {
          sections: [
            {
              title: 'Insights & Contact',
              items: ['Insights / Blog', 'Write For Us', 'Help Center', 'Contact Us']
            }
          ]
        },
        {
          sections: [
            {
              title: 'Partner / White Label',
              items: ['Digital Marketing Reseller', 'Become White Label Partner', 'Become Franchise Partner']
            }
          ]
        }
      ]
    }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Info Bar */}
      <div className="bg-black border-b border-border-color py-2 text-[0.85rem] font-medium max-[576px]:hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-center items-center">
          <div className="flex items-center gap-5 flex-wrap">
            <a href="tel:+919560133711" className="text-white inline-flex items-center gap-2 transition-colors duration-150 hover:text-primary top-bar-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
              </svg>
              <span>+91-9560133711</span>
            </a>
            <span className="text-white/20 select-none">|</span>
            <a href="tel:+18557630320" className="text-white inline-flex items-center gap-2 transition-colors duration-150 hover:text-primary top-bar-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
              </svg>
              <span>+1-855-763-0320</span>
            </a>
            <span className="text-white/20 select-none">|</span>
            <a href="mailto:contactus@ezrankings.com" className="text-white inline-flex items-center gap-2 transition-colors duration-150 hover:text-primary top-bar-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <span>sales@profitointeractive.com</span>
            </a>
            <span className="text-white/20 select-none">|</span>
            <a href="https://wa.me/919560133711" target="_blank" rel="noopener noreferrer" className="text-white inline-flex items-center gap-2 transition-colors duration-150 hover:text-[#25d366] top-bar-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="bg-white text-black h-[70px] flex items-center border-b border-black/8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center h-full relative">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="ezrankings logo" className="h-12 max-h-12 object-contain" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="flex items-center gap-7 h-full max-[992px]:hidden">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center h-full group"
              >
                <button className="bg-transparent border-none cursor-pointer font-sans text-[0.95rem] font-semibold text-black flex items-center gap-1.5 py-4 transition-colors duration-150 hover:text-primary group-hover:text-primary">
                  {item.name} <ChevronDown size={14} className="transition-all duration-250 opacity-70 group-hover:rotate-180 group-hover:opacity-100" />
                </button>
                <div className="absolute top-full left-6 right-6 bg-white border border-black/8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-8 transition-opacity duration-150 z-50 flex gap-8 before:content-[''] before:absolute before:bottom-full before:left-0 before:right-0 before:h-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                  {item.columns.map((column, colIdx) => (
                    <div key={colIdx} className="flex-1 flex flex-col gap-6 pl-6 border-l border-black/5 first:border-l-0 first:pl-0">
                      {column.sections.map((section, secIdx) => (
                        <div key={secIdx} className="flex flex-col gap-3">
                          <h4 className="text-[0.8rem] font-extrabold tracking-wider !text-primary uppercase flex items-center gap-2 relative pl-2.5 before:content-[''] before:absolute before:left-0 before:top-[1.5px] before:w-[3px] before:h-[13px] before:bg-primary before:rounded-sm text-left">
                            {section.title}
                          </h4>
                          <ul className="flex flex-col gap-1 text-left">
                            {section.items.map((subItem, itemIdx) => (
                              <li key={itemIdx}>
                                <a
                                  href={`#${subItem.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                  className="text-[0.85rem] font-semibold text-zinc-700 hover:text-primary hover:bg-primary/6 hover:translate-x-1 rounded-lg px-2 py-1 transition-all duration-200 block text-left -mx-2"
                                >
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* CTA Action */}
          <div className="max-[992px]:hidden">
            <a href="#proposal" className="bg-primary !text-white border border-primary rounded-full py-3 px-6 font-semibold inline-flex items-center gap-2 text-[0.95rem] shadow-[0_4px_14px_rgba(18,162,240,0.25)] transition-all duration-250 hover:bg-black hover:border-black hover:!text-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] group">
              Get a Free Proposal <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-[3px]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="hidden max-[992px]:flex bg-black/3 border border-black/8 text-black cursor-pointer p-2 rounded-lg items-center justify-center transition-all duration-150 hover:bg-black/8"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed left-0 right-0 bottom-0 bg-white border-t border-black/5 z-40 p-6 overflow-y-auto shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition-all duration-250 top-[106px] max-[576px]:top-[70px] ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-black/5 pb-3">
              <button
                className="w-full flex justify-between items-center bg-transparent border-none font-sans text-[1.05rem] font-semibold text-black py-2 cursor-pointer text-left"
                onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
              >
                <span>{item.name}</span>
                <ChevronDown size={16} className={`transition-transform duration-250 ${activeDropdown === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden flex flex-col gap-4 pl-4 transition-all duration-250 ${activeDropdown === index ? 'max-h-[1000px] pt-2 pb-2' : 'max-h-0'}`}>
                {item.columns.map((column, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-3">
                    {column.sections.map((section, secIdx) => (
                      <div key={secIdx} className="flex flex-col gap-2">
                        <h5 className="text-[0.8rem] font-bold !text-primary uppercase tracking-wider pl-2 border-l-2 border-primary text-left">
                          {section.title}
                        </h5>
                        <div className="flex flex-col gap-1 pl-2 text-left">
                          {section.items.map((subItem, itemIdx) => (
                            <a
                              key={itemIdx}
                              href={`#${subItem.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                              className="block py-1 px-2 -mx-2 rounded-lg text-[#555555] text-[0.9rem] font-semibold transition-all duration-200 hover:text-primary hover:bg-primary/6 hover:translate-x-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-6 pt-4">
            <a href="#proposal" className="bg-primary !text-white border border-primary rounded-full py-3 px-6 font-semibold inline-flex items-center gap-2 text-[0.95rem] shadow-[0_4px_14px_rgba(18,162,240,0.25)] transition-all duration-250 hover:bg-black hover:border-black hover:!text-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] group w-full justify-center" onClick={() => { setIsOpen(false); setActiveDropdown(null); }}>
              Get a Free Proposal <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-[3px]" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
