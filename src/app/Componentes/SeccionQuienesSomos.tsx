import React from 'react';

const SeccionQuienesSomos: React.FC = () => {
    return (
        <><div className="quienes-somos-container">
        <div className="quienes-somos-image">
          <img src="Pitahaya1.png" alt="¿Quiénes Somos?" className="quienes-somos-img" />
        </div>
        <div className="quienes-somos-text">
          <h2>¿QUIENES SOMOS?</h2>
          <button className="saber-mas-button">SABER MAS</button>
        </div>
      </div></>
    );
};

export default SeccionQuienesSomos;