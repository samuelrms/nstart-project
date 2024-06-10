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
    - [Use this template](#use-this-template)
  - [Available Scripts](#available-scripts)
    - [Start Project](#start-project)
    - [Build Project](#build-project)
    - [Start Production Server](#start-production-server)
  - [Tailwind CSS Configuration](#tailwind-css-configuration)
  - [RTK Query](#rtk-query)
    - [API Service Definition](#api-service-definition)
    - [Examples](#examples)
    - [Using RTK Query](#using-rtk-query)
  - [Contributing](#contributing)
  - [License](#license)
  - [Folder Structure](#folder-structure)
  - [Author](#author)

## Dependencies

### Core Dependencies

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [ReactDOM 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Styling

- [Tailwind CSS](https://tailwindcss.com/)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Utility to combine Tailwind CSS classes

### State Management and Data Fetching

- [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- [react-redux](https://react-redux.js.org/)
- [reselect](https://github.com/reduxjs/reselect) - Selector library for Redux

### UI Components

- [@nextui-org/react](https://nextui.org/) - React UI library
- [framer-motion](https://www.framer.com/motion/) - Animation library for React
- [react-hot-toast](https://react-hot-toast.com/) - Notification library for React

### Internationalization

- [@react-aria/i18n](https://react-spectrum.adobe.com/react-aria/useLocale.html) - Internationalization utilities

### Authentication

- [next-auth](https://next-auth.js.org/) - Authentication library for Next.js

### Other Utilities

- [next-nprogress-bar](https://github.com/apal21/next-nprogress-bar) - Progress bar for Next.js

### Development Dependencies

- [eslint](https://eslint.org/) - Linter for JavaScript and TypeScript
- [eslint-config-next](https://nextjs.org/docs/basic-features/eslint) - ESLint configuration for Next.js
- [postcss](https://postcss.org/) - Tool for transforming CSS
- [typescript](https://www.typescriptlang.org/) - TypeScript language
- [@types/node](https://www.npmjs.com/package/@types/node) - Type definitions for Node.js
- [@types/react](https://www.npmjs.com/package/@types/react) - Type definitions for React
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) - Type definitions for React DOM

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

   1. If you are using **_npm_** as your package manager, you can install it by running the following command in your terminal:

   ```bash
    npm i
   ```

   2. If you are using **_yarn_** as your package manager, you can install it by running the following command in your terminal:

   ```bash
    yarn
   ```

   3. If you are using **_pnpm_** as your package manager, you can install it by running the following command in your terminal:

   ```bash
   pnpm i
   ```

### Use this template

This template is designed to be used with the following commands:

```bash
npx degit samuelrms/nstart-project <YOUR_APP_NAME>
```

This command uses degit to directly clone the nstart-project from the GitHub repository of samuelrms into a new directory named <YOUR_APP_NAME>. degit is a scaffolding tool that lets you create a new project straight from a git repository.

or

```bash
npx create-next-app --example https://github.com/samuelrms/nstart-project <YOUR_APP_NAME>
```

This command uses _**create-next-app**_ to bootstrap a new Next.js application using the _**nstart-project**_ from the GitHub repository of _**samuelrms**_ as a template. The new application will be created in a new directory named <YOUR_APP_NAME>. create-next-app is an official tool from the Next.js team for quickly starting new projects.

Both commands are run using _**npx**_, which is a package runner tool that comes with _**npm**_. It allows you to run packages without having to install them globally first. <YOUR_APP_NAME> should be replaced with the name you want for your new project.

Remember to navigate into your new project directory with cd <YOUR_APP_NAME> before starting the development server with _**npm run dev**_, _**yarn dev**_ or _**pnpm dev**_. Enjoy coding! 😊

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

## RTK Query

RTK Query is a powerful tool for managing asynchronous data in Redux applications. It simplifies data fetching and caching logic, making development more efficient.

### API Service Definition

Here's how to define an API service using RTK Query:

[apiServiceRedux file of the redux api](https://github.com/samuelrms/nstart-project/blob/main/src/lib/redux/api/index.ts)

```tsx
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FETCH_OPTIONS } from "@/enum";
import { QueryArgs } from "@/types";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Defining the API service
export const apiServiceRedux = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    dynamicQuery: builder.query<unknown, QueryArgs>({
      query: ({ path, method = FETCH_OPTIONS.GET, params, body }) => ({
        url: path,
        method,
        params,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

// Hooks to use API endpoints
export const { useDynamicQueryQuery: useDynamicQuery } = apiServiceRedux;

// Selectors for query results
export const selectDynamicQueryResult = (args: {
  path: string;
  method?: FETCH_OPTIONS;
}) =>
  createSelector(
    (state: RootState) =>
      apiServiceRedux.endpoints.dynamicQuery.select({
        path: args.path,
        method: args.method,
      })(state),
    (queryResult) => queryResult
  );
```

### Examples

### Using RTK Query

Here's an example of how to use RTK Query in your project:

```tsx
import {
  RootState,
  selectDynamicQueryResult,
  useAppSelector,
  useDynamicQuery,
} from "@/lib";

const MyComponent: React.FC = () => {
  // Perform the query
  const { data, error, isLoading } = useDynamicQuery({
    path: "public",
  });

  // Select the query result from the state
  const selectQueryState = selectDynamicQueryResult({
    path: "public",
  });

  const queryState = useAppSelector((state: RootState) =>
    selectQueryState(state)
  );

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Data: {JSON.stringify(data)}</p>}
      <p>Query State: {JSON.stringify(queryState)}</p>
    </div>
  );
};

export default MyComponent;
```

## Contributing

Feel free to contribute to this project.
To get started, you can open an `issue` or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Folder Structure

    .
    ╠══ src/
    ║    ╠══ constants/
    ║    ║    ╚══ index.ts
    ║    ╠══ functions/
    ║    ║    ╠══ createQueryStrings.ts
    ║    ║    ╚══ index.ts
    ║    ╠══ screens/
    ║    ║    ╠══ index.ts
    ║    ║    ╚══ Home
    ║    ║    ║    ╚══ index.tsx
    ║    ╠══ errors/
    ║    ║    ╚══ index.ts
    ║    ╠══ mocks/
    ║    ║    ╚══ index.ts
    ║    ╠══ types/
    ║    ║    ╠══ QueryArgs.ts
    ║    ║    ╚══ index.ts
    ║    ╠══ schema/
    ║    ║    ╚══ index.ts
    ║    ╠══ utils/
    ║    ║    ╚══ index.ts
    ║    ╠══ enum/
    ║    ║    ╠══ index.ts
    ║    ║    ╚══ method.fetch.ts
    ║    ╠══ providers/
    ║    ║    ╠══ index.tsx
    ║    ║    ╠══ nextUI.provider.tsx
    ║    ║    ╠══ nextAuth.privider.tsx
    ║    ║    ╚══ redux.provider.tsx
    ║    ╠══ components/
    ║    ║    ╚══ index.ts
    ║    ╠══ app/
    ║    ║    ╠══ api/
    ║    ║    ║    ╠══ public/
    ║    ║    ║    ║    ╚══ route.ts
    ║    ║    ║    ╠══ auth/
    ║    ║    ║    ║    ╚══ [...nextauth]
    ║    ║    ║    ║    ║    ╚══ route.ts
    ║    ║    ║    ╚══ secure
    ║    ║    ║    ║    ╚══ route.ts
    ║    ║    ╠══ layout.tsx
    ║    ║    ╠══ page.tsx
    ║    ║    ╠══ globals.css
    ║    ║    ╚══ favicon.ico
    ║    ╠══ lib/
    ║    ║    ╠══ index.ts
    ║    ║    ╠══ redux/
    ║    ║    ║    ╠══ store/
    ║    ║    ║    ║    ╚══ index.ts
    ║    ║    ║    ╠══ api/
    ║    ║    ║    ║    ╚══ index.ts
    ║    ║    ║    ╠══ reducer/
    ║    ║    ║    ║    ╚══ index.ts
    ║    ║    ║    ╠══ middleware/
    ║    ║    ║    ║    ╚══ index.ts
    ║    ║    ║    ╠══ config/
    ║    ║    ║    ║    ╚══ index.ts
    ║    ║    ║    ╠══ slice/
    ║    ║    ║    ║    ╠══ user/
    ║    ║    ║    ║    ║    ╠══ index.ts
    ║    ║    ║    ║    ║    ╚══ user.types.ts
    ║    ║    ║    ║    ╚══ index.ts
    ║    ║    ║    ╠══ index.ts
    ║    ║    ║    ╚══ hooks
    ║    ║    ║    ║    ╚══ index.ts
    ║    ║    ╚══ nextAuth
    ║    ║    ║    ╠══ options/
    ║    ║    ║    ║    ╚══ index.ts
    ║    ║    ║    ╠══ index.ts
    ║    ║    ║    ╚══ auth
    ║    ║    ║    ║    ╚══ index.ts
    ║    ╚══ service
    ║    ║    ╠══ customFetch/
    ║    ║    ║    ╠══ SERVER.ts
    ║    ║    ║    ╠══ fetch.types.ts
    ║    ║    ║    ╠══ API.ts
    ║    ║    ║    ╚══ index.ts
    ║    ║    ╚══ index.ts
    ╠══ tailwind.config.ts
    ╠══ public/
    ║    ╠══ vercel.svg
    ║    ╚══ next.svg
    ╠══ .env
    ╠══ README.md
    ╠══ next.config.mjs
    ╠══ package.json
    ╠══ .npmrc
    ╠══ LICENSE
    ╠══ pnpm-lock.yaml
    ╠══ tsconfig.json
    ╠══ postcss.config.mjs
    ╠══ .eslintrc.json
    ╚══ .gitignore

## Author

### Samuel Ramos

- [Github](https://github.com/samuelrms)
- [Instagram](https://www.instagram.com/samuelramos.dev/)
- [LinkedIn](https://www.linkedin.com/in/samuelaoramos/)
- [Portfolio](https://samuelramos.dev)
- [WhatsApp](https://api.whatsapp.com/send?1=pt_BR&phone=5534988676166)
- [Email](mailto:samuelaoliveiraramos@gmail.com)
