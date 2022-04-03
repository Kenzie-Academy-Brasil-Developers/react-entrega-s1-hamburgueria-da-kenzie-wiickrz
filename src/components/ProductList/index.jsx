import "./style.css";
import Products from "../Products";

const ProductList = ({
  products,
  filteredProducts,
  setcartItems,
  cartItems,
  cartTotal,
  setCartTotal,
}) => {
  return (
    <nav>
      <ul className="product__list">
        {filteredProducts.length === 0
          ? products.map((prod) => (
              <li key={prod.id}>
                <Products
                  name={prod.name}
                  category={prod.category}
                  price={prod.price}
                  img={prod.img}
                  prod={prod}
                  cartItems={cartItems}
                  setcartItems={setcartItems}
                  cartTotal={cartTotal}
                  setCartTotal={setCartTotal}
                />
              </li>
            ))
          : filteredProducts.map((prod) => (
              <li key={prod.id}>
                <Products
                  name={prod.name}
                  category={prod.category}
                  price={prod.price}
                  img={prod.img}
                  prod={prod}
                  cartItems={cartItems}
                  setcartItems={setcartItems}
                  cartTotal={cartTotal}
                  setCartTotal={setCartTotal}
                />
              </li>
            ))}
      </ul>
    </nav>
  );
};

export default ProductList;
