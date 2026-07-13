import React, { useState } from 'react'
import { Phone, Mail, ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import logo from '../assets/logo-pr (1).png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    {
      name: 'Digital Marketing',
      dropdownItems: ['SEO Services', 'PPC Management', 'Social Media Marketing', 'Content Marketing']
    },
    {
      name: 'Web & App',
      dropdownItems: ['Web Development', 'App Development', 'UI/UX Design', 'E-commerce Solutions']
    },
    {
      name: 'AI Automation',
      dropdownItems: ['Chatbot Integration', 'Workflow Automation', 'AI Consulting', 'Data Scraping']
    },
    {
      name: 'Branding',
      dropdownItems: ['Logo Design', 'Brand Identity', 'Graphic Design', 'Corporate Branding']
    },
    {
      name: 'Industries',
      dropdownItems: ['E-commerce', 'Healthcare', 'Real Estate', 'Education', 'Finance']
    },
    {
      name: 'About',
      dropdownItems: ['Our Team', 'Our History', 'Testimonials', 'Careers']
    }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Info Bar */}
      <div className="bg-black border-b border-border-color py-2 text-[0.85rem] font-medium max-[576px]:hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-center items-center">
          <div className="flex items-center gap-5 flex-wrap">
            <a href="tel:+919560133711" className="text-white inline-flex items-center gap-2 transition-colors duration-150 hover:text-primary">
              <Phone size={14} /> <span>+91-9560133711</span>
            </a>
            <span className="text-white/20 select-none">|</span>
            <a href="tel:+18557630320" className="text-white inline-flex items-center gap-2 transition-colors duration-150 hover:text-primary">
              <Phone size={14} /> <span>+1-855-763-0320</span>
            </a>
            <span className="text-white/20 select-none">|</span>
            <a href="mailto:contactus@ezrankings.com" className="text-white inline-flex items-center gap-2 transition-colors duration-150 hover:text-primary">
              <Mail size={14} /> <span>contactus@ezrankings.com</span>
            </a>
            <span className="text-white/20 select-none">|</span>
            <a href="https://wa.me/919560133711" target="_blank" rel="noopener noreferrer" className="text-white inline-flex items-center gap-2 transition-colors duration-150 hover:text-[#25d366]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.062c-3.276 0-5.934 2.659-5.934 5.935 0 1.222.373 2.355 1.01 3.298l-.66 2.407 2.47-.648c.883.518 1.91.815 3.007.815 3.275 0 5.934-2.659 5.934-5.935 0-3.276-2.659-5.935-5.934-5.935zm3.896 8.352c-.173.486-.867.892-1.396.95-.445.048-1.027.078-1.666-.128-.638-.206-1.503-.666-2.457-1.517-.954-.85-1.528-1.748-1.758-2.106-.23-.357-.492-.892-.492-1.428 0-.536.27-.803.396-.941.127-.138.283-.206.396-.206.113 0 .227 0 .324.005.104.005.244-.04.382.288.15.357.514 1.25.558 1.341.045.09.076.198.016.317-.06.118-.09.198-.18.303-.09.103-.19.23-.27.31-.09.09-.187.188-.08.373.107.185.477.787.994 1.246.666.593 1.23.778 1.405.864.175.086.278.073.382-.047.104-.12.443-.518.56-.694.118-.175.237-.148.396-.089.16.06 1.01.477 1.185.565.174.088.29.132.332.205.043.073.043.424-.13.91zM12 0C5.373 0 0 5.372 0 12c0 2.115.55 4.1 1.51 5.845L0 24l6.326-1.474C7.943 23.367 9.913 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.018 22.083c-1.92 0-3.8-.517-5.44-1.492l-.39-.232-3.71.865.885-3.23-.255-.407c-1.07-1.706-1.636-3.693-1.636-5.74 0-5.998 4.88-10.877 10.878-10.877 2.906 0 5.637 1.132 7.69 3.186 2.054 2.053 3.185 4.785 3.184 7.692 0 5.997-4.88 10.877-10.88 10.877z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="bg-white text-black h-[70px] flex items-center border-b border-black/8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center h-full">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="ezrankings logo" className="h-12 max-h-12 object-contain" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="flex items-center gap-7 h-full max-[992px]:hidden">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="relative flex items-center h-full group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="bg-transparent border-none cursor-pointer font-sans text-[0.95rem] font-semibold text-black flex items-center gap-1.5 py-4 transition-colors duration-150 hover:text-primary group-hover:text-primary">
                  {item.name} <ChevronDown size={14} className="transition-all duration-250 opacity-70 group-hover:rotate-180 group-hover:opacity-100" />
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 bg-white border border-black/8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-3 min-w-[230px] flex flex-col gap-1.5 transition-all duration-250 z-50 ${activeDropdown === index ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-2.5'}`}>
                  {item.dropdownItems.map((dropItem, idx) => (
                    <a 
                      key={idx} 
                      href={`#${dropItem.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="p-2.5 px-3.5 rounded-lg text-[0.9rem] font-medium text-[#333333] transition-all duration-150 block hover:bg-primary/6 hover:text-primary hover:translate-x-1"
                    >
                      {dropItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* CTA Action */}
          <div className="max-[992px]:hidden">
            <a href="#proposal" className="bg-primary text-white border border-primary rounded-full py-3 px-6 font-semibold inline-flex items-center gap-2 text-[0.95rem] shadow-[0_4px_14px_rgba(18,162,240,0.25)] transition-all duration-250 hover:bg-black hover:border-black hover:text-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] group">
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
              <div className={`overflow-hidden flex flex-col gap-2 pl-4 transition-all duration-250 ${activeDropdown === index ? 'max-h-[500px] pt-2 pb-2' : 'max-h-0'}`}>
                {item.dropdownItems.map((dropItem, idx) => (
                  <a 
                    key={idx} 
                    href={`#${dropItem.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="block py-1.5 text-[#555555] text-[0.95rem] font-medium transition-colors duration-150 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {dropItem}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-6 pt-4">
            <a href="#proposal" className="bg-primary text-white border border-primary rounded-full py-3 px-6 font-semibold inline-flex items-center gap-2 text-[0.95rem] shadow-[0_4px_14px_rgba(18,162,240,0.25)] transition-all duration-250 hover:bg-black hover:border-black hover:text-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] group w-full justify-center" onClick={() => setIsOpen(false)}>
              Get a Free Proposal <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-[3px]" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
