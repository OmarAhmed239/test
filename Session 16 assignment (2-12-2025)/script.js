const destinations = [
    {
        title: "CERN - The Large Hadron Collider",
        image: "beautiful-landscape-mother-nature.jpg"
    },
    {
        title: "NASA Kennedy Space Center",
        image: "cyclist-riding-bike-sunset-mountain-road.jpg"
    },
    {
        title: "MIT Media Lab",
        image: "little-boy-eating-christmas-cookie.jpg"
    },
    {
        title: "Silicon Valley Tech Hub",
        image: "pexels-burst-373912.jpg"
    },
    {
        title: "Fermilab - Particle Physics Laboratory",
        image: "pexels-galimotion-23799.jpg"
    },
    {
        title: "JPL - Jet Propulsion Laboratory",
        image: "pexels-michal-packo-1012387829-28861960.jpg"
    },
    {
        title: "European Space Agency (ESA)",
        image: "pexels-pixabay-256302.jpg"
    },
    {
        title: "Max Planck Institute for Quantum Optics",
        image: "pexels-pixabay-256541.jpg"
    },
    {
        title: "Harvard Science Center",
        image: "pexels-quang-nguyen-vinh-222549-2132061.jpg"
    },
    {
        title: "Stanford Linear Accelerator Center",
        image: "pexels-spacex-23769.jpg"
    },
    {
        title: "Tokyo Institute of Technology",
        image: "pexels-spacex-586030.jpg"
    },
    {
        title: "Indian Space Research Organisation (ISRO)",
        image: "pexels-mathias-sogorski-746842789-30637742.jpg"
    },
    {
        title: "London Science Museum",
        image: "wind-fans.jpg"
    },
    {
        title: "National Geographic Explorers Hall",
        image: "young-handsome-man-listens-music-smartphone.jpg"
    },
    {
        title: "Perimeter Institute for Theoretical Physics",
        image: "370031-PBF3VF-509.jpg"
    }
];

const container = document.getElementById('destination-container');

destinations.forEach(destination => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = destination.image; // You can use a placeholder image URL if necessary
    img.alt = destination.title;

    const title = document.createElement('h3');
    title.textContent = destination.title;

    card.appendChild(img);
    card.appendChild(title);
    container.appendChild(card);
});