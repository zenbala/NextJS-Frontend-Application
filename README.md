# Next.js Product Catalog

A small product catalog and cart app built with Next.js App Router, React, and the DummyJSON products API.

## Features

- Searchable product catalog with debounced API requests.
- Product details route for `/products/[productId]`.
- Cart state shared with React context and persisted in `localStorage`.
- Quantity updates, item removal, and cart total summary.
- Optimized remote product images through `next/image`.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Project Structure

- `src/app` contains the App Router pages and layout.
- `src/components` contains reusable catalog, product, and navigation components.
- `src/context/CartContext.js` contains the shared cart state and actions.
- `next.config.ts` configures Next.js, Turbopack, and remote image support.

## Pre-Push Check

Before pushing to GitHub, run:

```bash
npm run lint
npm run build
```
