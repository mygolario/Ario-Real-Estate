# Ario Real Estate Landing Page

A premium, pixel-perfect, RTL landing page for Ario Real Estate, built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Vazirmatn (via `next/font/google`)
- **Icons**: Lucide React
- **Images**: Unsplash (configured in `next.config.ts`)

## Features

- **RTL Support**: Fully configured for Persian language (`dir="rtl"`).
- **Responsive Design**: Optimized for Mobile, Tablet, and Desktop.
- **Modern UI**: Glassmorphism, soft shadows, and smooth transitions.
- **Components**: Modular and reusable component structure.

## Getting Started

### Prerequisites

- Node.js 18+ installed.

### Installation

1.  Clone the repository (or use the provided files).
2.  Install dependencies:

    ```bash
    npm install
    ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

- `app/`: App Router pages and layout.
- `components/`: Reusable UI components (Header, Hero, Sections, Footer).
- `public/`: Static assets.
- `next.config.ts`: Configuration for remote images.
- `tailwind.config.ts`: Tailwind configuration.

## Images

All images are sourced from Unsplash. The `next.config.ts` file is configured to allow loading images from `images.unsplash.com`.
