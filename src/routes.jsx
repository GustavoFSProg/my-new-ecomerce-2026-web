import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

import ShoppingCart from "./Components/Carrinho";

function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
