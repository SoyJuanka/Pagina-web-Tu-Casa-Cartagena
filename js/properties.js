console.log("¡El archivo JS se está ejecutando correctamente!");
const PROPERTIES = [

  // ... inicio de modificacion para añadir o borrar nuevas propiedades:

  {
    id: 1,
    featured: true,
    images: [
      "imagenes/inmuebles/carioca/1.webp",
      "imagenes/inmuebles/carioca/2.webp",
      "imagenes/inmuebles/carioca/3.webp",
      "imagenes/inmuebles/carioca/4.webp",
      "imagenes/inmuebles/carioca/5.webp",
      "imagenes/inmuebles/carioca/6.webp",
      "imagenes/inmuebles/carioca/7.webp",
      "imagenes/inmuebles/carioca/8.webp",
      "imagenes/inmuebles/carioca/9.webp",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Copa Cabana | Piso 8°",
    bedrooms: 3, // habitaciones
    bathrooms: 2, // Baños
    area: 59,
    parking: 0,
    price: 190000000,
    negotiable: true,
    location: "Cartagena de Indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO EN 8° PISO | CONJUNTO COPA CABANA 

📍 UBICACIÓN: Conjunto Copa Cabana / Cartagena de Indias
🏢 ADMINISTRACIÓN: $230.000

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 59 m²
• PISO: 8
• PARQUEADERO: Comunal
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 3 
• BAÑOS: 2
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
      "imagenes/inmuebles/edificio magnolia/1.webp",
      "imagenes/inmuebles/edificio magnolia/2.webp",
      "imagenes/inmuebles/edificio magnolia/3.webp",
      "imagenes/inmuebles/edificio magnolia/4.webp",
      "imagenes/inmuebles/edificio magnolia/5.webp",
      "imagenes/inmuebles/edificio magnolia/6.webp",
      "imagenes/inmuebles/edificio magnolia/7.webp",
      "imagenes/inmuebles/edificio magnolia/8.webp",
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
• ESTRATO: 3
• PARQUEADERO: comunal

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 2 
• BAÑOS: 2
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
      "imagenes/inmuebles/la pradera/1.webp",
      "imagenes/inmuebles/la pradera/2.webp",
      "imagenes/inmuebles/la pradera/3.webp",
      "imagenes/inmuebles/la pradera/4.webp",
      "imagenes/inmuebles/la pradera/5.webp",
      "imagenes/inmuebles/la pradera/6.webp",
      "imagenes/inmuebles/la pradera/7.webp",
      "imagenes/inmuebles/la pradera/8.webp",
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
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 3
• BAÑOS: 2
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
      "imagenes/inmuebles/la cumbre/1.webp",
      "imagenes/inmuebles/la cumbre/2.webp",
      "imagenes/inmuebles/la cumbre/3.webp",
      "imagenes/inmuebles/la cumbre/4.webp",
      "imagenes/inmuebles/la cumbre/5.webp",
      "imagenes/inmuebles/la cumbre/6.webp",
      "imagenes/inmuebles/la cumbre/7.webp",
      "imagenes/inmuebles/la cumbre/8.webp",
      "imagenes/inmuebles/la cumbre/9.webp",
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
• ESTRATO: 3
• PISO: 2°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 3
• BAÑOS: 2
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
      "imagenes/inmuebles/calicanto/1.webp",
      "imagenes/inmuebles/calicanto/2.webp",
      "imagenes/inmuebles/calicanto/3.webp",
      "imagenes/inmuebles/calicanto/4.webp",
      "imagenes/inmuebles/calicanto/5.webp",
      "imagenes/inmuebles/calicanto/6.webp",
      "imagenes/inmuebles/calicanto/7.webp",
      "imagenes/inmuebles/calicanto/8.webp",
      "imagenes/inmuebles/calicanto/9.webp",
      "imagenes/inmuebles/calicanto/10.webp",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Conjunto Calicanto | Piso 10°" ,
    bedrooms: 2, // habitaciones
    bathrooms: 2, // Baños
    area: 57.33,
    parking: 0,
    price: 180000000,
    negotiable: true,
    location: "Cartagena de Indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 10 | CONJUNTO TERRAZAS DE CALICANTO

📍 UBICACIÓN: Conjunto Terrazas de Calicanto / Cartagena de Indias 
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 57.33 m²
• ESTRATO: 3
• PISO: 10°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 2
• BAÑOS: 2
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
      "imagenes/inmuebles/dammar/1.webp",
      "imagenes/inmuebles/dammar/2.webp",
      "imagenes/inmuebles/dammar/3.webp",
      "imagenes/inmuebles/dammar/4.webp",
      "imagenes/inmuebles/dammar/5.webp",
      "imagenes/inmuebles/dammar/6.webp",
      "imagenes/inmuebles/dammar/7.webp",
      "imagenes/inmuebles/dammar/8.webp",
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
• ESTRATO: 4
• PISO: 4°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 2
• BAÑOS: 2
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
      "imagenes/inmuebles/portanova/1.webp",
      "imagenes/inmuebles/portanova/2.webp",
      "imagenes/inmuebles/portanova/3.webp",
      "imagenes/inmuebles/portanova/4.webp",
      "imagenes/inmuebles/portanova/5.webp",
      "imagenes/inmuebles/portanova/6.webp",
      "imagenes/inmuebles/portanova/7.webp",
      "imagenes/inmuebles/portanova/8.webp",
      "imagenes/inmuebles/portanova/9.webp",
      "imagenes/inmuebles/portanova/10.webp",
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
• ESTRATO: 4
• PISO: 2°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 2
• BAÑOS: 2
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
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/jardin orquidea/1.webp",
      "imagenes/inmuebles/jardin orquidea/2.webp",
      "imagenes/inmuebles/jardin orquidea/3.webp",
      "imagenes/inmuebles/jardin orquidea/4.webp",
      "imagenes/inmuebles/jardin orquidea/5.webp",
      "imagenes/inmuebles/jardin orquidea/6.webp",
      "imagenes/inmuebles/jardin orquidea/7.webp",
      "imagenes/inmuebles/jardin orquidea/8.webp",
      "imagenes/inmuebles/jardin orquidea/9.webp",
      "imagenes/inmuebles/jardin orquidea/10.webp",
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
• ESTRATO: 3
• PISO: 2°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 2
• BAÑOS: 2
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
      "imagenes/inmuebles/san fernando/1.webp",
      "imagenes/inmuebles/san fernando/2.webp",
      "imagenes/inmuebles/san fernando/3.webp",
      "imagenes/inmuebles/san fernando/4.webp",
      "imagenes/inmuebles/san fernando/5.webp",
      "imagenes/inmuebles/san fernando/6.webp",
      "imagenes/inmuebles/san fernando/7.webp",
      "imagenes/inmuebles/san fernando/8.webp",
    ],
    type: "casa",
    typeLabel: "INMUEBLE EN VENTA",
    title: "San Fernando | La Florida",
    bedrooms: 8, // habitaciones
    bathrooms: 4, // Baños
    area: 580,
    parking: 0,
    price: 800000000,
    negotiable: true,
    location: "Cartagena de Indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR CASA DE 3 NIVELES | BARRIO SAN FERNANDO

📍 UBICACIÓN: San Fernando / Cartagena de Indias 

Lote de 10.5 x 18.5 mt2 (194.25mt2) y 580mt2 construidos.

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
      "imagenes/inmuebles/miraflores/1.webp",
      "imagenes/inmuebles/miraflores/2.webp",
      "imagenes/inmuebles/miraflores/3.webp",
      "imagenes/inmuebles/miraflores/4.webp",
      "imagenes/inmuebles/miraflores/5.webp",
      "imagenes/inmuebles/miraflores/6.webp",
      "imagenes/inmuebles/miraflores/7.webp",
      "imagenes/inmuebles/miraflores/8.webp",
      "imagenes/inmuebles/miraflores/9.webp",
    ],
    type: "casa",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Urbanización Miraflores",
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
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 3
• BAÑOS: 2
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

            {
    id: 11,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/santa ana/1.webp",
      "imagenes/inmuebles/santa ana/2.webp",
      "imagenes/inmuebles/santa ana/3.webp",
      "imagenes/inmuebles/santa ana/4.webp",
      "imagenes/inmuebles/santa ana/5.webp",
      "imagenes/inmuebles/santa ana/6.webp",
      "imagenes/inmuebles/santa ana/7.webp",
      "imagenes/inmuebles/santa ana/8.webp",
      "imagenes/inmuebles/santa ana/9.webp",
      "imagenes/inmuebles/santa ana/10.webp",
      "imagenes/inmuebles/santa ana/11.webp",
      "imagenes/inmuebles/santa ana/12.webp",
      "imagenes/inmuebles/santa ana/13.webp",
      "imagenes/inmuebles/santa ana/14.webp",
      "imagenes/inmuebles/santa ana/15.webp",
    ],
    type: "casa",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Urbanizacion Santa Ana",
    bedrooms: 3, // habitaciones
    bathrooms: 3, // Baños
    area: 89,
    parking: 1,
    price: 300000000,
    negotiable: true,
    location: "Turbaco - Bolivar",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR CASA DE 2 NIVELES | URBANIZACIÓN SANTA ANA

📍 UBICACIÓN: Urbanización Santa Ana / Turbaco - Bolivar 

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 101 m²
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 3
• BAÑOS: 3
• Cocina 
• Sala y Comedor
• Patio enchapado
• Balcon
• Terraza
• Aire acondicionado

🏢 AMENIDADES DEL CONJUNTO
• Vigilancia 24/7
• Piscina
• Parque infantil
• Zonas verdes
• Urbanización cerrada

📲 ¡AGENDA TU VISITA HOY!
Esta propiedad es la oportunidad ideal para familias que buscan amplitud y comodidad en una de las mejores zonas residenciales de Turbaco. Su diseño de 101 m² construidos ofrece espacios frescos y bien distribuidos en un entorno tranquilo y seguro.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [
  "Inmueble de 3 niveles", 
  "Conjunto cerrado",
],
  },

              {
    id: 12,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/altagracia/1.webp",
      "imagenes/inmuebles/altagracia/2.webp",
      "imagenes/inmuebles/altagracia/3.webp",
      "imagenes/inmuebles/altagracia/4.webp",
      "imagenes/inmuebles/altagracia/5.webp",
      "imagenes/inmuebles/altagracia/6.webp",
      "imagenes/inmuebles/altagracia/7.webp",
      "imagenes/inmuebles/altagracia/8.webp",
      "imagenes/inmuebles/altagracia/9.webp",
      "imagenes/inmuebles/altagracia/10.webp",
      "imagenes/inmuebles/altagracia/11.webp",

    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Conjunto Altagracia",
    bedrooms: 2, // habitaciones
    bathrooms: 2, // Baños
    area: 57,
    parking: 1,
    price: 270000000,
    negotiable: true,
    location: "Cartagena de indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 12° | CONJUNTO ALTAGRACIA

📍 UBICACIÓN: Conjunto Altagracia / Cartagena de Indias 
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 57 m²
• ESTRATO: 3
• PISO: 12°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 2
• BAÑOS: 2
• Cocina 
• Sala y Comedor
• Balcon
• Estudio
• Zona de labores

🏢 AMENIDADES DEL CONJUNTO
• Vigilancia 24/7
• Piscina
• Parque infantil
• Zonas verdes
• Conjunto cerrada
• Gimnasio
• Parqueadero cubierto
• Ascensor


📲 ¡AGENDA TU VISITA HOY!
Ubicado en una zona residencial tranquila, con fácil acceso a transporte público, es ideal para familias que buscan comodidad y calidad de vida.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [
  "Gimnasio", 
  "Ascensor",
  "Parque infantil",
],
  },

               {
    id: 13,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/las palmas/1.webp",
      "imagenes/inmuebles/las palmas/2.webp",
      "imagenes/inmuebles/las palmas/3.webp",
      "imagenes/inmuebles/las palmas/4.webp",
      "imagenes/inmuebles/las palmas/5.webp",
      "imagenes/inmuebles/las palmas/6.webp",
      "imagenes/inmuebles/las palmas/7.webp",
      "imagenes/inmuebles/las palmas/8.webp",
      "imagenes/inmuebles/las palmas/9.webp",
      "imagenes/inmuebles/las palmas/10.webp",
      "imagenes/inmuebles/las palmas/11.webp",
      "imagenes/inmuebles/las palmas/12.webp",

    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Las Palmas | Piso 9°",
    bedrooms: 3, // habitaciones
    bathrooms: 2, // Baños
    area: 81,
    parking: 1,
    price: 310000000,
    negotiable: true,
    location: "Cartagena de indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 9° | CONJUNTO LAS PALMAS

📍 UBICACIÓN: Conjunto Las Palmas / Cartagena de Indias 
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 81 m²
• ESTRATO: 3
• PISO: 9°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 3
• BAÑOS: 2
• Cocina 
• Sala y Comedor
• Balcon
• Zona de labores

🏢 AMENIDADES DEL CONJUNTO
• Vigilancia 24/7
• Piscina
• Parque infantil
• Zonas verdes
• Conjunto cerrada
• Parqueadero cubierto
• Ascensor


📲 ¡AGENDA TU VISITA HOY!
Ubicado en una zona residencial tranquila, con fácil acceso a transporte público, es ideal para familias que buscan comodidad y calidad de vida.
Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [ 
  "Ascensor",
  "Parque infantil",
],
  },

                 {
    id: 14,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/laguito/1.webp",
      "imagenes/inmuebles/laguito/2.webp",
      "imagenes/inmuebles/laguito/3.webp",
      "imagenes/inmuebles/laguito/4.webp",
      "imagenes/inmuebles/laguito/5.webp",
      "imagenes/inmuebles/laguito/6.webp",
      "imagenes/inmuebles/laguito/7.webp",
      "imagenes/inmuebles/laguito/8.webp",
      "imagenes/inmuebles/laguito/9.webp",
      "imagenes/inmuebles/laguito/10.webp",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Edificio Laura | Amoblado",
    bedrooms: 2, // habitaciones
    bathrooms: 2, // Baños
    area: 80,
    parking: 1,
    price: 780000000,
    negotiable: true,
    location: "Cartagena de indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 9° | EDIFICIO LAURA

📍 UBICACIÓN: Edificio Laura / Cartagena de Indias 
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 80 m²
• ESTRATO: 5
PISO: 9°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 2
• BAÑOS: 2
• Cocina 
• Sala y Comedor
• Balcon
• Zona de labores
• Aire Acondicionado
• Apartamento Amoblado

🏢 AMENIDADES DEL CONJUNTO
• Vigilancia 24/7
• Piscina
• Parque infantil
• Salon social
• Conjunto cerrada
• Jacuzzi
• Ascensor
• Sauna


📲 ¡AGENDA TU VISITA HOY!
Vive o invierte en uno de los sectores más codiciados de Cartagena de Indias. Ubicado estratégicamente en El Laguito, este apartamento combina la exclusividad de una zona residencial tranquila con la cercanía a la vibrante vida turística de la ciudad. Con una vista privilegiada y acabados de primera, esta es la propiedad que estabas esperando para asegurar tu patrimonio frente al mar Caribe. ¡Haz de El Laguito tu nuevo hogar!

Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [ 
  "Ascensor",
  "Jacuzzi",
  "Sauna",
],
  },

                {
    id: 15,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/rodeba/1.webp",
      "imagenes/inmuebles/rodeba/2.webp",
      "imagenes/inmuebles/rodeba/3.webp",
      "imagenes/inmuebles/rodeba/4.webp",
      "imagenes/inmuebles/rodeba/5.webp",
      "imagenes/inmuebles/rodeba/6.webp",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Edificio Rodeba | Piso 2°",
    bedrooms: 2, // habitaciones
    bathrooms: 1, // Baños
    area: 54,
    parking: 0,
    price: 260000000,
    negotiable: true,
    location: "Cartagena de indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 2° | EDIFICIO RODEBA

📍 UBICACIÓN: Edificio Rodeba / Cartagena de Indias 
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 54 m²
• ESTRATO: 3
• PISO: 2°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 2
• BAÑOS: 1
• Cocina 
• Sala y Comedor
• Balcon
• Patio

🏢 AMENIDADES DEL CONJUNTO
• Permiten mascotas
• Cerca a colegio y comercios


📲 ¡AGENDA TU VISITA HOY!
Aprovecha esta oportunidad de inversión en una de las ciudades más turísticas de Colombia.

Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [ 
  "Cerca a colegio y comercios",
],
  },

  
                {
    id: 16,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/monte bianco/1.webp",
      "imagenes/inmuebles/monte bianco/2.webp",
      "imagenes/inmuebles/monte bianco/3.webp",
      "imagenes/inmuebles/monte bianco/4.webp",
      "imagenes/inmuebles/monte bianco/5.webp",
      "imagenes/inmuebles/monte bianco/6.webp",
      "imagenes/inmuebles/monte bianco/7.webp",
      "imagenes/inmuebles/monte bianco/8.webp",
      "imagenes/inmuebles/monte bianco/9.webp",
      "imagenes/inmuebles/monte bianco/10.webp",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Monte Bianco | Piso 8°",
    bedrooms: 3, // habitaciones
    bathrooms: 2, // Baños
    area: 76,
    parking: 1,
    price: 250000000,
    negotiable: true,
    location: "Cartagena de indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 8° | MONTE BIANCO

📍 UBICACIÓN: Monte Bianco / Cartagena de Indias 
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 76 m²
• ESTRATO: 3
• PISO: 8°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 3
• BAÑOS: 2
• Cocina 
• Sala y Comedor
• Balcon
• Zona de labores

🏢 AMENIDADES DEL CONJUNTO
• Vigilancia 24/7
• Cerca a colegio y comercios
• Ascensor

📲 ¡AGENDA TU VISITA HOY!
El barrio Los Alpes es reconocido por su tranquilidad y su cercanía a todo lo que necesitas:

Comercio y Servicios: A pocos minutos de los principales centros comerciales (La Castellana, Ejecutivos), supermercados de cadena, bancos y centros médicos.

Conectividad: Excelente acceso a transporte público y vías principales que te conectan rápidamente con el centro histórico y la zona norte de la ciudad.

Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [ 
  "Cerca a colegio y comercios",
],
  },

                  {
    id: 17,
    featured: true, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/soneta/1.webp",
      "imagenes/inmuebles/soneta/2.webp",
      "imagenes/inmuebles/soneta/3.webp",
      "imagenes/inmuebles/soneta/4.webp",
      "imagenes/inmuebles/soneta/5.webp",
      "imagenes/inmuebles/soneta/6.webp",
      "imagenes/inmuebles/soneta/7.webp",
      "imagenes/inmuebles/soneta/8.webp",
      "imagenes/inmuebles/soneta/9.webp",
      "imagenes/inmuebles/soneta/10.webp",
      "imagenes/inmuebles/soneta/11.webp",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Morros Sonesta  | Amoblado",
    bedrooms: 3, // habitaciones
    bathrooms: 3, // Baños
    area: 114,
    parking: 2,
    price: 1750000000,
    negotiable: true,
    location: "Cartagena de indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 6° | MORROS SONETA

📍 UBICACIÓN: Morros - Zona Norte / Cartagena de Indias 
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 114 m²
• ESTRATO: 6
• PISO: 6°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 3
• BAÑOS: 3
• Cocina 
• Sala y Comedor
• Balcon panoramico
• Zona de labores
• Parqueadero
• Amoblado

🏢 AMENIDADES DEL CONJUNTO
• Vigilancia 24/7
• Acceso directo a playas
• Ascensor
• Piscina
• Gimnasio 
• Canchas deportivas
• Salon social

📲 ¡AGENDA TU VISITA HOY!
Invertir en Morros Sonesta no es solo comprar metros cuadrados; es asegurar un activo en una de las copropiedades más estables y apetecidas de Cartagena, con el respaldo de la marca Sonesta y la tranquilidad de la Zona Norte.

Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [ 
  "Cerca a playas",
  "Gimnasio",
  "Zona BBQ",
  "Piscina",
  "Vigilancia 24/7",
],
  },

                  {
    id: 18,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/new port/1.webp",
      "imagenes/inmuebles/new port/2.webp",
      "imagenes/inmuebles/new port/3.webp",
      "imagenes/inmuebles/new port/4.webp",
      "imagenes/inmuebles/new port/5.webp",
      "imagenes/inmuebles/new port/6.webp",
      "imagenes/inmuebles/new port/7.webp",
      "imagenes/inmuebles/new port/8.webp",
      "imagenes/inmuebles/new port/9.webp",
      "imagenes/inmuebles/new port/10.webp",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "NewPort | Piso 13°",
    bedrooms: 2, // habitaciones
    bathrooms: 1, // Baños
    area: 42,
    parking: 1,
    price: 170000000,
    negotiable: true,
    location: "Cartagena de indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 13° | CONJUNTO NEWPORT

📍 UBICACIÓN: Edificio NewPort / Cartagena de Indias 
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 42 m²
• ESTRATO: 3
• PISO: 13°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 2
• BAÑOS: 1
• Cocina 
• Sala y Comedor
• Balcon panoramico
• Zona de labores
• Parqueadero

🏢 AMENIDADES DEL CONJUNTO
• Vigilancia 24/7
• Ascensor
• Piscina
• Parques infantiles 
• Canchas deportivas
• Salon social

📲 ¡AGENDA TU VISITA HOY!
Newport es un espacio ideal para la recreación de toda la familia, logrando consolidar espacios de diversión: zona deportiva, salón para guardería, salón social, gimnasio, piscina y juegos infantiles. Un proyecto ideal para contemplar la belleza de la ciudad.

Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [ 
  "Ascensor",
  "Zona BBQ",
  "Piscina",
  "Vigilancia 24/7",
],
  },

                    {
    id: 19,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/trevi/1.webp",
      "imagenes/inmuebles/trevi/2.webp",
      "imagenes/inmuebles/trevi/3.webp",
      "imagenes/inmuebles/trevi/4.webp",
      "imagenes/inmuebles/trevi/5.webp",
      "imagenes/inmuebles/trevi/6.webp",
      "imagenes/inmuebles/trevi/7.webp",
      "imagenes/inmuebles/trevi/8.webp",
      "imagenes/inmuebles/trevi/9.webp",
      "imagenes/inmuebles/trevi/10.webp",
      "imagenes/inmuebles/trevi/11.webp",
      "imagenes/inmuebles/trevi/12.webp",
      "imagenes/inmuebles/trevi/13.webp",
      "imagenes/inmuebles/trevi/14.webp",
      "imagenes/inmuebles/trevi/15.webp",
      "imagenes/inmuebles/trevi/16.webp",
      "imagenes/inmuebles/trevi/17.webp",
      "imagenes/inmuebles/trevi/18.webp",
      "imagenes/inmuebles/trevi/19.webp",
      "imagenes/inmuebles/trevi/20.webp",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Conjunto Trevi | Piso 2°",
    bedrooms: 2, // habitaciones
    bathrooms: 2, // Baños
    area: 49.53,
    parking: 1,
    price: 395000000,
    negotiable: true,
    location: "Cartagena de indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 2° | CONJUNTO TREVI

📍 UBICACIÓN: Conjunto Trevi / Cartagena de Indias 
🏢 ADMINISTRACIÓN: Consultar con el Asesor

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 49.53 m²
• ESTRATO: 4
• PISO: 2°

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 2
• BAÑOS: 2
• Cocina Americana
• Sala y Comedor
• Balcon 
• Zona de labores
• Parqueadero Privado

🏢 AMENIDADES DEL CONJUNTO
• Vigilancia 24/7
• Ascensor
• Piscina
• Parques infantiles 
• Zonas Verdes
• Salon social

📲 ¡AGENDA TU VISITA HOY!
Este apartamento, construido en 2024, es la oportunidad ideal para quienes buscan una propiedad a estrenar, con amenidades completas en el desarrollo urbanístico más importante y exclusivo de la ciudad.

Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [ 
  "Ascensor",
  "Zona BBQ",
  "Piscina",
  "Vigilancia 24/7",
],
  },

                   {
    id: 20,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/lote turbaco/1.webp",
      "imagenes/inmuebles/lote turbaco/2.webp",
      "imagenes/inmuebles/lote turbaco/3.webp",
      "imagenes/inmuebles/lote turbaco/4.webp",
      "imagenes/inmuebles/lote turbaco/5.webp",
      "imagenes/inmuebles/lote turbaco/6.webp",
      "imagenes/inmuebles/lote turbaco/7.webp",
      "imagenes/inmuebles/lote turbaco/8.webp",
      "imagenes/inmuebles/lote turbaco/9.webp",
    ],
    type: "lotes_campestres",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Lote Las Marcelas | Turbaco",
    bedrooms: 1, // habitaciones
    bathrooms: 2, // Baños
    area: 280,
    parking: 1,
    price: 215000000,
    negotiable: true,
    location: "Turbaco / Bolivar",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `LOTES EN VENTA | TURBACO - BOLIVAR

📍 UBICACIÓN: Las Marcelas / Turbaco - Bolivar 

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 332 m²
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• HABITACIONES: 1
• BAÑOS: 2
• 3 lotes con folio de matricula independiente
• Sobre Avenida , calle vehicular
• Unidad cerrada
• Kiosko
• Parque infantil
• Patio
• BBQ

📲 ¡AGENDA TU VISITA HOY!
¡Es el espacio perfecto para descansar, compartir en familia o desarrollar tu proyecto inmobiliario! Escríbeme y conoce esta propiedad.

Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [ 
  "Unidad cerrada",
  "Sobre avenida",
  "Patio",
  "BBQ",
],
  },

                     {
    id: 21,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/plan parejo/1.webp",
      "imagenes/inmuebles/plan parejo/2.webp",
      "imagenes/inmuebles/plan parejo/3.webp",
      "imagenes/inmuebles/plan parejo/4.webp",
      "imagenes/inmuebles/plan parejo/5.webp",
      "imagenes/inmuebles/plan parejo/6.webp",
      "imagenes/inmuebles/plan parejo/7.webp",
      "imagenes/inmuebles/plan parejo/8.webp",
      "imagenes/inmuebles/plan parejo/9.webp",
      "imagenes/inmuebles/plan parejo/10.webp",
      "imagenes/inmuebles/plan parejo/11.webp",
      "imagenes/inmuebles/plan parejo/12.webp",
      "imagenes/inmuebles/plan parejo/13.webp",
      "imagenes/inmuebles/plan parejo/14.webp",
    ],
    type: "casa",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Casa de 2 niveles | Turbaco",
    bedrooms: 4, // habitaciones
    bathrooms: 3, // Baños
    area: 112,
    parking: 1,
    price: 380000000,
    negotiable: true,
    location: "Turbaco / Bolivar",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `CASA DE 2 NIVELES BARRIO BONANZA VISTA  | TURBACO - BOLIVAR

