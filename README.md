# Tu Casa Cartagena - Sitio Web Inmobiliario

Sitio web para la inmobiliaria Tu Casa Cartagena, basado en el diseño de Figma.

## Estructura del proyecto

```
Tu Casa Cartagena/
├── index.html          → Página principal (landing)
├── catalogo.html       → Catálogo completo con filtros (se abre en nueva pestaña)
├── inmueble.html       → Vista detallada de cada inmueble
├── css/
│   └── styles.css      → Estilos globales
└── js/
    ├── properties.js   → Datos de todos los inmuebles
    ├── cards.js        → Generador de tarjetas (compartido)
    ├── main.js         → Lógica de la página principal
    ├── catalogo.js     → Filtros y búsqueda del catálogo
    └── detalle.js      → Vista detallada del inmueble
```

## Cómo abrir en Visual Studio

1. Abre **Visual Studio** o **Visual Studio Code**
2. Ve a **Archivo → Abrir carpeta**
3. Selecciona la carpeta `Tu Casa Cartagena`
4. Haz clic derecho en `index.html` → **Abrir con Live Server** (extensión recomendada)
   - O simplemente abre `index.html` en tu navegador

## Funcionalidades

- **Tarjetas dinámicas**: Los inmuebles destacados se generan con JavaScript desde `properties.js`
- **Catálogo en nueva ventana**: El botón "INMUEBLES" abre `catalogo.html` en una pestaña independiente
- **Filtros de búsqueda**: Por texto, tipo (venta/arriendo), precio y habitaciones
- **Tarjetas clicables**: Al hacer clic en cualquier tarjeta se abre la vista detallada del inmueble
- **Diseño responsive**: Se adapta a móviles, tablets y escritorio

## Personalización

- **Agregar inmuebles**: Edita el array `PROPERTIES` en `js/properties.js`
- **Cambiar datos de contacto**: Busca `573001234567` y `contacto@tucasacartagena.com` en los archivos HTML
- **Reemplazar imágenes**: Cambia las URLs en `properties.js` por tus propias fotos en una carpeta `assets/images/`
