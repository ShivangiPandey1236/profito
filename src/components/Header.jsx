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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
              </svg>
              <span>+91-9560133711</span>
            </a>
            <span className="text-white/20 select-none">|</span>
            <a href="tel:+18557630320" className="text-white inline-flex items-center gap-2 transition-colors duration-150 hover:text-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
              </svg>
              <span>+1-855-763-0320</span>
            </a>
            <span className="text-white/20 select-none">|</span>
            <a href="mailto:contactus@ezrankings.com" className="text-white inline-flex items-center gap-2 transition-colors duration-150 hover:text-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <span>contactus@ezrankings.com</span>
            </a>
            <span className="text-white/20 select-none">|</span>
            <a href="https://wa.me/919560133711" target="_blank" rel="noopener noreferrer" className="text-white inline-flex items-center gap-2 transition-colors duration-150 hover:text-[#25d366]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
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
