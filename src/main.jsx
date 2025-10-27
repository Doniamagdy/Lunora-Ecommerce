import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  HashRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <HashRouter> 
    <QueryClientProvider client={client}>
    <Navbar />
      <App />
      <Footer/>
    </QueryClientProvider>
    </HashRouter>
  </StrictMode>
);
