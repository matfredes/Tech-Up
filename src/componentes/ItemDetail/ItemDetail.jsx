import { useState } from "react";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

//Importamos CarritoContext
import { CarritoContext } from "../../context/CarritoContext";
//Importo el Hook useContext:
import { useContext } from "react";

const ItemDetail = ({ id, nombre, stock, precio, img, dscrp }) => {
  //Creamos un estado local con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  ///////////////////////Agregado Clase 6

  const { agregarAlCarrito } = useContext(CarritoContext);

  ///////////////////////////////////////

  //Creamos una función manejadora de la cantidad:

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);

    //Ahora acá yo puedo crear un objeto con el item y la cantidad:
    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <h2> {nombre} </h2>
      <h3>$ {precio} </h3>
      <img src={img} alt={nombre} />
      <p>{dscrp}</p>

      {agregarCantidad > 0 ? (
        <Link to="/cart" className="confirmButton">
          Agregar al carrito
        </Link>
      ) : (
        <Contador
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
