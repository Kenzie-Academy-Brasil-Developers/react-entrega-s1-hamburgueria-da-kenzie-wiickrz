import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [products] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 7,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "McShake Ovomaltine",
      category: "Bebidas",
      price: 10,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  return (
    <div className="App">
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
      <main>
        <section className="app-section">
          <ProductList
            products={products}
            filteredProducts={filteredProducts}
            cartItems={cartItems}
            setcartItems={setcartItems}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
        </section>
        <aside>
          <Cart
            cartItems={cartItems}
            setcartItems={setcartItems}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
