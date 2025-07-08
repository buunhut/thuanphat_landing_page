import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPages from "./pages/ServicesPages";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";
import TestPage from "./pages/TestPage";
import VisaPage from "./pages/VisaPage";
import CreatePage from "./pages/CreatePage";
import { BankPage } from "./pages/BankPage";
import GoldPage from "./pages/GoldPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Index />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="services" element={<ServicesPages />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="visa" element={<VisaPage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="bank" element={<BankPage />} />
          <Route path="gold" element={<GoldPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
