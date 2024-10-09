import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";
import { CharactersProvider } from "../context/CharactersContext";

function AppRoutes() {
  return (
    <Router>
      <MainLayout>
        <CharactersProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CharactersProvider>
      </MainLayout>
    </Router>
  );
}

export default AppRoutes;
