import React from "react";
import FooterBackground from "./FooterBackground";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1532] text-white relative h-auto md:h-[470px] overflow-hidden">
  
      <FooterBackground />
      <div className="z-50 max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-16">
          {/* Logo & Description */}
          <div className="flex-1">
            <img src="/DSlogo.png" alt="DrugStoc" className="h-6 mb-3 md:mb-4" loading="lazy" />
            <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
              Experience the DrugStoc App,
              <br className="hidden sm:block" />
              Manage your orders, track deliveries,
              <br className="hidden sm:block" />
              discover new products, and enjoy exclusive
              <br className="hidden sm:block" />
              offers, all from your phone.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 md:mt-4">
            <a
                href="https://play.google.com/store/apps/details?id=com.drugstoc.app"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-out-up"
              >
              <img src="/playdownload.svg" alt="Google Play" className="h-8 sm:h-10" loading="lazy" />
              </a>
              <a
                href="https://apps.apple.com/ng/app/drugstoc-mobile/id1467205425"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-out-up"
              >
              <img src="/appledownload.svg" alt="App Store" className="h-8 sm:h-10"  loading="lazy"/>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 text-left ">
            {/* Company */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-[#5EA3D6] uppercase mb-3 md:mb-10">
                Company
              </h3>
              <ul className="space-y-2 sm:space-y-3 md:space-y-10 text-xs sm:text-sm text-gray-300">
                <li><Link to="/aboutus" className="hover:text-[#5EA3D6]">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-[#5EA3D6]">Careers</Link></li>
                <li><Link to="/" className="hover:text-[#5EA3D6]">Contact Us</Link></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-[#5EA3D6] uppercase mb-3 md:mb-10">
                Help
              </h3>
              <ul className="space-y-2  md:space-y-10 text-xs sm:text-sm text-gray-300">
                <li><Link to="/" className="hover:text-[#5EA3D6]">FAQs</Link></li>
                <li><Link to="/" className="hover:text-[#5EA3D6]">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-[#5EA3D6] uppercase mb-3 md:mb-10">
                Resources
              </h3>
              <ul className="space-y-2  md:space-y-10 text-xs sm:text-sm text-gray-300">
                <li><Link to="learning" className="hover:text-white">Drugstoc Learning</Link></li>
                <li><Link to="/" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-6 md:mt-8 w-full flex justify-center">
        <div className="border-t border-gray-600 w-full max-w-7xl mx-4 sm:mx-6"></div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-xs text-gray-400 py-3 md:py-4 px-4">
        © Copyright 2025, All Rights Reserved by DrugStoc
      </div>
     
    </footer>
  );
};

export default Footer;
