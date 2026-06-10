document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const typeFilter = document.getElementById("type-filter");
  const priceFilter = document.getElementById("price-filter");
  const bedroomsFilter = document.getElementById("bedrooms-filter");
  const resultsCount = document.getElementById("results-count");

  function filterProperties() {
    const search = searchInput.value.toLowerCase().trim();
    const type = typeFilter.value;
    const priceRange = priceFilter.value;
    const bedrooms = bedroomsFilter.value;

    const filtered = PROPERTIES.filter((property) => {
      const matchesSearch =
        !search ||
        property.title.toLowerCase().includes(search) ||
        property.location.toLowerCase().includes(search) ||
        property.description.toLowerCase().includes(search);

      const matchesType = !type || property.type === type;

      let matchesPrice = true;
      if (priceRange) {
        const [min, max] = priceRange.split("-").map(Number);
        matchesPrice = property.price >= min && (max ? property.price <= max : true);
      }

      let matchesBedrooms = true;
      if (bedrooms) {
        if (bedrooms === "4+") {
          matchesBedrooms = property.bedrooms >= 4;
        } else {
          matchesBedrooms = property.bedrooms === Number(bedrooms);
        }
      }

      return matchesSearch && matchesType && matchesPrice && matchesBedrooms;
    });

    renderPropertyCards("catalog-properties", filtered);
    resultsCount.textContent = `${filtered.length} inmueble${filtered.length !== 1 ? "s" : ""} encontrado${filtered.length !== 1 ? "s" : ""}`;
  }

  searchInput.addEventListener("input", filterProperties);
  typeFilter.addEventListener("change", filterProperties);
  priceFilter.addEventListener("change", filterProperties);
  bedroomsFilter.addEventListener("change", filterProperties);

  filterProperties();
});
