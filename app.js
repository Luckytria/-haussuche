/* ======================================
   Fredys Haussuche
   app.js
====================================== */

const searchButton = document.querySelector("button");
const cards = document.querySelector(".cards");

// Beispieldaten (werden später durch echte Suchergebnisse ersetzt)
const demoHouses = [
{
    title: "Einfamilienhaus in Wees",
    rooms: 5,
    rent: 1450,
    area: 142,
    location: "24999 Wees"
},
{
    title: "Doppelhaushälfte in Munkbrarup",
    rooms: 4,
    rent: 1350,
    area: 126,
    location: "24960 Munkbrarup"
},
{
    title: "Haus in Flensburg-Mürwik",
    rooms: 6,
    rent: 1690,
    area: 168,
    location: "24944 Flensburg"
}
];

function renderResults(list){

    cards.innerHTML = "";

    if(list.length === 0){

        cards.innerHTML = `
        <div class="card">
            <h2>Keine Treffer</h2>
            <p>Momentan wurden keine passenden Häuser gefunden.</p>
        </div>
        `;
        return;
    }

    list.forEach(house=>{

        cards.innerHTML += `
        <div class="card">

            <h2>${house.title}</h2>

            <p>📍 ${house.location}</p>

            <p>🛏️ ${house.rooms} Zimmer</p>

            <p>📐 ${house.area} m²</p>

            <p>💶 ${house.rent} €/Monat</p>

            <button class="favorite">❤️ Favorit</button>

        </div>
        `;
    });

    addFavoriteEvents();

}

function search(){

    const inputs=document.querySelectorAll("input");

    const rooms=parseInt(inputs[2].value)||0;

    const maxRent=parseInt(inputs[3].value)||999999;

    const results=demoHouses.filter(house=>{

        return house.rooms>=rooms &&
               house.rent<=maxRent;

    });

    renderResults(results);

}

function addFavoriteEvents(){

    const buttons=document.querySelectorAll(".favorite");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            button.innerHTML="✅ Gespeichert";

            button.disabled=true;

            button.style.background="#d9a441";

        });

    });

}

searchButton.addEventListener("click",search);

// Beim Laden automatisch anzeigen
renderResults(demoHouses);

// Registrierung des Service Workers (für die PWA)
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => console.log("Service Worker registriert"))
            .catch(err => console.log("Fehler:", err));
    });
}
