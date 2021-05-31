import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import Formulario from "../components/Formulario";
import "../style/Information.css";
import useInformati from "../hooks/useInformati";

const Information = () => {
  const { state } = useContext(AppContext);
  const { cart, cupones } = state;
  const [datos, setDatos] = useState({
    cupon: "",
  });

  const [resultado, handleDescuento, handleSumTotal] = useInformati();

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
    console.log(datos.cupon);
  };

  const handleSubmi = (e) => {
    e.preventDefault();
    let descuento = 0;

    cupones.map((element) => {
      if (element.codigo === datos.cupon) {
        descuento = element.porcentaje;
      }
    });
    handleDescuento(descuento);
  };

  return (
    <div className="Information">
      <Formulario />

      <div className="Information-sidebar">
        {cart.length > 0 ? <h3>Pedidos</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item) => (
          <div className="Information-item" key={item.id}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        {cart.length > 0 ? (
          <form onSubmit={handleSubmi}>
            <input
              type="text"
              name="cupon"
              onChange={handleInputChange}
              placeholder="ingresa tu cupom"
            />
            <button>validar</button>
          </form>
        ) : (
          <></>
        )}
      </div>

      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: ${handleSumTotal()}</h3>
         
          { resultado.dato !== handleSumTotal() &&(
           
              <div className="Checkout-sidebar">
                <h3>Precio con descuento: ${resultado.dato}</h3>
        

            {
              cupones.map((element) => {
                if (element.codigo === datos.cupon) {
                    return <h3>Cupon descuento: {datos.cupon}</h3>
                }
              })
            }
             
              </div>
          )}
        </div>
      )}

      <div className="Checkout-sidebar"></div>
    </div>
  );
};

export default Information;
