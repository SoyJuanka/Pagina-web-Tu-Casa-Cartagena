console.log("¡El archivo JS se está ejecutando correctamente!");
const PROPERTIES = [

  // ... inicio de modificacion para añadir o borrar nuevas propiedades:

  {
    id: 1,
    featured: true,
    images: [
      "imagenes/inmuebles/carioca/1.jpg",
      "imagenes/inmuebles/carioca/2.jpg",
      "imagenes/inmuebles/carioca/3.jpg",
      "imagenes/inmuebles/carioca/4.jpg",
      "imagenes/inmuebles/carioca/5.jpg",
      "imagenes/inmuebles/carioca/6.jpg",
      "imagenes/inmuebles/carioca/7.jpg",
      "imagenes/inmuebles/carioca/8.jpg",
      "imagenes/inmuebles/carioca/9.jpg",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Copa Cabana | Piso 8°",
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
Este apartamento es la oportunidad ideal para quienes buscan una PROPIEDAD joven, con amenidades completas y en un sector en pleno crecimiento.

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

{
    id: 2,
    featured: true,
    images: [
      "imagenes/inmuebles/edificio magnolia/1.jpg",
      "imagenes/inmuebles/edificio magnolia/2.jpg",
      "imagenes/inmuebles/edificio magnolia/3.jpg",
      "imagenes/inmuebles/edificio magnolia/4.jpg",
      "imagenes/inmuebles/edificio magnolia/5.jpg",
      "imagenes/inmuebles/edificio magnolia/6.jpg",
      "imagenes/inmuebles/edificio magnolia/7.jpg",
      "imagenes/inmuebles/edificio magnolia/8.jpg",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Edificio Magnolia | Piso 9°",
    bedrooms: 2, // habitaciones
    bathrooms: 2, // Baños
    area: 71.5,
    parking: 0,
    price: 250000000,
    negotiable: true,
    location: "Cartagena de Indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO EN 9° PISO | EDIFICIO MAGNOLIA 

📍 UBICACIÓN: Edificio Magnolia / Cartagena de Indias
🏢 ADMINISTRACIÓN: $230.000

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 71,5 m²
• PISO: 9
• HABITACIONES: 2 
• BAÑOS: 2
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• Cocina Amoblada, Pantry
• Sala y Comedor
• Balcón vista interna del conjunto
• Zona de labores

🏢 AMENIDADES DEL CONJUNTO
• Lobby
• Piscina
• Cancha deportiva
• Parque infantil

✅ POR QUÉ ES UNA EXCELENTE OPCIÓN:
Este apartamento es la oportunidad ideal para quienes buscan una PROPIEDAD joven, con amenidades completas y en un sector en pleno crecimiento.

📲 ¡AGENDA TU VISITA HOY!
No pierdas la oportunidad de conocer tu próximo hogar.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [
  "Cocina Amoblado", 
  "Sala y Comedor integrados", 
  "Balcón", 
  "Zona de labores", 
  "Piscina", 
],
  },

  {
    id: 3,
    featured: true,
    images: [
      "imagenes/inmuebles/la pradera/1.jpg",
      "imagenes/inmuebles/la pradera/2.jpg",
      "imagenes/inmuebles/la pradera/3.jpg",
      "imagenes/inmuebles/la pradera/4.jpg",
      "imagenes/inmuebles/la pradera/5.jpg",
      "imagenes/inmuebles/la pradera/6.jpg",
      "imagenes/inmuebles/la pradera/7.jpg",
      "imagenes/inmuebles/la pradera/8.jpg",
    ],
    type: "casa",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Condominio La Pradera",
    bedrooms: 3, // habitaciones
    bathrooms: 2, // Baños
    area: 96,
    parking: 1,
    price: 285000000,
    negotiable: true,
    location: "Turbaco | Villa Grandes",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR CASA DE 1 NIVEL | CONDOMINIO LA PRADERA 

📍 UBICACIÓN: Condiminio La Pradera / Turbaco 
🏢 ADMINISTRACIÓN: $230.000

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 96 m²
• HABITACIONES: 3
• BAÑOS: 2
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• Cocina Americana,
• Sala y Comedor
• Terraza / Jardin
• Zona de labores
• Patio
• Zona de parqueo

🏢 AMENIDADES DEL CONJUNTO
• Zonas Verdes
• Piscina
• Vigilancia 24/7
• Salon Social

✅ POR QUÉ ES UNA EXCELENTE OPCIÓN:
Esta casa es la oportunidad ideal para quienes buscan una PROPIEDAD joven, con amenidades completas y en un sector en pleno crecimiento.

📲 ¡AGENDA TU VISITA HOY!
No pierdas la oportunidad de conocer tu próximo hogar.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [
  "Cocina AmERICANA", 
  "Sala y Comedor ",  
  "Zona de labores", 
  "Piscina", 
],
  },

     {
    id: 4,
    featured: true, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/la cumbre/1.jpg",
      "imagenes/inmuebles/la cumbre/2.jpg",
      "imagenes/inmuebles/la cumbre/3.jpg",
      "imagenes/inmuebles/la cumbre/4.jpg",
      "imagenes/inmuebles/la cumbre/5.jpg",
      "imagenes/inmuebles/la cumbre/6.jpg",
      "imagenes/inmuebles/la cumbre/7.jpg",
      "imagenes/inmuebles/la cumbre/8.jpg",
      "imagenes/inmuebles/la cumbre/9.jpg",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Conjunto La Cumbre",
    bedrooms: 3, // habitaciones
    bathrooms: 2, // Baños
    area: 58.25,
    parking: 1,
    price: 180000000,
    negotiable: true,
    location: "Turbaco",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 2 | CONJUNTO LA CUMBRE

📍 UBICACIÓN: Conjunto La Cumbre / Turbaco 
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 58.25 m²
• HABITACIONES: 3
• BAÑOS: 2
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• Cocina,
• Sala y Comedor
• Zona de parqueo
• Balcon

🏢 AMENIDADES DEL CONJUNTO
• Piscinas para adultos y niños
• Salón social
• Kioscos con zona BBQ.
• Senderos peatonales.
• Canchas deportivas.
• Parques infantiles.

✅ POR QUÉ ES UNA EXCELENTE OPCIÓN:
La Cumbre es un conjunto cerrado de apartamentos VIS, ubicado en el sector La Virgencita, una zona de gran valorización y desarrollo en el municipio de Turbaco, Bolívar. Cada espacio ha sido cuidadosamente concebido para brindar comodidad, funcionalidad y calidad de vida.

Además, en La Cumbre vivirás en equilibrio con la naturaleza y disfrutarás de amplias zonas comunes para compartir con tu familia

📲 ¡AGENDA TU VISITA HOY!
No pierdas la oportunidad de conocer tu próximo hogar.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [
  "Piscinas para adultos y niños", 
  "Salón social",  
  "Kioscos con zona BBQ", 
],
  },

     {
    id: 5,
    featured: true, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/calicanto/1.jpg",
      "imagenes/inmuebles/calicanto/2.jpg",
      "imagenes/inmuebles/calicanto/3.jpg",
      "imagenes/inmuebles/calicanto/4.jpg",
      "imagenes/inmuebles/calicanto/5.jpg",
      "imagenes/inmuebles/calicanto/6.jpg",
      "imagenes/inmuebles/calicanto/7.jpg",
      "imagenes/inmuebles/calicanto/8.jpg",
      "imagenes/inmuebles/calicanto/9.jpg",
      "imagenes/inmuebles/calicanto/10.jpg",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Conjunto Calicanto | Piso 10°" ,
    bedrooms: 2, // habitaciones
    bathrooms: 2, // Baños
    area: 57.33,
    parking: 1,
    price: 180000000,
    negotiable: true,
    location: "Cartagena de Indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 10 | CONJUNTO TERRAZAS DE CALICANTO

📍 UBICACIÓN: Conjunto Terrazas de Calicanto / Cartagena de Indias 
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 57.33 m²
• HABITACIONES: 2
• BAÑOS: 2
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• Cocina
• Sala y Comedor
• Zona de parqueo
• Balcon
• Zona de Labores

🏢 AMENIDADES DEL CONJUNTO
• Recepción
• Vigilancia 24/7
• Piscina
• Salon de eventos
• Gimnasio
• Canchas deportivas
• Parque infantil
• Zonas verdes
• Parqueadero comunal

✅ POR QUÉ ES UNA EXCELENTE OPCIÓN:
Ubicado en una zona privilegiada, este hogar te ofrece la tranquilidad que buscas sin alejarte de la ciudad.

📲 ¡AGENDA TU VISITA HOY!
No pierdas la oportunidad de conocer tu próximo hogar.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [
  "Recepción", 
  "Piscina",  
  "Gimnasio", 
  "Salon de eventos",
],
  },

     {
    id: 6,
    featured: true, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/dammar/1.jpg",
      "imagenes/inmuebles/dammar/2.jpg",
      "imagenes/inmuebles/dammar/3.jpg",
      "imagenes/inmuebles/dammar/4.jpg",
      "imagenes/inmuebles/dammar/5.jpg",
      "imagenes/inmuebles/dammar/6.jpg",
      "imagenes/inmuebles/dammar/7.jpg",
      "imagenes/inmuebles/dammar/8.jpg",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Conjunto Dammar | Piso 4°" ,
    bedrooms: 2, // habitaciones
    bathrooms: 2, // Baños
    area: 58,
    parking: 1,
    price: 280000000,
    negotiable: true,
    location: "Cartagena de Indias - Serena del Mar",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 4 EN OBRA GRIS | CONJUNTO DAMMAR

📍 UBICACIÓN: Conjunto Dammar / Cartagena de Indias - Serena del Mar
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 58 m²
• HABITACIONES: 2
• BAÑOS: 2
• ESTRATO: 4

✨ DISTRIBUCIÓN Y COMODIDADES
• Cocina
• Sala y Comedor
• Zona de parqueo
• Balcon
• Cuarto de lavado

🏢 AMENIDADES DEL CONJUNTO
• Kiosko abierto
• Vigilancia 24/7
• Piscina
• Zona BBQ
• Alta valorizacion
• Cerca a playa 
• Parque infantil
• Zonas verdes
• Parqueadero comunal
• Urbanización cerrada

✅ POR QUÉ ES UNA EXCELENTE OPCIÓN:
Vive donde la brisa marina encuentra la sostenibilidad. Dammar en Serena del Mar no es solo un apartamento, es el equilibrio perfecto entre la frescura del Caribe y un diseño inteligente. Disfruta de un hogar diseñado para ser fresco, eficiente y, sobre todo, tuyo. Bienvenido al futuro de la vivienda en Cartagena.

📲 ¡AGENDA TU VISITA HOY!
No pierdas la oportunidad de conocer tu próximo hogar.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [
  "Recepción", 
  "Piscina",   
  "Salon de eventos",
],
  },

      {
    id: 7,
    featured: true, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/portanova/1.jpg",
      "imagenes/inmuebles/portanova/2.jpg",
      "imagenes/inmuebles/portanova/3.jpg",
      "imagenes/inmuebles/portanova/4.jpg",
      "imagenes/inmuebles/portanova/5.jpg",
      "imagenes/inmuebles/portanova/6.jpg",
      "imagenes/inmuebles/portanova/7.jpg",
      "imagenes/inmuebles/portanova/8.jpg",
      "imagenes/inmuebles/portanova/9.jpg",
      "imagenes/inmuebles/portanova/10.jpg",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Conjunto Portanova | Piso 2°" ,
    bedrooms: 2, // habitaciones
    bathrooms: 2, // Baños
    area: 58,
    parking: 1,
    price: 295000000,
    negotiable: true,
    location: "Cartagena de Indias - Serena del Mar",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 4 EN OBRA GRIS | CONJUNTO PORTANOVA

📍 UBICACIÓN: Conjunto Portanova / Cartagena de Indias - Serena del Mar
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 58 m²
• HABITACIONES: 2
• BAÑOS: 2
• ESTRATO: 4

✨ DISTRIBUCIÓN Y COMODIDADES
• Cocina
• Sala y Comedor
• Zona de parqueo
• Balcon
• Cuarto de lavado

🏢 AMENIDADES DEL CONJUNTO
• Kiosko abierto
• Vigilancia 24/7
• Piscina
• Zona BBQ
• Alta valorizacion
• Cerca a playa 
• Parque infantil
• Zonas verdes
• Parqueadero comunal
• Urbanización cerrada

✅ POR QUÉ ES UNA EXCELENTE OPCIÓN:
Vive donde la brisa marina encuentra la sostenibilidad. Portanova en Serena del Mar no es solo un apartamento, es el equilibrio perfecto entre la frescura del Caribe y un diseño inteligente. Disfruta de un hogar diseñado para ser fresco, eficiente y, sobre todo, tuyo. Bienvenido al futuro de la vivienda en Cartagena.

📲 ¡AGENDA TU VISITA HOY!
No pierdas la oportunidad de conocer tu próximo hogar.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [
  "Recepción", 
  "Piscina",   
  "Salon de eventos",
],
  },

        {
    id: 8,
    featured: true, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/jardin orquidea/1.jpg",
      "imagenes/inmuebles/jardin orquidea/2.jpg",
      "imagenes/inmuebles/jardin orquidea/3.jpg",
      "imagenes/inmuebles/jardin orquidea/4.jpg",
      "imagenes/inmuebles/jardin orquidea/5.jpg",
      "imagenes/inmuebles/jardin orquidea/6.jpg",
      "imagenes/inmuebles/jardin orquidea/7.jpg",
      "imagenes/inmuebles/jardin orquidea/8.jpg",
      "imagenes/inmuebles/jardin orquidea/9.jpg",
      "imagenes/inmuebles/jardin orquidea/10.jpg",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: " Jardin Orquidea | Piso 2°" ,
    bedrooms: 2, // habitaciones
    bathrooms: 2, // Baños
    area: 57,
    parking: 1,
    price: 220000000,
    negotiable: true,
    location: "Cartagena de Indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 2 | CONJUNTO JARDIN ORQUIDEA

📍 UBICACIÓN: Conjunto Jardin Orquidea / Cartagena de Indias 
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 57 m²
• HABITACIONES: 2
• BAÑOS: 2
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• Cocina Americana
• Sala y Comedor
• Zona de parqueo
• Balcon
• Cuarto de lavado

🏢 AMENIDADES DEL CONJUNTO
• Vigilancia 24/7
• Piscina
• Parque infantil
• Zonas verdes
• Parqueadero comunal
• Urbanización cerrada

✅ POR QUÉ ES UNA EXCELENTE OPCIÓN:
Este apartamento es la oportunidad ideal para quienes buscan una PROPIEDAD joven, con amenidades completas y en un sector en pleno crecimiento.

📲 ¡AGENDA TU VISITA HOY!
No pierdas la oportunidad de conocer tu próximo hogar.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [
  "Recepción", 
  "Piscina",  
  "Parque infantil", 
  "Salon de eventos",
],
  },

          {
    id: 9,
    featured: true, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/san fernando/1.jpg",
      "imagenes/inmuebles/san fernando/2.jpg",
      "imagenes/inmuebles/san fernando/3.jpg",
      "imagenes/inmuebles/san fernando/4.jpg",
      "imagenes/inmuebles/san fernando/5.jpg",
      "imagenes/inmuebles/san fernando/6.jpg",
      "imagenes/inmuebles/san fernando/7.jpg",
      "imagenes/inmuebles/san fernando/8.jpg",
    ],
    type: "casa",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Casa esquinera",
    bedrooms: 4, // habitaciones
    bathrooms: 2, // Baños
    area: 580,
    parking: 0,
    price: 800000000,
    negotiable: true,
    location: "Cartagena de Indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR CASA DE 3 NIVELES | BARRIO SAN FERNANDO

📍 UBICACIÓN: San Fernando / Cartagena de Indias 

1er Piso:
2 Apartamentos de 2 habitaciones, (una con closets ), 1 baño, cocina, patio de Labores, terraza. 

2do Piso:
2 Apartamentos de 2 habitaciones,( una con closets )1 baño, cocina, zona  de labores, balcón.acceso por escaleras.

3er Piso. 
Levante de paredes en ladrillo  que cierran el piso  y techo en eternit. Obra Gris.

📲 ¡AGENDA TU VISITA HOY!
No pierdas la oportunidad de conocer tu próximo hogar.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [
  "Inmueble de 3 niveles", 
],
  },

            {
    id: 10,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/miraflores/1.jpg",
      "imagenes/inmuebles/miraflores/2.jpg",
      "imagenes/inmuebles/miraflores/3.jpg",
      "imagenes/inmuebles/miraflores/4.jpg",
      "imagenes/inmuebles/miraflores/5.jpg",
      "imagenes/inmuebles/miraflores/6.jpg",
      "imagenes/inmuebles/miraflores/7.jpg",
      "imagenes/inmuebles/miraflores/8.jpg",
      "imagenes/inmuebles/miraflores/9.jpg",
    ],
    type: "casa",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Casa esquinera",
    bedrooms: 3, // habitaciones
    bathrooms: 2, // Baños
    area: 106,
    parking: 0,
    price: 440000000,
    negotiable: true,
    location: "Turbaco - Bolivar",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR CASA DE 2 NIVELES | URBANIZACIÓN EL VALLE

📍 UBICACIÓN: Urbanización El Valle / Turbaco - Bolivar 

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 106 m²
• HABITACIONES: 3
• BAÑOS: 2
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• Cocina Americana
• Sala y Comedor
• Patio enchapado
• Balcon
• Terraza

📲 ¡AGENDA TU VISITA HOY!
No pierdas la oportunidad de conocer tu próximo hogar.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [
  "Inmueble de 3 niveles", 
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
