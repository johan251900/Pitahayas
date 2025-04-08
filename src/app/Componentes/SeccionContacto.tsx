"use client";

// pages/Inicio.tsx
import React, { useState } from 'react';
import '../estilos/Inicio.css';

const Inicio: React.FC = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setFormData({
      nombre: '',
      apellido: '',
      telefono: '',
      asunto: '',
      mensaje: '',
    });
  };

  return (
    <div className="container">
      {/* Otras secciones... */}

      {/* Sección: Contacto */}
      <section className="contact-section">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                placeholder="Tu apellido"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                placeholder="Tu teléfono"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="asunto">Asunto:</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
              placeholder="Asunto"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              placeholder="Tu mensaje"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </section>

      {/* Otras secciones... */}
    </div>
  );
};

export default Inicio;