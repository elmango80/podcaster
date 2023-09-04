<div align="center">
  <img src="./public/favicon.svg" alt="Podcaster logo" width='128' height='128'/>
  <h1>Podcaster</h1>
  <img src="https://github.com/elmango80/podcaster/assets/24403510/58013d98-8338-477f-af3a-fadf5071af45" alt="Podcaster screenshot" />
  <h4>🎤 Escucha, descubre, disfruta: ¡Podcaster lo hace fácil! 🎧</h4>
</div>
<br/>

![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat-square) ![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square) ![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square) ![SWC Badge](https://img.shields.io/badge/SWC-EEE?logo=swc&logoColor=000&style=flat-square) ![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square) ![PostCSS Badge](https://img.shields.io/badge/PostCSS-DD3A0A?logo=postcss&logoColor=fff&style=flat-square) ![React Query Badge](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff&style=flat-square) ![React Router Badge](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat-square) ![ESLint Badge](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff&style=flat-square) ![Prettier Badge](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=flat-square) ![Jest Badge](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff&style=flat-square) ![Testing Library Badge](https://img.shields.io/badge/Testing%20Library-E33332?logo=testinglibrary&logoColor=fff&style=flat-square)

This web application allows you to explore the top 100 iTunes podcasts in a simple and straightforward manner. Find your favorite shows and start listening to episodes in the blink of an eye. Simple and straightforward.

## 🚀 Installation

Clone the repository from GitHub using the following command:

```bash
git clone https://github.com/elmango80/podcaster.git
cd podcaster
npm install
```

## 💻 Usage

### 🚶 First steps

Once the installations are complete, you can start the application locally with the following command:

```bash
npm run start:dev
```
This will launch the application in your default web browser for development.

To build the application in production mode (minifying assets), use the following command:

```bash
npm run build:prod
```

If you want to build the application in development mode (without minifying assets), you can use the following command:

```bash
npm run build:dev
```

After the compilation, the optimized assets will be available in the output directory, ready to be deployed on the server.

If you wish to run unit and integration tests, you can execute the following command:

```bash
npm run test
```

### 🌴 Understanding Podcaster folder structure

```bash
podcaster/
│
├── 📁 src/                   # Main source code directory
│   ├── 📁 assets/            # Multimedia resources (images, audio)
│   ├── 📁 components/        # Reusable UI components
│   ├── 📁 context/           # Global state management
│   ├── 📁 hooks/             # Custom hooks
│   ├── 📁 pages/             # Main app pages/views
│   ├── 📁 routes/            # Route configuration
│   ├── 📁 service/           # Data management services
│   ├── 📁 types/             # Data types and definitions
│   ├── 📄 App.css            # Global styles
│   ├── 📄 App.tsx            # Main entry point (React)
│   └── ...
│
├── public/                   # Public resources directory
│   ├── 📄 favicon.svg        # Website icon (SVG)
│   └── ...
│
├── tests/                    # Unit and integration tests
│
├── 📄 .editorconfig          # Code style configuration
├── 📄 .eslintrc.js           # ESLint rules/config
├── 📄 .gitignore             # Git ignore list
├── 📄 .prettierrc.cjs        # Prettier code formatting config
├── 📄 index.html             # Main HTML page
├── 📄 jest.config.js         # Jest testing config
├── 📄 package.json           # Project dependencies/config
├── 📄 postcss.config.js      # PostCSS configuration for styles
├── 📄 tailwind.config.js     # Tailwind CSS configuration
├── 📄 tsconfig.json          # TypeScript configuration
└── 📄 vite.config.js         # Vite development bundler config
```

## 🤝 Contributing

* If you want to implement a new feature/script, please, open an issue first
