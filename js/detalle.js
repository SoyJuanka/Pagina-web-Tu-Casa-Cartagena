document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const property = getPropertyById(id);

  const container = document.getElementById("property-detail");
  if (!property) {
    container.innerHTML = `
      <div class="detail-error">
        <h2>Inmueble no encontrado</h2>
        <p>El inmueble que buscas no existe o fue removido del catálogo.</p>
        <a href="catalogo.html" class="btn btn-primary">Volver al catálogo</a>
      </div>
    `;
    return;
  }

  document.title = `${property.title} | Tu Casa Cartagena`;

  // ==========================================
  // GENERAR EL MOSAICO DE IMÁGENES
  // ==========================================
  let galeriaHTML = '';
  let todasLasFotos = []; // Guardará el array de fotos global para el Lightbox
  
  if (property.images && Array.isArray(property.images)) {
    todasLasFotos = property.images;
    const fotosMosaico = property.images.slice(0, 5);
    
    const mapasImagenes = fotosMosaico.map((url, index) => {
      // Agregamos un atributo data-index para que al hacer clic en cualquier foto del mosaico también se abra
      if (index === 0) {
        return `<img src="${url}" class="gallery__img gallery__img--main" data-index="${index}" alt="Portada de ${property.title}">`;
      } else {
        return `<img src="${url}" class="gallery__img" data-index="${index}" alt="Vista interior de ${property.title}">`;
      }
    }).join('');

    let botonVerMas = '';
    if (property.images.length > 5) {
      botonVerMas = `<button class="gallery__btn-more" id="open-lightbox-btn">+${property.images.length - 5} fotos</button>`;
    }

    galeriaHTML = `
      <div class="gallery-container">
        <div class="property-gallery">
          ${mapasImagenes}
        </div>
        ${botonVerMas}
      </div>
    `;
  } else {
    galeriaHTML = `
      <div class="detail-hero">
        <img src="${property.image || 'imagenes/default.png'}" alt="${property.title}">
      </div>
    `;
  }

  const bedroomsInfo =
    property.bedrooms > 0
      ? `<div class="detail-stat">
           <img src="imagenes/icono cama.svg" class="property-feature__icon" alt="Icono de habitación" />
           <span>${property.bedrooms} Habitaciones</span>
         </div>`
      : "";

  const bathroomsInfo =
    property.bathrooms > 0
      ? `<div class="detail-stat">
           <img src="imagenes/icono baño.svg" class="property-feature__icon" alt="Icono de baño" />
           <span>${property.bathrooms} Baños</span>
         </div>`
      : "";

  const parkingInfo =
    property.parking > 0
      ? `<div class="detail-stat">
           <img src="imagenes/icono parqueadero.svg" class="property-feature__icon" alt="Icono de parqueadero" />
           <span>${property.parking} Parqueadero${property.parking > 1 ? "s" : ""}</span>
         </div>`
      : "";

  const featuresList = property.features
    .map((f) => `<li>${f}</li>`)
    .join("");

  // PINTAMOS EL CONTENIDO ORIGINAL + LA ESTRUCTURA OCULTA DEL LIGHTBOX
  container.innerHTML = `
    ${galeriaHTML}

    <div class="detail-content">
      <div class="detail-main">
        <span class="property-card__type">${property.typeLabel}</span>
        <h1 class="detail-title">${property.title}</h1>
        <p class="detail-location">
          <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          ${property.location}
        </p>
        <div class="detail-stats">
          ${bedroomsInfo}
          ${bathroomsInfo}
          <div class="detail-stat">
            <img src="imagenes/icono area.svg" class="property-feature__icon" alt="Icono de área" />
            <span>${property.area} m²</span>
          </div>
          ${parkingInfo}
        </div>
        
        <p class="detail-description" style="white-space: pre-line;">${property.description}</p>
        
        <h2 class="detail-subtitle">Características</h2>
        <ul class="detail-features">${featuresList}</ul>
      </div>

      <aside class="detail-sidebar">
        <div class="detail-price-card">
          <p class="detail-price">${formatPrice(property.price, property.type)}</p>
          ${property.negotiable ? '<span class="property-card__status">NEGOCIABLE</span>' : ""}
          <a href="https://wa.me/573104605207?text=Hola, me interesa el inmueble: ${encodeURIComponent(property.title)}" 
             class="btn btn-whatsapp" target="_blank" rel="noopener">
            Consultar por WhatsApp
          </a>
          <a href="catalogo.html" class="btn btn-outline">Volver al catálogo</a>
        </div>
      </aside>
    </div>

    <div id="lightbox-modal" class="lightbox">
      <span class="lightbox__close">&times;</span>
      <button class="lightbox__nav lightbox__nav--prev">&#10094;</button>
      <div class="lightbox__content">
        <img id="lightbox-img" src="" alt="Vista ampliada">
        <div id="lightbox-counter" class="lightbox__counter">1 / 12</div>
      </div>
      <button class="lightbox__nav lightbox__nav--next">&#10095;</button>
    </div>
  `;

  // ==========================================
  // LÓGICA LOGISTICA DEL LIGHTBOX (INTERACTIVIDAD)
  // ==========================================
  if (todasLasFotos.length > 0) {
    const modal = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    const counter = document.getElementById("lightbox-counter");
    const closeBtn = document.querySelector(".lightbox__close");
    const prevBtn = document.querySelector(".lightbox__nav--prev");
    const nextBtn = document.querySelector(".lightbox__nav--next");
    const openBtn = document.getElementById("open-lightbox-btn");
    
    let fotoActualIndex = 0;

    // Función para actualizar la foto dentro del Lightbox
    const mostrarFoto = (index) => {
      if (index >= todasLasFotos.length) index = 0;
      if (index < 0) index = todasLasFotos.length - 1;
      
      fotoActualIndex = index;
      lightboxImg.src = todasLasFotos[fotoActualIndex];
      counter.textContent = `${fotoActualIndex + 1} / ${todasLasFotos.length}`;
    };

    // Abrir desde el botón "+ fotos"
    if (openBtn) {
      openBtn.addEventListener("click", () => {
        modal.classList.add("lightbox--active");
        mostrarFoto(0);
      });
    }

    // Abrir haciendo clic directo en cualquier foto del mosaico
    document.querySelectorAll(".gallery__img").forEach(img => {
      img.addEventListener("click", (e) => {
        const index = parseInt(e.target.getAttribute("data-index"));
        modal.classList.add("lightbox--active");
        mostrarFoto(index);
      });
    });

    // Eventos de navegación
    nextBtn.addEventListener("click", (e) => { e.stopPropagation(); mostrarFoto(fotoActualIndex + 1); });
    prevBtn.addEventListener("click", (e) => { e.stopPropagation(); mostrarFoto(fotoActualIndex - 1); });
    closeBtn.addEventListener("click", () => modal.classList.remove("lightbox--active"));
    modal.addEventListener("click", () => modal.classList.remove("lightbox--active")); // Cierra al hacer clic fuera
  }
});