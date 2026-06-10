const ICON_BED = `<img src="imagenes/icono cama.svg" class="property-feature__icon" alt="Icono de habitación" />`;

const ICON_TOILET = `<img src="imagenes/icono baño.svg" class="property-feature__icon" alt="Icono de baño" />`;

const ICON_AREA = `<img src="imagenes/icono area.svg" class="property-feature__icon" alt="Icono de area" />`;

function createFeatureItem(icon, label) {
  return `
    <div class="property-feature">
      ${icon}
      <span class="property-feature__label">${label}</span>
    </div>
  `;
}

function createPropertyCard(property) {
  const card = document.createElement("a");
  card.href = `inmueble.html?id=${property.id}`;
  card.className = "property-card";
  card.setAttribute("aria-label", `Ver detalles de ${property.title}`);

  const bedroomsLabel = property.bedrooms > 0 ? property.bedrooms : "—";
  const bathroomsLabel = property.bathrooms > 0 ? property.bathrooms : "—";

  // CORRECCIÓN EXTRA: Obtenemos la foto de portada de forma segura.
  // Si existe el array 'images', toma la primera foto [0]. Si no, busca la clave antigua o pone una por defecto.
  const fotoPortada = (property.images && property.images[0]) ? property.images[0] : (property.image || 'imagenes/default.png');

  card.innerHTML = `
    <div class="property-card__image">
      <img src="${fotoPortada}" alt="${property.title}" loading="lazy">
    </div>
    <span class="property-card__type">${property.typeLabel}</span>
    <h3 class="property-card__title">${property.title}</h3>
    <div class="property-card__features">
      ${createFeatureItem(ICON_BED, bedroomsLabel)}
      ${createFeatureItem(ICON_TOILET, bathroomsLabel)}
      ${createFeatureItem(ICON_AREA, `${property.area} m²`)}
    </div>
    <p class="property-card__price">${formatPrice(property.price, property.type)}</p>
    ${property.negotiable ? '<span class="property-card__status">NEGOCIABLE</span>' : ""}
  `;

  return card;
}

function renderPropertyCards(containerId, properties) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  if (properties.length === 0) {
    container.innerHTML = '<p class="no-results">No se encontraron inmuebles con los filtros seleccionados.</p>';
    return;
  }

  properties.forEach((property) => {
    container.appendChild(createPropertyCard(property));
  });
}