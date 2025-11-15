import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  HashRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import CartProvider from "./context/CartProvider.jsx";
import AddressProvider from "./context/AddressProvider.jsx";
import WishlistProvider from "./context/WishlistProvider.jsx";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <HashRouter> 
    <QueryClientProvider client={client}>
    <AuthProvider> 
    <CartProvider> 
    <WishlistProvider>
    <AddressProvider> 
      <App />
      </AddressProvider>
      </WishlistProvider>
      </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
    </HashRouter>
  </StrictMode>
);
