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
pnpm dev

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
├── app/                   # Configuracion principal de la aplicación
│   └── App.tsx
├── assets/                # Contenido estatico
│   └── styles/
│       └── index.css      # Global styles
├── components/            # Reusable components
│   └── shared/            # Componentes reutilizables en la app
│       └── Header/
├── layouts/               # Contenedor de layouts
│   └── Layout.tsx
├── pages/                 # Pages
│   ├── About.tsx
│   ├── Home.tsx
│   └── index.ts
├── routes/                # Routes configuration
│   └── index.tsx
├── types/                 # Type declarations
│   └── app.d.ts
├── vite-env.d.ts
└── main.tsx               # Entrada principal de la aplicación
```

## ⚙️ Technologies

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Material-UI](https://mui.com/)
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
