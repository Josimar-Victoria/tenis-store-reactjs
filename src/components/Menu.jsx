import React, { useState } from "react";
import {Link} from 'react-router-dom'
import '../style/Menu.css'

export function Menu() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(false);

  const handleClick = () => {
    setCount(!count);
  };
  console.log(count);

  return (
    <div>
      <button onClick={handleClick}>
        {count ? (        
          <ul className='Menu-list'>
            {" "}
            <li>111A: Descuento de un 10%</li>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>{" "}
          </ul>
        ) : (
          <></>
          
        )}
        <p>cupones</p>
      </button>
    </div>
  );
}
