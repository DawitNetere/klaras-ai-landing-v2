# Claras AI Landing Page

## Overview
Marketing landing page for Claras AI, an AI-powered full-service accounting platform. Built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

## Project Architecture
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS + shadcn/ui component library
- **Routing**: React Router v6
- **State Management**: TanStack React Query
- **Deployment**: Static site (Vite build → `dist/`)

## Project Structure
- `src/pages/` - Route pages (Index, Product, Pricing, Contact, etc.)
- `src/components/` - Reusable UI components and landing page sections
- `src/components/ui/` - shadcn/ui primitives
- `src/assets/` - Images, logos, favicons
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions (includes Supabase client)
- `public/` - Static assets (robots.txt, sitemap.xml)

## Development
- Dev server runs on port 5000 (`npm run dev`)
- Build: `npm run build` → outputs to `dist/`

## External Services
- Supabase (client configured in `src/lib/supabase.ts`)
- Cal.com embed for scheduling
- Google Analytics (G-S5J8S12YC4)
- Netlify Forms (contact form detection in index.html)
