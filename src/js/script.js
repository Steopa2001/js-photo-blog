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
      const foto = fotoArray[i]; // prendo la singola foto

      // Aggiungo al contenitore fotoList una struttura HTML per ogni foto:
      fotoList.innerHTML += `
          <div class="col-10 col-md-5 col-lg-4">
            <div class="card position-relative h-100" style="border-radius: 0">
              <img src="${foto.url}" class="card-img-top p-3" style="border-radius: 0" alt="${foto.title}" />
              <img class="pin" src="./assets/img/pin.svg" style="width: 30px" alt="pin" />
              <div class="card-body">
                <p class="card-text"><em>${foto.title}</em></p>
                <small class="text-muted">${foto.date}</small>
              </div>
            </div>
          </div>
        `;
    }
  });
}

// Eseguo la funzione al caricamento della pagina
generaFoto();
