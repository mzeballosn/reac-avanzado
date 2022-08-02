import React, { useRef, useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './style.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  // antes del 17 era useHistory, otra opsion es obtener el history del BrowserRouter como una props
  // const history = useHistory();
  
  const navegate = useNavigate(); 
  

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    //history.push('/checkout/payment');
    navegate('/checkout/payment');
  }
  
  const handleSumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price; 
    const sum = cart.reduce(reducer,0);    
    return sum;
  }  
/*  
  const personas = [
    { nombre: 'Edu', edad: 25 },
    { nombre: 'Manuel', edad: 37 },
    { nombre: 'Marta', edad: 42 },
    { nombre: 'Edu', edad: 25 },
    { nombre: 'Edu', edad: 35 },
  ];
 
  const busqueda = cart.reduce((acc, persona) => {
  
    const clave = JSON.stringify(persona);
    acc[clave] = ++acc[clave] || 0;
    return acc;
  }, {});
  
  
  const duplicados = cart.filter( (persona) => {
    return busqueda[JSON.stringify(persona.id)];
  });
  
  console.log(duplicados);
  */

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electrónico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código postal" name="cp" />
            <input type="text" placeholder="Teléfono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/className=">
                Regresar
            </Link>            
          </div>
          <div className="Information-next">
            <button type="button" className="" onClick={handleSubmit}>
                Pagar
            </button>          
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>              
              {                
                cart.map((item) => 
                  <div className="Information-item" key={item.id}>
                      <h5>{item.title}</h5>
                      <span>
                        ${
                            item.price
                        }
                      </span>
                  </div>
                )
              }            
        <p>{`Total : $ ${handleSumTotal()}`} </p>    
      </div>
    </div>
  );
}

export default Information;