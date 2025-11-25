# Claras AI Landing Page

## Project Description

Official landing page for **ClarasAI** - Full-Service AI Accounting, Backed by Expert Accountants. We combine advanced AI automation with in-house accountants to deliver fast, accurate, end-to-end accounting for modern businesses.

**Website:** [clarasai.com](https://www.clarasai.com)

## Pages

- **Home** (`/`) - Main landing page with hero, features, and CTAs
- **Product** (`/product`) - AI accounting features and capabilities
- **Pricing** (`/pricing`) - Pricing plans and comparison
- **About** (`/about`) - Team and company information
- **Contact** (`/contact`) - Contact form and Cal.com booking
- **Privacy Policy** (`/privacy`) - Privacy policy
- **Terms of Service** (`/terms`) - Terms of service

## Features

- Modern React + TypeScript application
- Tailwind CSS for styling
- Responsive design
- Interactive AI workflow demonstrations
- Invoice automation with animated process visualization
- Real-time financial dashboards
- Automated reconciliation features
- Cal.com integration for demo bookings
- SEO optimized with meta tags and sitemap

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:8080`

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Routing:** React Router
- **Scheduling:** Cal.com Embed

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ui/         # shadcn/ui components
│   └── ...         # Custom section components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Images and static files
```

## Deployment

Build the project and deploy the `dist` folder to any static hosting provider (Netlify, Vercel, etc.).
