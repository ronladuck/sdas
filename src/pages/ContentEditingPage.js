import React from "react";
import { Edit, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../components/ui/SectionHeader";

const ContentEditingPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleContactClick = () => {
    navigate("/", { state: { scrollTo: "contact" } });
    // Wait for navigation, then scroll to contact
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-8">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </div>

        <SectionHeader
          badge={
            <>
              <Edit size={16} className="mr-2" /> Content Editing Services
            </>
          }
          title={
            <>
              Professional{" "}
              <span className="gradient-text">Content Editing</span> Services
            </>
          }
          subtitle="Polish your content to perfection with our professional editing services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Content Editing Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Photo Enhancement
                    </h4>
                    <p className="text-gray-600">
                      Professional photo editing, retouching, and enhancement
                      services.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Video Production
                    </h4>
                    <p className="text-gray-600">
                      Comprehensive video editing, including cutting,
                      transitions, and effects.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Color Grading
                    </h4>
                    <p className="text-gray-600">
                      Professional color correction and grading for photos and
                      videos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Motion Graphics
                    </h4>
                    <p className="text-gray-600">
                      Dynamic motion graphics and visual effects for your
                      content.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Content Editing Services?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Advanced Software
                    </h4>
                    <p className="text-gray-600">
                      Industry-standard editing tools and software for
                      professional results.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Expert Editors
                    </h4>
                    <p className="text-gray-600">
                      Skilled editors with years of experience in content
                      enhancement.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Quick Delivery
                    </h4>
                    <p className="text-gray-600">
                      Fast turnaround times without compromising on quality.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Custom Solutions
                    </h4>
                    <p className="text-gray-600">
                      Tailored editing packages to meet your specific content
                      needs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Let's discuss your content editing needs and create something
                amazing together.
              </p>
              <button
                onClick={handleContactClick}
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentEditingPage;
