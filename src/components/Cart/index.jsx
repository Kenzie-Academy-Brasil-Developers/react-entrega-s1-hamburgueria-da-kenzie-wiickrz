import "./style.css";
import CartProduct from "../CartProduct";
import Button from "../Button";

const Cart = ({ cartItems, setcartItems, cartTotal, setCartTotal }) => {
  const resetCart = () => {
    setcartItems([]);
  };

  return (
    <section className="cart">
      <div className="cart__header">
        <span>Carrinho de Compras</span>
      </div>
      {cartItems.length === 0 ? (
        <div className="cart__content">
          <h3>A sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      ) : (
        <>
          <ul className="cart__list">
            {cartItems.map((prod) => (
              <li key={prod.id}>
                <CartProduct
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
          <div className="cart__footer">
            <div>
              <p>Total</p>
              <span>R$ {String(cartTotal)}</span>
            </div>
            <Button variant="secondary" fullWidth onClick={resetCart}>
              Remover todos
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
