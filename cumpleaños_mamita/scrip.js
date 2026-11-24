
/* CORAZONES FLOTANTES */

const contenedorCorazones = document.getElementById("hearts");

function crearCorazon() {
    const corazon = document.createElement("span");

    corazon.classList.add("heart");
    corazon.innerHTML = "♥";
    corazon.style.left = Math.random() * 100 + "%";
    corazon.style.fontSize = (15 + Math.random() * 30) + "px";
    corazon.style.animationDuration = (5 + Math.random() * 7) + "s";

    contenedorCorazones.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 12000);
}

setInterval(crearCorazon, 350);


/* REPRODUCTOR DE MÚSICA */

const musica = document.getElementById("musica");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const volumen = document.getElementById("volumen");
const estado = document.getElementById("estadoMusica");
const disco = document.querySelector(".disco");

musica.volume = 0.7;

playBtn.addEventListener("click", async () => {
    try {
        await musica.play();

        estado.textContent = "♪ Reproduciendo música para mamá ❤️";
        disco.classList.add("sonando");

    } catch (error) {
        estado.textContent = "No se pudo reproducir madre.mp3";
        console.error("Error de reproducción:", error);
    }
});

pauseBtn.addEventListener("click", () => {
    musica.pause();

    disco.classList.remove("sonando");
    estado.textContent = "Música pausada ❤️";
});

volumen.addEventListener("input", () => {
    musica.volume = Number(volumen.value);
});

musica.addEventListener("ended", () => {
    disco.classList.remove("sonando");
});

musica.addEventListener("error", () => {
    estado.textContent = "Error al cargar madre.mp3";
});
