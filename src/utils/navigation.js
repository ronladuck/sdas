/**
 * Smooth scroll to a section by ID
 * @param {string} sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

/**
 * Navigation menu items configuration
 */
export const NAVIGATION_ITEMS = [
  { label: 'Content Calendar', id: 'ai-content' },
  { label: 'Services', id: 'services' },
  { label: 'Testimonials', id: 'testimonials' }
]; 