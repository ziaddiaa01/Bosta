import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import './App.css'
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';




ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>,
        </Provider>
    </React.StrictMode>
);
