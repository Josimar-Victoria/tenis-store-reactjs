import { useState, useContext } from "react";
import AppContext from '../context/AppContext'
const useInformati = () => {
    const { state } = useContext(AppContext)
    const { cart } = state
   

  const handleDescuento = (porcentaje) => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    const resultadoDedesCuento = porcentaje * 0.01;
    const resultadoSum = sum * resultadoDedesCuento;

    setResultado({
      dato: sum - resultadoSum,
      total: sum,
    });
    return sum - resultadoSum;
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const [resultado, setResultado] = useState({
    dato: handleSumTotal(),
  });

  return[resultado, handleDescuento, handleSumTotal]

};

export default useInformati