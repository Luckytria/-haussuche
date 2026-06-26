document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("searchButton");

    button.addEventListener("click", () => {

        const ort = document.querySelectorAll("input")[0].value;
        const radius = document.querySelectorAll("input")[1].value;
        const zimmer = document.querySelectorAll("input")[2].value;
        const miete = document.querySelectorAll("input")[3].value;

        const suchtext =
            encodeURIComponent(
                `Haus zur Miete ${ort} ${radius} km mindestens ${zimmer} Zimmer ${miete} Euro`
            );

        const seiten = [

            `https://www.google.de/search?q=${suchtext}+Immobilienscout24`,

            `https://www.google.de/search?q=${suchtext}+Immowelt`,

            `https://www.google.de/search?q=${suchtext}+Immonet`,

            `https://www.google.de/search?q=${suchtext}+Kleinanzeigen`,

            `https://www.google.de/search?q=${suchtext}+Ohne-Makler`

        ];

        seiten.forEach((seite, index) => {

            setTimeout(() => {

                window.open(seite, "_blank");

            }, index * 400);

        });

    });

});
