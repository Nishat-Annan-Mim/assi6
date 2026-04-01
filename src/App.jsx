import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import StatsSection from "./component/StatsSection";
import ProductsCartSection from "./component/ProductsCartSection";
import StepsSection from "./component/StepsSection";
import PricingSection from "./component/PricingSection";
import Footer from "./component/Footer";
import { products } from "./data/products";

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);
  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setAddedProductId(product.id);

    toast.success(`${product.name} added to cart`);

    setTimeout(() => {
      setAddedProductId(null);
    }, 1200);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    const item = cartItems[indexToRemove];

    setCartItems((prev) => prev.filter((_, index) => index !== indexToRemove));

    toast.error(`${item.name} removed from cart`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.info("Your cart is already empty");
      return;
    }

    setCartItems([]);
    toast.success("Proceed to checkout successful. Cart cleared.");
  };

  return (
    <div className="bg-white">
      <NavBar cartCount={cartItems.length} />
      <Banner />
      <StatsSection />

      <ProductsCartSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        products={products}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
        addedProductId={addedProductId}
      />

      <StepsSection />
      <PricingSection />
      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
