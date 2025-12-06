const map = L.map("map").setView([22.4836, 72.8014], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

L.marker([22.4836, 72.8014]).addTo(map).bindPopup("Petlad");
