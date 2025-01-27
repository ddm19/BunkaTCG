import { Routes, Route } from "react-router-dom";
import "styles/variables.scss";
import "styles/global.scss";
import Navbar from "./components/navbar/navbar";
import Home from "pages/home/home";
import ProductPage from "pages/product/productPage";
import Toast from "components/toast/toast";

function App()
{
  return (
    <>
      <Toast />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
