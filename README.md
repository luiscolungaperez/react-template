# React Template with TypeScript, Vite and Material-UI

## 📦 Project Setup

### Prerequisites

- Node.js (18.x or higher)
- pnpm package manager

### Available Scripts

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run ESLint
pnpm lint

# Fix ESLint
pnpm lint:fix

# Format code
pnpm format
```

## 🚀 Project Structure

```
src/
├── app/                   # Routes configuration
│   └── App.tsx
├── assets/                # Contenido estatico
│   └── styles/
│       └── index.css      # Global styles
├── components/            # Reusable components
│   ├── auth/
│   └── shared/
│       └── header.tsx
├── pages/                 # Pages
│   ├── auth
|   |   └── sign-up.tsx
│   └── index.ts
├── libs/                  # lib
├── hooks/                 # Custom hooks
├── context/               # React contexts
├── utils/                 # Utils functions
├── types/                 # Type declarations
│   └── app.d.ts
├── vite-env.d.ts
└── main.tsx               # Provider configuration
```

## ⚙️ Technologies

- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Shadcn](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 🛠️ Development Tools

The project includes configuration for:

- TypeScript strict mode
- ESLint with React hooks rules
- Prettier code formatting
- Path aliases (`@/*` points to src)

## 🏗️ Build Process

The build process uses Vite production bundling:

1. `vite build`: Production bundle generation

Output is generated in the `dist/` directory.
