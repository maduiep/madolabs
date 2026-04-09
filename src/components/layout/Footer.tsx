import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram } from '@/components/ui/SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="relative flex items-center h-[40px] block">
              <img
                src="/assets/Logo.png"
                alt="MadoLabs"
                className="h-full w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#999999] max-w-[300px] leading-relaxed">
              Strategic design agency building digital experiences that drive measurable business growth through innovation and AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#E2FF3B] hover:text-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#E2FF3B] hover:text-black transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#E2FF3B] hover:text-black transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#E2FF3B] font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Case Studies', 'Insights'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-[#999999] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#E2FF3B] font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Digital Product Design', 'Web Architecture', 'Brand Strategy', 'AI Integration'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-[#999999] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#E2FF3B] font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-[#999999]">
              <li className="flex items-center">
                <span className="text-[#E2FF3B] mr-2">✉</span>
                hello@madolabs.com
              </li>
              <li className="flex items-center">
                <span className="text-[#E2FF3B] mr-2">✆</span>
                +1 (234) 567-890
              </li>
              <li className="leading-relaxed">
                <span className="text-[#E2FF3B] mr-2">📍</span>
                123 Innovation Drive<br />Tech District, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#555555] uppercase tracking-widest">
          <p>© {currentYear} MADOLABS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
