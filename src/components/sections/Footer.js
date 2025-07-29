import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CONTACT_INFO } from "../../constants/data";

const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    const serviceRoutes = {
      Photography: "/services/photography",
      Videography: "/services/videography",
      "Content Editing": "/services/content-editing",
      "Social Media": "/", // Navigate to home page for social media (not implemented yet)
    };

    if (serviceRoutes[service]) {
      navigate(serviceRoutes[service]);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const handleLogoClick = () => {
    navigate("/");
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <button
              onClick={handleLogoClick}
              className="text-2xl font-bold gradient-text mb-4 hover:opacity-80 transition-opacity"
            >
              Stop, Drop & Scroll
            </button>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered creative agency that generates personalized content
              calendars and provides professional photography, videography, and
              content creation services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById("ai-content");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Content Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("Photography")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Photography
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("Videography")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Videography
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("Content Editing")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Content Editing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address.street + ", " + CONTACT_INFO.address.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.address.street}
                  <br />
                  {CONTACT_INFO.address.city}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Stop, Drop & Scroll. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
