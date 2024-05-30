document.addEventListener("DOMContentLoaded", function() {
    // Initialize the map
    var map = L.map('mapid').setView([51.505, -0.09], 2); // Center at a default location

    // Add a tile layer (OpenStreetMap tiles)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Array of locations with coordinates and descriptions
    var locations = [
        {
            coords: [51.505, -0.09],
            title: "London",
            description: "Our first trip together to London."
        },
        {
            coords: [48.8566, 2.3522],
            title: "Paris",
            description: "A romantic getaway in Paris."
        },
        {
            coords: [40.7128, -74.0060],
            title: "New York",
            description: "Exploring the city that never sleeps."
        }
    ];

    // Add markers to the map
    locations.forEach(function(location) {
        var marker = L.marker(location.coords).addTo(map);
        marker.bindPopup("<b>" + location.title + "</b><br>" + location.description);
    });

    // Modal functionality
    var modal = document.getElementById("messageModal");
    var btn = document.getElementById("messageBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
