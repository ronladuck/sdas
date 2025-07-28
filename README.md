# Stop, Drop & Scroll - Creative Marketing Agency

A modern, responsive React landing page for a creative marketing agency specializing in photography, videography, and content creation.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds, glass effects, and smooth animations
- **Fully Responsive**: Optimized for all device sizes
- **Component-Based Architecture**: Clean, modular code structure
- **Contact Form**: Integrated with Supabase for form submissions
- **Smooth Scrolling**: Navigate between sections seamlessly
- **Professional Animations**: Framer Motion powered interactions
- **Accessibility**: Proper focus states and reduced motion support

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/           # Main page sections
│   │   ├── Navigation.js
│   │   ├── HeroSection.js
│   │   ├── ServicesSection.js
│   │   ├── TestimonialsSection.js
│   │   ├── FAQSection.js
│   │   ├── ContactSection.js
│   │   └── Footer.js
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.js
│   │   └── SectionHeader.js
│   └── ContactForm.js      # Contact form component
├── config/
│   └── supabase.js         # Supabase configuration
├── constants/
│   └── data.js             # Application data and constants
├── utils/
│   ├── cn.js               # Class name utility
│   └── navigation.js       # Navigation utilities
├── App.js                  # Main application component
├── index.css              # Global styles
└── index.js               # Application entry point
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd stop-drop-scroll
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables (Optional)**
   
   Create a `.env` file in the root directory for Supabase integration:
   ```env
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

## 📧 Contact Form Setup

The contact form supports two modes:

### Demo Mode (Default)
- Form submissions are logged to the console
- No external dependencies required
- Perfect for development and testing

### Production Mode (with Supabase)
1. Set up a Supabase project
2. Create a `contacts` table with the following columns:
   - `id` (int8, primary key)
   - `name` (text)
   - `email` (text)
   - `phone` (text, nullable)
   - `company` (text, nullable)
   - `service` (text)
   - `message` (text)
   - `created_at` (timestamptz)
3. Add your Supabase credentials to the `.env` file

## 🎨 Customization

### Data & Content
Edit `src/constants/data.js` to customize:
- Services offered
- Testimonials
- FAQ items
- Contact information
- Company statistics

### Styling
- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Inline with Tailwind classes

### Components
All components are modular and can be easily:
- Reordered in `src/App.js`
- Modified individually
- Extended with new features

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Available Scripts

```bash
npm start          # Start development server
npm test           # Run tests
npm run build      # Build for production
npm run eject      # Eject from Create React App
```

## 📦 Dependencies

### Core
- **React**: UI library
- **Framer Motion**: Animations
- **Lucide React**: Icons

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

### Optional
- **Supabase**: Backend for contact form

## 🎯 Performance

The application is optimized for performance with:
- Code splitting by component
- Lazy loading where appropriate
- Optimized images and assets
- Minimal bundle size

## 🔒 Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Focus indicators
- Reduced motion respect

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: mark@stopdropscroll.co
- Phone: 202-555-0188
