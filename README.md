# Bosta Shipment Tracking Page

## Overview
This project is a Vite-based React application designed for tracking shipments, allowing users to view shipment details and monitor delivery progress. It provides a user-friendly interface with RTL support for Arabic content.

## Features
- **Vite-based React app** for fast development and build processes.
- **TypeScript support** for type safety and improved developer experience.
- Multi-language support, including Arabic and English.
- Responsive and clean UI.
- State management using Redux Toolkit.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16+ recommended)
- npm or yarn

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Install Dependencies
Install the required dependencies using npm or yarn:
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the required environment variables. For example:
```
VITE_API_BASE_URL=http://your-api-endpoint
VITE_OTHER_CONFIG=your-config
```

### 4. Run the Application
Start the development server:
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:5173` by default.

### 5. Build for Production
To build the application for production:
```bash
npm run build
# or
yarn build
```
The output will be in the `dist` folder.

### 6. Preview the Build
Preview the production build locally:
```bash
npm run preview
# or
yarn preview
```

## Available Scripts
- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `preview`: Previews the production build locally.
- `lint`: Lints the code for formatting and best practices.

## Project Structure
```
src/
├── components/      # React components
├── features/        # Redux slices
├── pages/           # Application pages
├── styles/          # Global and component styles
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## Additional Notes
- RTL support is enabled for Arabic content.
- Update the `i18n` configuration for additional language support if needed.
- Modify Vite configurations in `vite.config.ts` for custom setups.
- TypeScript configurations are included for better development experience.

## Contributions
Contributions are welcome! Please:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your branch.
4. Open a pull request.

We welcome all suggestions and contributions to make this project better!
