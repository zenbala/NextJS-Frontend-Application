# Next.js Product Catalog

A small product catalog and cart app built with Next.js App Router, React, and the DummyJSON products API.

## Features

- Searchable product catalog with debounced API requests.
- Product details route for `/products/[productId]`.
- Cart state shared with React context and persisted in `localStorage`.
- Quantity updates, item removal, and cart total summary.
- Optimized remote product images through `next/image`.

## Approach and Design Choices

The app uses the Next.js App Router to keep routing simple and predictable: the catalog lives on the home route, product details use a dynamic route, and the cart has its own client page. Product data is fetched from DummyJSON, with product detail responses cached by Next.js for better repeat-load performance.

Cart behavior is handled with a lightweight React context instead of adding a larger state library. This keeps the implementation easy to follow while still sharing cart state across the navigation, product cards, product detail page, and cart page. The cart is also persisted in `localStorage` so items remain after a browser refresh.

Search is debounced before calling the API to avoid unnecessary requests while the user is typing. Product images use `next/image` with an allowed remote image host, which keeps the app aligned with Next.js performance recommendations.

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
