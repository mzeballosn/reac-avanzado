import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';
import MapViewLeaflet from '../../components/MapViewLeaflet';
import './style.css';


function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name} , gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias</span>
        <div className="Success-map">
          <MapViewLeaflet />
        </div>
      </div>  
    </div>
  )
}

export default Success