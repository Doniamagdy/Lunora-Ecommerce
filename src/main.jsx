
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import CartProvider from "./context/CartProvider.jsx";
import AddressProvider from "./context/AddressProvider.jsx";
import WishlistProvider from "./context/WishlistProvider.jsx";
import UserContextProvider from "./context/UserProvider.jsx";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(

  <BrowserRouter> 
    <QueryClientProvider client={client}>
    <AuthProvider> 
    <CartProvider> 
    <WishlistProvider>
    <AddressProvider> 
     <UserContextProvider> 
      <App />
      </UserContextProvider>
      </AddressProvider>
      </WishlistProvider>
      </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
    </BrowserRouter>

);
