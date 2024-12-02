# Medical Practice Management Dashboard

## Overview

A comprehensive medical practice management system built with Next.js 14, offering real-time statistics, practice management, and secure authentication. This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Features

- 📊 **Interactive Dashboard**
  - Real-time practice statistics
  - Performance metrics
  - Activity monitoring
- 👥 **Practice Management**
  - Add/Edit practices
  - Status tracking
  - Contact management
- 🔐 **Authentication**
  - Secure login system
  - Role-based access
- 📱 **Responsive Design**
  - Desktop, tablet, and mobile layouts
  - Collapsible sidebar
  - Adaptive components

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** Radix UI + ShadcnUI
- **Animations:** Framer Motion
- **State Management:** React Context
- **Code Quality:** ESLint + Prettier

## Getting Started

1. **Clone the repository**

````bash
git clone https://github.com/veruschkaseptember/bluegrass_assessment/bg.git
cd bg

Install dependencies
npm install

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

├── app/ # Next.js app router
│ ├── (auth)/ # Authentication routes
│ ├── dashboard/ # Dashboard pages
│ └── profile/ # User profile pages
├── components/  
│ ├── dashboard/ # Dashboard components
│ │ ├── chart-stats.tsx
│ │ ├── dashboard-header.tsx
│ │ ├── practices-table.tsx
│ │ ├── stats-dashboard.tsx
│ │ └── welcome-section.tsx
│ └── ui/ # Reusable UI components
├── lib/ # Utilities and helpers
├── public/ # Static assets
└── styles/ # Global styles

## Key Features

Dashboard
Real-time statistics display
Practice management interface
Interactive charts and graphs
Activity monitoring
Practice Management
Add and edit practice details
Status tracking
Contact information management
Audit logging
Authentication
Secure login system
Role-based access control
Session management
Password recovery
Responsive Design
Mobile-first approach
Adaptive layouts
Touch-friendly interfaces
Collapsible navigation

## Available scripts

npm run dev # Start development server
npm run build # Build production bundle
npm run start # Start production server
npm run lint # Run ESLint
npm test # Run tests

## Development Guidelines

Code Standards
Use TypeScript for type safety
Follow ESLint configuration
Implement Prettier formatting
Write meaningful commits
Component Structure
Add JSDoc documentation
Maintain consistency
State Management
Use React Context
Handle loading states
Implement error boundaries
Maintain data consistency

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Bluegrass Assessment Questions

a.How long the assessment took you in man hours?
3.5 business days

b. List any functionality you were not able to complete or known issues within the code you were not able
to resolve?
Generally speaking I would not commit all my code at once, I woul dcraete my repo and do several commits.
However, due to illness and honesty this is what I had completed by Sunday/Monday of the 25th and was meant to implement all of the mobile responsiveness but
was too ill to do so and wanted to be honest with what I had completed in the timeframe provided.

c. What parts of the test were most challenging to you?
Side bar implementation with dashboard - simply adding the desired animation.
