// pages/Inicio.tsx
import React from 'react';
import '../estilos/Inicio.css';

import SeccionBeneficios from './SeccionBeneficios'; // Asegúrate de que la ruta sea correcta
import SeccionUbicacion from './SeccionUbicacion'; // Asegúrate de que la ruta sea correcta
import SeccionQuienesSomos from './SeccionQuienesSomos';
import SeccionInicio from './SeccionInicio';
import SeccionContacto from './SeccionContacto';

const Inicio: React.FC = () => {
    

  return (
    
    <div className="container">
            
      <section className='section-image' id='inicio'>
        <SeccionInicio />
      </section> 
      
      <section className="section" id="quienes-somos">
        <SeccionQuienesSomos />
      </section>

      <section className="section" id="beneficios">
        <SeccionBeneficios /> 
      </section>

      <section className="location-section" id="location-section">
        <SeccionUbicacion  />
      </section>
        
      
      <section className="contact-section" id="contacto">
        <SeccionContacto />
      </section>

    </div>
    
  );
};

export default Inicio;