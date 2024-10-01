
const container = document.getElementById("container");
const boton = document.getElementById("boton");

// URL de la API de personajes de Harry Potter
let url = "https://hp-api.onrender.com/api/characters";

boton.addEventListener("click", () => {
  // Fetch para obtener los datos de la API
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let datos = data;
      crearCard(datos); // Llamada a la función para crear tarjetas
    });
});





function crearCard(data) {
    let cardsHTML = "";
  
    let imagen_por_defecto = "https://i.postimg.cc/MphzdXG9/El-Sombrero-Seleccionador-de-Harry-Potter-le-da-su-nombre-a-una-nueva-arana-600x600.webp";
  
    // Iterar sobre los datos de cada personaje
    for (let i = 0; i < data.length; i++) {
      let user = data[i];
  
      // Crear la estructura HTML en el orden deseado: NOMBRE - IMAGEN - CASA
      cardsHTML += `
        <div class="caja">
            <p class="name_card">${user.name}</p>
            <img src="${user.image ? user.image : imagen_por_defecto}" alt="${user.name}">
            <p>${user.house || "Casa desconocida"}</p>
        </div>
      `;
    }
  
    // Insertar las tarjetas en el contenedor
    container.innerHTML = cardsHTML;
  }
