import React from 'react';

const SeccionUbicacion: React.FC = () => {
    return (
        <><img src="/SeparacionRosaSuperior.png" alt="Transición" className="location-transition" /><div className="location-content">
            <div className="location-info">
                <h2>NUESTRA UBICACIÓN</h2>
            </div>

            <div className="location-map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4018.5778033742795!2d-97.89558788906076!3d18.773113461337456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cf85017187ddad%3A0x830659d8658640df!2sPITAYAS%20%26%20PITAHAYAS%20HUITZILTEPEC!5e1!3m2!1ses!2smx!4v1743981022686!5m2!1ses!2smx"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div></>
    );
};

export default SeccionUbicacion;