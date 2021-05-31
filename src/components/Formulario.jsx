import React, { useContext, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";

const Formulario = () => {
  const { addToBuyer } = useContext(AppContext);

  const form = useRef(null);
  const history = useHistory();
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get("name"),
      apellido: formData.get("apellido"),
      email: formData.get("email"),
      address: formData.get("address"),
      apto: formData.get("apto"),
      country: formData.get("country"),
      city: formData.get("city"),
      state: formData.get("state"),
      phone: formData.get("phone"),
      cp: formData.get("cp"),
    };
    addToBuyer(buyer);
    history.push("/checkout/payment");
  };
  

  return (
    <div className="Information-content">
      <div className="Information-head">
        <h2>Information de contatactos</h2>
      </div>
      <div className="Inforation-form">
        <form ref={form}>
          <input type="text" placeholder="Nombre Completo" name="name" />
          <input type="text" placeholder="Apellido Completo" name="apellido" />
          <input type="text" placeholder="Correo Eletronico" name="email" />
          <input type="text" placeholder="Direccion" name="address" />
          <input type="text" placeholder="Apto" name="apto" />
          <input type="text" placeholder="Pais" name="country" />
          <input type="text" placeholder="Ciuda" name="city" />
          <input type="text" placeholder="Estado" name="state" />
          <input type="text" placeholder="Telefono" name="phone" />
          <input type="text" placeholder="Codigo postal" name="cp" />
        </form>
      </div>
      <div className="Information-buttons">
        <div className="Inforation-back">
          <Link to="/chekout">Regresar</Link>
        </div>
        <div className="Information-next">
          <button type="button" onClick={handleSubmit}>
            pagar
          </button>
        </div>
      </div>
     
    </div>
  );
};
export default Formulario;
