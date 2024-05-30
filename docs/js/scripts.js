document.addEventListener("DOMContentLoaded", function() {
    // Initialize the map
    var map = L.map('mapid').setView([51.505, -0.09], 2); // Center at a default location

    // // Add a tile layer (OpenStreetMap tiles)
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    // Array of locations with coordinates and descriptions
    var locations = [
        // {
        //     coords: [19.0760, 72.8777],
        //     title: "Mumbai",
        //     // description: "Our first trip together to London."
        // },
        // {
        //     coords: [18.5204, 73.8567],
        //     title: "Pune",
        //     // description: "A romantic getaway in Paris."
        // },
        // {
        //     coords: [37.7749, 122.4194],
        //     title: "San Francisco",
        //     // description: "Exploring the city that never sleeps."
        // },
        // {
        //     coords: [33.4255, 111.9400],
        //     title: "Tempe",
        //     // description: "Exploring the city that never sleeps."
        // }
    ];

    // Add markers to the map
    // locations.forEach(function(location) {
    //     var marker = L.marker(location.coords).addTo(map);
    //     marker.bindPopup("<b>" + location.title + "</b><br>" + location.description);
    // });

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
