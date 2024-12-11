# Bosta Shipment Tracking Page

## Overview
This project is a Vite-based React application designed for tracking shipments, allowing users to view shipment details and monitor delivery progress. It provides a user-friendly interface with RTL support for Arabic content.

## Features
- **Vite-based React app** for fast development and build processes.
- **TypeScript support** for type safety and improved developer experience.
- **Multi-language support**, including Arabic and English, using **i18next** for translations.
- **Responsive UI** styled with **Tailwind CSS** for a modern design.
- **Flowbite integration** for pre-built UI components to enhance user experience.
- State management using **Redux Toolkit**.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16+ recommended)
- npm or yarn
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [i18next](https://www.i18next.com/) for internationalization
- [Flowbite](https://flowbite.com/) for UI components
- [React Redux](https://react-redux.js.org/) for State management



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

This will install the following key dependencies:
- **Tailwind CSS** for styling
- **Flowbite** for pre-built UI components
- **i18next** for translation management
- **Redux Toolkit** for state management

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the required environment variables. For example:
```
VITE_API_BASE_URL=http://your-api-endpoint
VITE_OTHER_CONFIG=your-config
```

### 4. Tailwind CSS Configuration
Tailwind CSS should already be set up if you followed the default installation steps for Vite. You can customize the Tailwind configuration by modifying `tailwind.config.js`. Ensure that your configuration supports RTL (right-to-left) text if you're using Arabic translations.

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 5. i18next Configuration
To add i18next for translations, you need to configure it in your project.

- Install the necessary i18next packages:
  ```bash
  npm install i18next react-i18next i18next-browser-languagedetector react-i18next
  ```

- Create a folder `src/locales` with the translation JSON files for your languages (e.g., `en/translation.json` and `ar/translation.json`).

- Add the i18next configuration in your `src/i18n.ts` file:
  ```ts
  import i18n from 'i18next';
  import { initReactI18next } from 'react-i18next';

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: {
            "track_shipment": "Track Shipment",
            "products": "Products",
            // Add other translations here
          },
        },
        ar: {
          translation: {
            "track_shipment": "تتبع الشحنة",
            "products": "المنتجات",
            // Add other translations here
          },
        },
      },
      lng: "en", // Default language
      fallbackLng: "en", // Fallback language
      interpolation: {
        escapeValue: false, // React already escapes values
      },
    });

  export default i18n;
  ```

- Import the `i18n.ts` file in your `src/index.tsx` or `src/App.tsx` to initialize i18next:
  ```ts
  import './i18n'; // Make sure this is at the top of your main entry file
  ```

- Use the `useTranslation` hook in your components to display the translated text:
  ```tsx
  import { useTranslation } from 'react-i18next';

  const MyComponent = () => {
    const { t } = useTranslation();
    return <h1>{t('track_shipment')}</h1>;
  };
  ```

### 6. Flowbite Integration
To integrate **Flowbite** for pre-built UI components, install the Flowbite package:

```bash
npm install flowbite
```

Then, import Flowbite in your `src/index.tsx` or `src/App.tsx`:

```tsx
import 'flowbite'; // Add this to enable Flowbite components
```

You can now use Flowbite components in your project, for example:

```tsx
import { Button } from 'flowbite-react';

const MyComponent = () => {
  return (
    <Button>
      {t('track_shipment')}
    </Button>
  );
};
```

### 7. Run the Application
Start the development server:
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:5173` by default.

### 8. Build for Production
To build the application for production:
```bash
npm run build
# or
yarn build
```
The output will be in the `dist` folder.

### 9. Preview the Build
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

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Updates:
1. **i18next** integration for multi-language support.
2. **Flowbite** installation and usage for pre-built UI components.
3. **Tailwind CSS** configuration, which should already be set up by default if you used the Vite + Tailwind template.

This will allow your application to handle multiple languages (including RTL for Arabic), use Tailwind CSS for styling, and leverage Flowbite for additional UI components.
