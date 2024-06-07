# NStart Project

🚨🚨 Project under construction 🚨🚨

This is a starter template for projects using Next.js 14 with TypeScript and Tailwind CSS. It includes a basic folder structure to help you get started quickly.

## Table of Contents

- NStart Project
  - Table of Contents
  - [Dependencies](#dependencies)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Installation Steps](#installation-steps)
  - [Available Scripts](#available-scripts)
    - [Start Project](#start-project)
    - [Build Project](#build-project)
    - [Start Production Server](#start-production-server)
  - [Tailwind CSS Configuration](#tailwind-css-configuration)
  - [Contributing](#contributing)
  - [License](#license)
  - [Folder Structure](#folder-structure)
  - [Author](#author)

## Dependencies

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Installation

### Prerequisites

- Node.js
- Yarn, pnpm or npm (personal preference)

### Installation Steps

1. Clone the repository

   1. Usando https

   ```bash
   git clone https://github.com/samuelrms/nstart-project.git
   ```

   2. Usando SSH

   ```bash
    git clone git@github.com:samuelrms/nstart-project.git
   ```

   3. Usando GitHub CLI

   ```bash
    gh repo clone samuelrms/nstart-project
   ```

2. Navigate to the project directory:

   ```bash
   cd nstart-project
   ```

3. Install the dependencies:

   1. If you are using `npm` as your package manager, you can install it by running the following command in your terminal:

   ```bash
    npm i next-otp
   ```

   2. If you are using `yarn` as your package manager, you can install it by running the following command in your terminal:

   ```bash
    yarn i next-otp
   ```

   3. If you are using `pnpm` as your package manager, you can install it by running the following command in your terminal:

   ```bash
   pnpm add next-otp
   ```

## Available Scripts

In the project directory, you can run:

### Start Project

1. npm

```bash
npm run dev
```

2. yarn

```bash
yarn dev
```

3. pnpm

```bash
pnpm dev
```

Runs the app in development mode.
Open <http://localhost:3000> to view it in your browser.

### Build Project

1. npm

```bash
npm run build
```

2. yarn

```bash
yarn build
```

3. pnpm

```bash
pnpm build
```

Builds the app for production.

### Start Production Server

1. npm

```bash
npm run start
```

2. yarn

```bash
yarn start
```

3. pnpm

```bash
pnpm start
```

Starts the production server.

## Tailwind CSS Configuration

The tailwind.config.js file contains Tailwind CSS configurations.
To customize the styles, edit this file as needed.

## Contributing

Feel free to contribute to this project.
To get started, you can open an `issue` or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Folder Structure

    .
    ╠══ .env
    ╠══ next.config.mjs
    ╠══ postcss.config.mjs
    ╠══ LICENSE
    ╠══ pnpm-lock.yaml
    ╠══ tailwind.config.ts
    ╠══ tsconfig.json
    ╠══ .eslintrc.json
    ╠══ public/
    ║    ╠══ vercel.svg
    ║    ╚══ next.svg
    ╠══ README.md
    ╠══ .gitignore
    ╠══ package.json
    ╚══ src
         ╠══ components/
         ║    ╚══ index.ts
         ╠══ errors/
         ║    ╚══ index.ts
         ╠══ app/
         ║    ╠══ layout.tsx
         ║    ╠══ favicon.ico
         ║    ╠══ api/
         ║    ║    ╠══ auth/
         ║    ║    ║    ╚══ [...nextauth]
         ║    ║    ║         ╚══ route.ts
         ║    ║    ╠══ public/
         ║    ║    ║    ╚══ route.ts
         ║    ║    ╚══ secure
         ║    ║         ╚══ route.ts
         ║    ╠══ page.tsx
         ║    ╚══ globals.css
         ╠══ providers/
         ║    ╚══ index.ts
         ╠══ service/
         ║    ╠══ index.ts
         ║    ╚══ customFetch
         ║         ╠══ API.ts
         ║         ╠══ fetch.types.ts
         ║         ╠══ SERVER.ts
         ║         ╚══ index.ts
         ╠══ mocks/
         ║    ╚══ index.ts
         ╠══ lib/
         ║    ╠══ nextAuth/
         ║    ║    ╠══ options/
         ║    ║    ║    ╚══ index.ts
         ║    ║    ╠══ auth/
         ║    ║    ║    ╚══ index.ts
         ║    ║    ╚══ index.ts
         ║    ╚══ index.ts
         ╠══ utils/
         ║    ╚══ index.ts
         ╠══ constants/
         ║    ╚══ index.ts
         ╠══ types/
         ║    ╚══ index.ts
         ╠══ schema/
         ║    ╚══ index.ts
         ╠══ enum/
         ║    ╠══ method.fetch.ts
         ║    ╚══ index.ts
         ╠══ screens/
         ║    ╚══ index.ts
         ╚══ functions
              ╠══ createQueryStrings.ts
              ╚══ index.ts

## Author

### Samuel Ramos

- [Github](https://github.com/samuelrms)
- [Instagram](https://www.instagram.com/samuelramos.dev/)
- [LinkedIn](https://www.linkedin.com/in/samuelaoramos/)
- [Portfolio](https://samuelramos.dev)
- [WhatsApp](https://api.whatsapp.com/send?1=pt_BR&phone=5534988676166)
- [Email](mailto:samuelaoliveiraramos@gmail.com)
