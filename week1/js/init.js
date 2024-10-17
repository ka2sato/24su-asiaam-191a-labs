// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/satellite/style.json?key=7rnB2sjZJWhB4uUDzd8a', // Your style URL
    center: [ 138.385391, 34.985828], // Starting position [lng, lat]
    zoom: 15 // Starting zoom level
});

let longitude = 138.385391;
let latitude = 34.985828;

// Add a marker to the map
const marker = new maplibregl.Marker()
    .setLngLat([longitude, latitude])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
    .setHTML('Hello! This is an HTML popup, meaning I can add any <tags> I want here! Just be sure to close them </tags>'))
    .addTo(map);

    let longitude2 = 138.4;
    let latitude2 = 35.0;
// Add a marker to the map
const marker2 = new maplibregl.Marker()
.setLngLat([longitude2, latitude2])
.setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
.setHTML('<div class="awesomePopup">Hello! This is an HTML popup, meaning I can add any <tags> I want here! Just be sure to close them </tags></div>'))
.addTo(map);

// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([ -118.444, 34.0709])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('Math Sciences 4328 aka the Technology Sandbox<br> is the lab where I used to work in '))
    .addTo(map);