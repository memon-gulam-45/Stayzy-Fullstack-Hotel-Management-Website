listing.geometry.coordinates.reverse();

const map = L.map("map").setView(listing.geometry.coordinates, 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

let customIcon = L.icon({
  iconUrl: "../pin.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

L.marker(listing.geometry.coordinates, { icon: customIcon })
  .addTo(map)
  .bindPopup(`<b>${listing.location}</b>`)
  .openPopup();
