import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  HashRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import CartProvider from "./context/CartProvider.jsx";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <HashRouter> 
    <QueryClientProvider client={client}>
    <AuthProvider> 
    <CartProvider> 
      <App />
      </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
    </HashRouter>
  </StrictMode>
);
