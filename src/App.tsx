import { Routes, Route } from "react-router-dom";
import "styles/variables.scss";
import "styles/global.scss";
import Navbar from "./components/navbar/navbar";
import Home from "pages/home/home";
import ProductPage from "pages/product/productPage";
import Toast from "components/toast/toast";
import Footer from "components/footer/footer";
import Cookies from "pages/legal/cookies";
import Legal from "pages/legal/legal";
import Privacy from "pages/legal/privacy";
import RefundsPage from "pages/legal/refunds";
import AboutPage from "pages/about/about";
import Checkout from "pages/checkout/checkout";
import PaymentSuccess from "pages/paymentSuccess/paymentSuccess";
import PaymentError from "pages/paymentError/paymentError";

function App() {
  return (
    <>
      <Toast />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/shipping-refund" element={<RefundsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-error" element={<PaymentError />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
