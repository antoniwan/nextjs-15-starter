# Raiz - Next.js 15.2.1 Template

Raiz (Spanish for "root") is a minimal, best-in-class foundation for your Next.js projects. It combines the power of Next.js 15 with shadcn/ui components, Radix UI primitives, and Tailwind CSS for styling.

## Features

- ⚡️ Next.js 15.2.1 with App Router
- 🎨 shadcn/ui components
- 🎯 Radix UI primitives
- 🎭 Tailwind CSS for styling
- 🌓 Dark mode support
- 📱 Fully responsive design
- 🔧 TypeScript support
- 🎨 Customizable theme

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextjs-15-starter.git
cd nextjs-15-starter
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── mode-toggle.tsx   # Theme toggle component
├── lib/                   # Utility functions and configurations
└── public/               # Static assets
```

## Customization

### Theme Configuration

The template uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.ts` file:

```typescript
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... other color configurations
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### Adding Components

You can add new shadcn/ui components using the CLI:

```bash
npx shadcn-ui@latest add button
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
