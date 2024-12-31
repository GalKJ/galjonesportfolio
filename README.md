This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

# Portfolio Site

This repository contains the code for my personal portfolio site built using React and Next.js. The project includes end-to-end testing using Cypress for Test-Driven Development (TDD).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Introduction

This project serves as my personal portfolio site, showcasing my skills, projects, and experience. It's built with React and Next.js to ensure a fast and efficient website. Cypress is used for testing purposes, following the Test-Driven Development (TDD) approach.

## Features

- **React:** Utilizes the React library to create a dynamic user interface.
- **Next.js:** Employs Next.js for server-side rendering and efficient routing.
- **Cypress:** Implements Cypress for end-to-end testing, ensuring the robustness of the application.
- **TDD:** Built using Test-Driven Development practices to maintain code quality and reliability.

## Installation

To run this project locally, follow these steps:

1. Clone this repository.
   ```
   git clone https://github.com/your-username/portfolio-site.git
   ```
2. Navigate to the project directory.
   ```
   cd portfolio-site
   ```
3. Install the dependencies.
   ```
   npm install
   ```

## Usage

Once the installation is complete, you can start the development server using the following command:

```
npm run dev
```

This command will start the development server at `http://localhost:3000`.

## Testing

The project uses Cypress for testing. To run the tests, use the following commands:

Open Cypress Test Runner (Interactive Mode):

```
npm run cy:open
# or
npx cypress open
```

Run Cypress Tests (Headless Mode):

```
# Run all component tests
npx cypress run --component

# Run specific test file
npx cypress run --component --spec "cypress/component/PortfolioHeader.cy.tsx"

# Run in a specific browser
npx cypress run --component --browser chrome
```
