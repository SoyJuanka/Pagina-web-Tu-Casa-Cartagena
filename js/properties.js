const PROPERTIES = [

  // ... inicio de modificacion para añadir o borrar nuevas propiedades:

  {
    id: 1,
    featured: true,
    images: [
      "imagenes/inmuebles/carioca/1",
      "imagenes/inmuebles/carioca/2",
      "imagenes/inmuebles/carioca/3",
      "imagenes/inmuebles/carioca/4",
      "imagenes/inmuebles/carioca/5",
      "imagenes/inmuebles/carioca/6",
      "imagenes/inmuebles/carioca/7",
      "imagenes/inmuebles/carioca/8",
      "imagenes/inmuebles/carioca/9",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Conjunto Copa Cabana | Piso 8°",
    bedrooms: 3, // habitaciones
    bathrooms: 2, // Baños
    area: 59,
    parking: 0,
    price: 198000000,
    negotiable: true,
    location: "Cartagena de Indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO EN 8° PISO | CONJUNTO COPA CABANA 

📍 UBICACIÓN: Conjunto Copa Cabana / Cartagena de Indias
🏢 ADMINISTRACIÓN: $230.000

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 59 m²
• PISO: 8
• HABITACIONES: 3 
• BAÑOS: 2
• PARQUEADEROS: Comunal
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• Cocina Americana, Pantry
• Sala y Comedor
• Balcón vista interna del conjunto
• Zona de labores

🏢 AMENIDADES DEL CONJUNTO
• Vías de acceso y transporte
• Cercania a centros comerciales
• Sobre via principal 
• Piscina
• Cancha deportiva
• Parque infantil
• Salon social
• Minimarket
• Zonas verdes
• Parqueadero comunal
• Vigilancia 24/7 + recepción

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
  
  // ... fin de modificacion para añadir o borrar nuevas propiedades:
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