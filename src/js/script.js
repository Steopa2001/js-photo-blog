// Recupero il contenitore delle card
const fotoList = document.getElementById("foto-list");

// Funzione per generare le card dinamicamente
function generaFoto() {
  // Svuoto la lista
  fotoList.innerHTML = "";

  // Chiamata AJAX con Axios
  axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
    const fotoArray = resp.data;

    //Ciclo sull'array e creo una card per ogni oggetto
    fotoArray.forEach((foto) => {
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
    });
  });
};
