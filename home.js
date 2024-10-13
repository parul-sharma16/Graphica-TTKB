// Leaflet.js - Interactive Map with India GeoJSON Data
var map = L.map('mapid').setView([22.5937, 78.9629], 5); // Set center to India

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Load India GeoJSON data
fetch('assets/india-states.geojson')
  .then(response => response.json())
  .then(geoData => {
    L.geoJSON(geoData, {
      style: function(feature) {
        return {
          color: "#007BFF",
          weight: 2,
          fillOpacity: 0.4
        };
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup("<b>" + feature.properties.NAME_1 + "</b><br>Cases: " + getRandomCases() + "K");
        
        // Highlight state on hover
        layer.on('mouseover', function (e) {
          e.target.setStyle({
            fillOpacity: 0.7
          });
        });
        layer.on('mouseout', function (e) {
          e.target.setStyle({
            fillOpacity: 0.4
          });
        });
      }
    }).addTo(map);
  });

// Function to simulate case data
function getRandomCases() {
  return Math.floor(Math.random() * 500) + 100; // Simulate between 100K and 500K cases
}
