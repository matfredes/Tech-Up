import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>
      <h4> {item.nombre} </h4>
      <p>Cantidad: {cantidad} </p>
      <p>Precio: {item.precio} </p>
      <button
        onClick={() => eliminarProducto(item.id)}
        className="eliminateButton"
      >
        {" "}
        Eliminar{" "}
      </button>
      <hr />
    </div>
  );
};

export default CartItem;
