import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>El carrito se encuentra vacío, revisa nuestro productos </h2>
        <Link to="/" className="verButton">
          Ver Productos
        </Link>
      </>
    );
  }

  return (
    <div>
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}
      <h3>Total: ${total} </h3>
      <h3>Cantidad Total: {cantidadTotal} </h3>
      <button className="vaciarButton" onClick={() => vaciarCarrito()}>
        {" "}
        Vaciar Carrito{" "}
      </button>
      <Link to="/checkout" className="confirmButton">
        Finalizar Compra
      </Link>
    </div>
  );
};

export default Cart;
