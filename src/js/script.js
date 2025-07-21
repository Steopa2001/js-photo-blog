// Recupero il contenitore delle card
const fotoList = document.getElementById("foto-list");

// Funzione per generare le card dinamicamente
function generaFoto() {

  // Svuoto la lista
  fotoList.innerHTML = "";

    // Chiamata AJAX con Axios
    axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {

    });

}
