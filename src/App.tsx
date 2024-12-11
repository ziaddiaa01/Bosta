import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from './components/Layout';
import OrderDetails from "./pages/OrderDetails";
import ErrorBoundary from "./components/ErrosBoundary"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<OrderDetails />} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
        <RouterProvider router={router} />
    </ErrorBoundary>
      
    
  );
};

export default App;
