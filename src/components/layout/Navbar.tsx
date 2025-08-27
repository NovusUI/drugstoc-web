// src/components/Navbar.tsx
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 shadow-sm backdrop-blur py-5">
      <div className="mx-auto px-4 lg:px-24 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-10">
          <a href="/">
            <img src="/DSlogo.png" alt="DrugStoc" className="h-10" />
          </a>
          
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-700">
          {/* Products Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex items-center space-x-1 hover:text-[#5EA3D6]"
            >
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isProductsOpen && (
              <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md p-2 z-50">
                {["Medina", "Pillometer", "Thegoodpill", "Blueshield", "Drugstoc pay"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`/products/${item.toLowerCase().replace(" ","")}`}
                      className="block px-3 py-1 hover:bg-gray-100 rounded"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            )}
          </li>

          {["Services", "Partnership", "Careers", "About Us", "Learning"].map(
            (link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase().replace(" ","")}`} className="hover:text-[#5EA3D6]">
                  {link}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <a
            href="#"
            className="bg-[#5EA3D6] hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            Shop on web
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-3 bg-white/90 backdrop-blur shadow-lg relative z-40">
          <div className="relative">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex items-center justify-between w-full text-left text-gray-700 hover:text-[#5EA3D6]"
            >
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isProductsOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md p-2 z-50">
                {["Medina", "Pillometer", "Thegoodpill", "Blueshield", "Drugstoc pay"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`/products/${item.toLowerCase().replace(" ","")}`}
                      className="block px-3 py-1 hover:bg-gray-100 rounded text-gray-700"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            )}
          </div>

          {["Services", "Partnership", "Careers", "About Us", "Learning"].map(
            (link) => (
              <a
                key={link}
                href={`/${link.toLowerCase().replace(" ","")}`}
                className="block hover:text-[#5EA3D6] text-gray-700"
              >
                {link}
              </a>
            )
          )}

          {/* Mobile Button */}
          <a
            href="#"
            className="block w-full text-center bg-[#5EA3D6] hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            Shop on web
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
