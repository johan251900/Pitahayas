import React from 'react';
import '../estilos/Inicio.css'; // Asegúrate de que la ruta sea correcta
const SeccionBeneficios: React.FC = () => {
    return (
        <div className="benefits-container">
        <div className="benefit-text top-left">APORTA ANTIOXIDANTES, VITAMINA C Y FIBRA</div>
        <div className="benefit-text top-right">BAJA EN CALORIAS, PERFECTA PARA DIETAS</div>
        <div className="benefit-text bottom-left">REGULAN EL AZUCAR EN LA SANGRE </div>
        <div className="benefit-text bottom-right">DISMINUYE NIVELES DE COLESTEROL</div>
        <img src="PitahayaBeneficios.png" alt="Beneficios de la Pitahaya" className="benefits-image" />
      </div>
    );
};

export default SeccionBeneficios;