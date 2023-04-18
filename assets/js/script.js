addEventListener("DOMContentLoaded",()=>{
    cargarLista("")
})

const listaEl = document.querySelector('#lista')

const cargarLista = async () =>{
    
     
    const APIDetLista= `https://dog.ceo/api/breeds/list/all`
    
    try{
       
        const resp = await fetch(APIDetLista)
        if(resp.status===200){
            const datos= await resp.json()
            renderDetLista(datos.message)
        }
        
        else{
            console.log("ERROR DE API")
        }
    }
    
    catch(error){
        console.log(error)
    }
}

function renderDetLista (datos){
    let valor = ""
    for (const breed in datos) {
        valor +=
        `
        <h4 class="title">${breed}</h4>
        `
    }
    listaEl.innerHTML=valor
}

// Obtener el botón y el div donde se mostrará la imagen
const button = document.querySelector('.btn-get-started');
const imageDiv = document.querySelector('.backgrounddos');

// Agregar un controlador de eventos click al botón
button.addEventListener('click', () => {
  // Evitar que el enlace se siga
  event.preventDefault();
  // Llamar a la función cargarImagen
  cargarImagen();
});

const cargarImagen = async () => {
  // Hacer una solicitud a la API para obtener una imagen aleatoria
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (response.status === 200) {
      const data = await response.json();
      // Crear un elemento img
      const img = document.createElement('img');
      // Establecer el atributo src en la URL de la imagen
      img.src = data.message;
      // Agregar la clase 'random-image' a la imagen
      img.classList.add('random-image');
      // Limpiar el contenido del div
      imageDiv.innerHTML = '';
      // Agregar el elemento img al div
      imageDiv.appendChild(img);
    } else {
      console.log("ERROR DE API");
    }
  } catch (error) {
    console.log(error);
  }
}

 // Obtener el input, el botón y el div donde se mostrará la imagen
const input = document.querySelector('#search-input');
const buttonDos = document.querySelector('#search-button');
const imageContainer = document.querySelector('#image-container');

// Agregar un controlador de eventos click al botón
buttonDos.addEventListener('click', async () => {
  // Obtener la raza ingresada en el input
  const breed = input.value;
  // Llamar a la función cargarImagenDeRaza
  cargarImagenDeRaza(breed);
});

const cargarImagenDeRaza = async (breed) => {
  // Hacer una solicitud a la API para obtener una imagen aleatoria de la raza ingresada
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    if (response.status === 200) {
      const data = await response.json();
      // Limpiar el contenido del div
      imageContainer.innerHTML = '';
      // Crear un elemento img
      const img = document.createElement('img');
      // Establecer el atributo src en la URL de la imagen
      img.src = data.message;
      // Agregar una clase a la imagen
      img.classList.add('dog-image');
      // Agregar el elemento img al div
      imageContainer.appendChild(img);
    } else {
      console.log("ERROR DE API");
    }
  } catch (error) {
    console.log(error);
  }
}
