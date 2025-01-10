// Initialize and add the map
function initMap() {
    // The location of the building
    const location = { lat: 40.748817, lng: -73.985428 }; // Example: New York City (Empire State Building)
  
    // The map, centered at the building location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15, // Zoom level
      center: location, // Center map on building location
    });
  
    // The marker, positioned at the building location
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Building Location",
    });
  }
  