📍 UBICACIÓN: Barrio Bonanza Vista / Turbaco - Bolivar 

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 112 m²
• HABITACIONES: 4
• BAÑOS: 3
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES

1ER NIVEL: Terraza amplia, sala, antesala, comedor, baño auxiliar, cocina integral, zona de labores, estudio, zona de parqueo y patio.

2DO NIVEL: 3 habitaciones con closet, 1 baño privado, 1 baño social, .

📲 ¡AGENDA TU VISITA HOY!
Ubicada en calle vehicular. excelente Ubicación. árboles frutales.

Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [ 
  "casa de 2 niveles",
  "calle vehicular",
],
  },

                       {
    id: 22,
    featured: true, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/plan parejo silvia/1.webp",
      "imagenes/inmuebles/plan parejo silvia/2.webp",
      "imagenes/inmuebles/plan parejo silvia/3.webp",
      "imagenes/inmuebles/plan parejo silvia/4.webp",
      "imagenes/inmuebles/plan parejo silvia/5.webp",
      "imagenes/inmuebles/plan parejo silvia/6.webp",
      "imagenes/inmuebles/plan parejo silvia/7.webp",
      "imagenes/inmuebles/plan parejo silvia/8.webp",
      "imagenes/inmuebles/plan parejo silvia/9.webp",
      "imagenes/inmuebles/plan parejo silvia/10.webp",
      "imagenes/inmuebles/plan parejo silvia/11.webp",
      "imagenes/inmuebles/plan parejo silvia/12.webp",
      "imagenes/inmuebles/plan parejo silvia/13.webp",
      "imagenes/inmuebles/plan parejo silvia/14.webp",
      "imagenes/inmuebles/plan parejo silvia/15.webp",
      "imagenes/inmuebles/plan parejo silvia/16.webp",
      "imagenes/inmuebles/plan parejo silvia/17.webp",
      "imagenes/inmuebles/plan parejo silvia/18.webp",
      "imagenes/inmuebles/plan parejo silvia/19.webp",
      "imagenes/inmuebles/plan parejo silvia/20.webp",
      "imagenes/inmuebles/plan parejo silvia/21.webp",
      "imagenes/inmuebles/plan parejo silvia/22.webp",
      "imagenes/inmuebles/plan parejo silvia/23.webp",
      "imagenes/inmuebles/plan parejo silvia/24.webp",
      "imagenes/inmuebles/plan parejo silvia/25.webp",

    ],
    type: "casa",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Casa Campestre",
    bedrooms: 4, // habitaciones
    bathrooms: 4, // Baños
    area: 1000,
    parking: 2,
    price: 850000000,
    negotiable: true,
    location: "Turbaco / Bolivar",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `CASA CAMPESTRE BARRIO PLAN PAREJO  | TURBACO - BOLIVAR

📍 UBICACIÓN: Barrio Plan Parejo / Turbaco - Bolivar 

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 1000 m²
• ÁREA CONSTRUIDA: 332 m²
• ESTRATO: 3

✨ DISTRIBUCIÓN Y COMODIDADES
• Terraza
• Sala 
• Antesala
• Cocina Amplia
• Comedor
• Estudio
• Cuarto de labores
• Patio sembrado con árboles frutales
• Parqueadero para 2 vehiculos  
• HABITACIONES: 4 
• BAÑOS: 4

📲 ¡AGENDA TU VISITA HOY!
Esta propiedad es el espacio perfecto para familias que buscan comodidad, funcionalidad y un entorno tranquilo en Turbaco. ¡Es la oportunidad de vivir rodeado de naturaleza con todas las facilidades! Escríbeme y conoce tu próximo hogar.

Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [ 
  "casa campestre",
],
  },

                     {
    id: 23,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/newport piso 28/1.webp",
      "imagenes/inmuebles/newport piso 28/2.webp",
      "imagenes/inmuebles/newport piso 28/3.webp",
      "imagenes/inmuebles/newport piso 28/4.webp",
      "imagenes/inmuebles/newport piso 28/5.webp",
      "imagenes/inmuebles/newport piso 28/6.webp",
      "imagenes/inmuebles/newport piso 28/7.webp",
      "imagenes/inmuebles/newport piso 28/8.webp",
      "imagenes/inmuebles/newport piso 28/9.webp",
      "imagenes/inmuebles/newport piso 28/10.webp",
      "imagenes/inmuebles/newport piso 28/11.webp",
      "imagenes/inmuebles/newport piso 28/12.webp",
      "imagenes/inmuebles/newport piso 28/13.webp",
      "imagenes/inmuebles/newport piso 28/14.webp",
      "imagenes/inmuebles/newport piso 28/15.webp",
      "imagenes/inmuebles/newport piso 28/16.webp",
      "imagenes/inmuebles/newport piso 28/17.webp",
      "imagenes/inmuebles/newport piso 28/18.webp",
      "imagenes/inmuebles/newport piso 28/19.webp",
      "imagenes/inmuebles/newport piso 28/20.webp",
      "imagenes/inmuebles/newport piso 28/21.webp",
      "imagenes/inmuebles/newport piso 28/22.webp",
      "imagenes/inmuebles/newport piso 28/23.webp",
      "imagenes/inmuebles/newport piso 28/24.webp",
      "imagenes/inmuebles/newport piso 28/25.webp",
      "imagenes/inmuebles/newport piso 28/26.webp",
      "imagenes/inmuebles/newport piso 28/27.webp",

    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "NewPort | Piso 28°",
    bedrooms: 2, // habitaciones
    bathrooms: 2, // Baños
    area: 52,
    parking: 1,
    price: 230000000,
    negotiable: true,
    location: "Cartagena de Indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 28° | CONJUNTO NEWPORT

📍 UBICACIÓN: Conjunto NewPort | Cartagena de Indias 
🏢 ADMINISTRACIÓN: $135.000

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 52 m²
• ESTRATO: 3
• PISO: 28°

✨ DISTRIBUCIÓN Y COMODIDADES
• Cocina 
• Sala y Comedor
• Balcon panoramico
• Zona de labores
• HABITACIONES: 2
• BAÑOS: 2

🏢 AMENIDADES DEL CONJUNTO
• Vigilancia 24/7
• Ascensor
• Parques infantiles
• Zonas Verdes
• Zona social
• Parqueadero Comunal

📲 ¡AGENDA TU VISITA HOY!
Newport es un espacio ideal para la recreación de toda la familia, logrando consolidar espacios de diversión: zona deportiva, salón para guardería, salón social, gimnasio, piscina y juegos infantiles. Un proyecto ideal para contemplar la belleza de la ciudad.

Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [ 
  "Ascensor",
  "Vigilancia 24/7",
  "Ubicación Estrategica",
],
  },

                     {
    id: 24,
    featured: false, // ... para marcar si el inmueble es destacado o no y que aparezca en la ventana de inicio
    images: [
      "imagenes/inmuebles/Brisas del jardin/1.webp",
      "imagenes/inmuebles/Brisas del jardin/2.webp",
      "imagenes/inmuebles/Brisas del jardin/3.webp",
      "imagenes/inmuebles/Brisas del jardin/4.webp",
      "imagenes/inmuebles/Brisas del jardin/5.webp",
      "imagenes/inmuebles/Brisas del jardin/6.webp",
      "imagenes/inmuebles/Brisas del jardin/7.webp",
    ],
    type: "apartamento",
    typeLabel: "INMUEBLE EN VENTA",
    title: "Brisas del Jardin | Piso 8°",
    bedrooms: 2, // habitaciones
    bathrooms: 2, // Baños
    area: 52.83,
    parking:0,
    price: 165000000,
    negotiable: true,
    location: "Cartagena de Indias",
    
    // ... dentro de los datos de tu PROPERTIES:

description: `ESPECTACULAR APARTAMENTO PISO 8° | CONJUNTO BRISAS DEL JADIN

📍 UBICACIÓN: Conjunto Brisas del Jardin | Cartagena de Indias 
🏢 ADMINISTRACIÓN: $150.000

🏠 ESPECIFICACIONES DEL INMUEBLE
• ÁREA TOTAL: 52.83 m²
• ESTRATO: 3
• PISO: 8°

✨ DISTRIBUCIÓN Y COMODIDADES
• Cocina 
• Sala y Comedor
• Balcon 
• Zona de labores
• Estudio
• HABITACIONES: 2
• BAÑOS: 2

🏢 AMENIDADES DEL CONJUNTO
• Vigilancia 24/7
• Ascensor
• Parques infantiles
• Zonas Verdes
• Zona social
• Parqueadero Comunal

📲 ¡AGENDA TU VISITA HOY!
¡Es el espacio perfecto para descansar, compartir en familia o desarrollar tu proyecto inmobiliario! Escríbeme y conoce esta propiedad.

Contacto: Grupo empresarial Tu Casa Cartagena
WhatsApp: 3104605207`,

features: [ 
  "Ascensor",
  "Vigilancia 24/7",
  "Parque Infantil",
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
