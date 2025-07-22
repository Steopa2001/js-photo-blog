// OVERLAY:
// Recupero dal DOM l'elemento overlay tramite il suo id "overlay"
const overlay = document.getElementById("overlay");
// All'interno dell'overlay cerco il bottone di chiusura con la classe "close-btn"
const closeBtn = overlay.querySelector(".close-btn");

// Rimuovo la classe "d-none" dall'elemento overlay così l'overlay torna visibile
function mostraOverlay() {
  overlay.classList.remove("d-none");
}

// Aggiungo la classe "d-none" all'elemento overlay
function nascondoOverlay() {
  overlay.classList.add("d-none");
}


// Recupero il contenitore delle card dal DOM
const fotoList = document.getElementById("foto-list");

// Funzione per generare le card dinamicamente
function generaFoto() {
  // Pulisco il contenuto precedente dentro fotoList, così evito di duplicare le card
  fotoList.innerHTML = "";

  // Faccio una chiamata HTTP GET all'API usando Axios
  // L'API restituisce un array di oggetti con info sulle foto
  axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
    // Salvo in fotoArray i dati ricevuti dalla risposta
    // resp.data contiene l'array di foto
    const fotoArray = resp.data;

    // Per debugging: stampo l'array di foto in console così vedo cosa arriva
    console.log(fotoArray);

    // Ciclo classico for per scorrere l'array delle foto
    for (let i = 0; i < fotoArray.length; i++) {
      // prendo la singola foto
      const foto = fotoArray[i];

      // Aggiungo al contenitore fotoList una struttura HTML per ogni foto:
      fotoList.innerHTML += `
          <div class="col-10 col-md-5 col-lg-4">
            <div class="card position-relative h-100" style="border-radius: 0">
              <img src="${foto.url}" class="card-image p-3" style="border-radius: 0" alt="${foto.title}" />
              <img class="pin" src="./assets/img/pin.svg" style="width: 30px" alt="pin" />
              <div class="card-body">
                <p class="card-text"><em>${foto.title}</em></p>
                <p class="data">${foto.date}</p>
              </div>
            </div>
          </div>
        `;
    }

    // Quando clicco sul bottone di chiusura, chiamo la funzione nascondoOverlay per nascondere l'overlay
    closeBtn.addEventListener("click", nascondoOverlay);

    // Seleziono tutte le immagini cliccabili
    const immagini = document.querySelectorAll(".card-image");

    // Per ogni immagine aggiungo il click per mostrare l’overlay
    immagini.forEach((img) => {
      img.addEventListener("click", function () {
        mostraOverlay();
      });
    });
  });
}

// Eseguo la funzione al caricamento della pagina
generaFoto();


