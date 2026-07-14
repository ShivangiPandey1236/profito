import React, { useState } from 'react'
import { TrendingUp, ArrowRight, Check } from 'lucide-react'
import logo from '../assets/logo-pr (1).png'
export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  return (
    <footer className="bg-bg-surface border-t border-border-color pt-20 mt-auto">
      <div className="w-full max-w-[1600px] mx-auto px-8 pb-16">
        <div className="grid grid-cols-4 gap-10 max-[992px]:grid-cols-2 max-[576px]:grid-cols-1">
          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <a href="/" className="flex items-center gap-2 text-[1.6rem] font-bold text-white">
              {/* <div className="text-primary flex items-center">
                <TrendingUp size={24} />
              </div> */}
              <a href="/" className="flex items-center">
                          <img src={logo} alt="ezrankings logo" className="h-12 max-h-12 object-contain" />
                        </a>
              {/* <span className="font-bold">Profito</span> */}
            </a>
            <p className="text-text-secondary text-[0.95rem] leading-relaxed">
              Empowering individuals and businesses to track, analyze, and multiply their wealth with institutional-grade intelligence.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-white/[0.02] border border-border-color text-text-secondary transition-all duration-250 hover:bg-primary/10 hover:border-primary hover:text-primary hover:-translate-y-[3px] hover:shadow-glow" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-white/[0.02] border border-border-color text-text-secondary transition-all duration-250 hover:bg-primary/10 hover:border-primary hover:text-primary hover:-translate-y-[3px] hover:shadow-glow" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24" fill="currentColor">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
                {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg> */}
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-white/[0.02] border border-border-color text-text-secondary transition-all duration-250 hover:bg-primary/10 hover:border-primary hover:text-primary hover:-translate-y-[3px] hover:shadow-glow" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-white/[0.02] border border-border-color text-text-secondary transition-all duration-250 hover:bg-primary/10 hover:border-primary hover:text-primary hover:-translate-y-[3px] hover:shadow-glow" aria-label="Slack">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.3 0-74.7-33.4-74.7-74.7s33.4-74.7 74.7-74.7 74.7 33.4 74.7 74.7-33.4 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zM398.8 80c-17.8-17.8-41.5-27.6-66.7-27.6H115.9C63.5 52.4 21 94.9 21 147.3v217.4c0 52.4 42.5 94.9 94.9 94.9h216.2c25.2 0 48.9-9.8 66.7-27.6 17.8-17.8 27.6-41.5 27.6-66.7V147.3c0-25.2-9.8-48.9-27.6-66.7zM384 364.7c0 28.7-23.2 51.9-51.9 51.9H115.9c-28.7 0-51.9-23.2-51.9-51.9V147.3c0-28.7 23.2-51.9 51.9-51.9h216.2c28.7 0 51.9 23.2 51.9 51.9v217.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-[0.9rem] font-bold uppercase tracking-wider text-white mb-6">Platform</h4>
            <ul className="list-none flex flex-col gap-3.5">
              <li><a href="#features" className="text-text-secondary text-[0.95rem] font-medium transition-all duration-150 hover:text-primary hover:pl-1">Portfolio Tracker</a></li>
              <li><a href="#analytics" className="text-text-secondary text-[0.95rem] font-medium transition-all duration-150 hover:text-primary hover:pl-1">Yield Analytics</a></li>
              <li><a href="#tax" className="text-text-secondary text-[0.95rem] font-medium transition-all duration-150 hover:text-primary hover:pl-1">Tax Reports</a></li>
              <li><a href="#security" className="text-text-secondary text-[0.95rem] font-medium transition-all duration-150 hover:text-primary hover:pl-1">Security Vault</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[0.9rem] font-bold uppercase tracking-wider text-white mb-6">Company</h4>
            <ul className="list-none flex flex-col gap-3.5">
              <li><a href="#about" className="text-text-secondary text-[0.95rem] font-medium transition-all duration-150 hover:text-primary hover:pl-1">About Us</a></li>
              <li>
                <a href="#careers" className="inline-flex items-center gap-2 text-text-secondary text-[0.95rem] font-medium transition-all duration-150 hover:text-primary hover:pl-1">
                  Careers <span className="text-[0.65rem] font-bold bg-primary/15 text-primary py-0.5 px-2 rounded-full uppercase tracking-wider border border-primary/25">Hiring</span>
                </a>
              </li>
              <li><a href="#press" className="text-text-secondary text-[0.95rem] font-medium transition-all duration-150 hover:text-primary hover:pl-1">Press Kit</a></li>
              <li><a href="#contact" className="text-text-secondary text-[0.95rem] font-medium transition-all duration-150 hover:text-primary hover:pl-1">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[0.9rem] font-bold uppercase tracking-wider text-white mb-6">Stay Updated</h4>
            <p className="text-text-secondary text-[0.95rem] leading-normal">Subscribe to our newsletter for insights on profit-optimization strategies.</p>

            <form onSubmit={handleSubscribe} className="mt-2">
              {subscribed ? (
                <div className="flex items-center gap-2 text-primary text-[0.95rem] font-semibold bg-primary/8 py-3 px-5 rounded-full border border-primary/20 animate-fade-in">
                  <Check size={18} />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <div className="flex relative w-full">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 pl-5 pr-14 bg-white/[0.03] border border-border-color rounded-full text-white font-sans text-[0.95rem] transition-all duration-250 focus:outline-none focus:border-primary focus:bg-white/[0.05] focus:ring-3 focus:ring-primary/15 placeholder:text-text-muted"
                    aria-label="Email address for newsletter"
                  />
                  <button type="submit" className="absolute right-[5px] top-[5px] bottom-[5px] w-[34px] h-[34px] rounded-full bg-primary border-none text-black flex items-center justify-center cursor-pointer transition-all duration-250 hover:bg-primary-hover hover:scale-105" aria-label="Subscribe">
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-color py-8 bg-black">
        <div className="w-full max-w-[1600px] mx-auto px-8 flex justify-between items-center gap-4 max-[768px]:flex-col max-[768px]:text-center">
          <p className="text-text-muted text-[0.9rem]">
            © {new Date().getFullYear()} Profito Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-text-muted text-[0.9rem] font-medium hover:text-white transition-colors duration-150">Privacy Policy</a>
            <a href="#terms" className="text-text-muted text-[0.9rem] font-medium hover:text-white transition-colors duration-150">Terms of Service</a>
            <a href="#cookies" className="text-text-muted text-[0.9rem] font-medium hover:text-white transition-colors duration-150">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
