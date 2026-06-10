const PROPERTIES = [
  {
    id: 1,
    featured: true,
    images: [
      "imagenes/inmuebles/monte-sion/portada.png",
      "imagenes/inmuebles/monte-sion/2.png",
      "imagenes/inmuebles/monte-sion/3.png",
      "imagenes/inmuebles/monte-sion/4.png",
      "imagenes/inmuebles/monte-sion/5.png",
      "imagenes/inmuebles/monte-sion/6.png",
      "imagenes/inmuebles/monte-sion/7.png",
      "imagenes/inmuebles/monte-sion/8.png",
      "imagenes/inmuebles/monte-sion/9.png",
      "imagenes/inmuebles/monte-sion/10.png",
      "imagenes/inmuebles/monte-sion/11.png",
      "imagenes/inmuebles/monte-sion/12.png",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Edificio Monte Sion - Piso 8°",
    bedrooms: 3, // habitaciones
    bathrooms: 2, // Baños
    area: 57,
    parking: 1,
    price: 155000000,
    negotiable: true,
    location: "Cartagena de Indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO EN 8° PISO | EDIFICIO MONTE SIÓN 

📍 UBICACIÓN: Edificio Monte Sión / Cartagena de Indias
💰 PRECIO DE VENTA: $155.000.000 COP
🏢 ADMINISTRACIÓN: $170.000

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 57 m²
• PISO: 8
• HABITACIONES: 2 Habitaciones (principal con baño privado)
• BAÑOS: 2
• PARQUEADEROS: Comunal
• ESTRATO: 3
• AÑO DE CONST.: 2022

✨ DISTRIBUCIÓN Y COMODIDADES
• Cocina Americana
• Sala y Comedor: Integrados
• Balcón 
• Zona de labores

🏢 AMENIDADES DEL CONJUNTO
• Seguridad 24/7 / Portería
• Piscina / Cancha deportiva
• Salón Social 
• Parque Infantil / Zonas Verdes
• Ascensor / Parqueadero de Visitantes

✅ POR QUÉ ES UNA EXCELENTE OPCIÓN:
Este apartamento es la oportunidad ideal para quienes buscan una PROPERTIES joven, con amenidades completas y en un sector en pleno crecimiento.

📲 ¡AGENDA TU VISITA HOY!
No pierdas la oportunidad de conocer tu próximo hogar.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [
  "Cocina Americana", 
  "Sala y Comedor integrados", 
  "Balcón", 
  "Zona de labores", 
  "Piscina", 
  "Seguridad 24/7"
],
  },
  
];

function formatPrice(price, type) {
  const formatted = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return type === "arriendo" ? `${formatted} / mes` : formatted;
}

function getPropertyById(id) {
  return PROPERTIES.find((p) => p.id === Number(id));
}

function getFeaturedProperties() {
  return PROPERTIES.filter((p) => p.featured);
}

// CORRECCIÓN: Cambiamos el parámetro a 'propiedad' en minúscula y singular
function renderizarVistaInmueble(propiedad) {
  
  // Si por alguna razón no llega información, evitamos que rompa la página
  if (!propiedad) return;

  // 1. Extraemos las 5 primeras fotos para el mosaico
  const fotosMosaico = propiedad.images.slice(0, 5);
  
  // 2. Mapeamos las imágenes usando las clases del mosaico
  const mosaicoHTML = fotosMosaico.map((url, index) => {
    if (index === 0) {
      return `<img src="${url}" class="gallery__img gallery__img--main" alt="Portada de ${propiedad.title}">`;
    } else {
      return `<img src="${url}" class="gallery__img" alt="Vista interior de ${propiedad.title}">`;
    }
  }).join('');

  // 3. Calculamos el botón flotante si hay más de 5 fotos
  let botonVerMas = '';
  if (propiedad.images.length > 5) {
    botonVerMas = `<button class="gallery__btn-more">+${propiedad.images.length - 5} fotos</button>`;
  }

  // 4. CORRECCIÓN: Buscamos el contenedor real de tu HTML. 
  // Nota: Asegúrate de tener un div con id="propiedades-container" en tu HTML, o cámbialo por el que uses.
  const cardContainer = document.getElementById('property-detail'); 
  
  if (cardContainer) {
    cardContainer.innerHTML = `
      <article class="property-card">
        
        <div class="gallery-container">
          <div class="property-gallery">
            ${mosaicoHTML}
          </div>
          ${botonVerMas}
        </div>

        <div class="property-card__content">
          <span class="tag">${propiedad.typeLabel}</span>
          <h3>${propiedad.title}</h3>
          <p class="location">📍 ${propiedad.location}</p>
          
          <p class="price">${formatPrice(propiedad.price, propiedad.type)}</p> 
          
          <div class="stats">
             <span>🛏️ ${propiedad.bedrooms} Hab</span>
             <span>🚿 ${propiedad.bathrooms} Baños</span>
             <span>📐 ${propiedad.area} m²</span>
          </div>

          <div class="property-description">
            ${propiedad.description}
          </div>
        </div>

      </article>
    `;
  }
}

// CORRECCIÓN: PASO CLAVE. Llamamos a la función al cargar el script para que pinte la primera propiedad del array.
renderizarVistaInmueble(PROPERTIES[0]);