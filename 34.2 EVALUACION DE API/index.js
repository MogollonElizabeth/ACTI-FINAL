const itemsContainer = document.querySelector("#list-items")

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name   // HOLA 
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}


async function fetchColorsList() {
try{
  const URL= 'https://reqres.in/api/unknown';
  const info = await fetch(URL)
  const datos= await info.json();
  
  const traer_array_de_id= datos.data;
  for(i=0; i<traer_array_de_id.length; i++){

      const guardar_colores_API= traer_array_de_id[i];
      addItem(guardar_colores_API);
      
  } 
  //console.log( JSON.stringify(traer_array_de_id,null,2));
  localStorage.setItem('DESDE LA API',JSON.stringify(traer_array_de_id,null,2))

}
  catch(error){
    console.log(error);

  }

}

function crearcarrusel(elem){
  const dentrode= document.querySelector(".carousel-inner")
  const creardivUNO= document.createElement("div");
  creardivUNO.className="carousel-item"
  

  const crearIMGUNO= document.createElement("p")
  crearIMGUNO.innerText=elem.id;
  crearIMGUNO.style.textAlign="center"
  crearIMGUNO.style.fontSize="40px"
  crearIMGUNO.style.backgroundColor=elem.color;

  creardivUNO.append(crearIMGUNO);

  const crearImdos= document.createElement("p")
  crearImdos.innerText=elem.name;
  crearImdos.style.textAlign="center"
  crearImdos.style.fontSize="40px"
  crearImdos.style.backgroundColor=elem.color;
  creardivUNO.append(crearImdos);

  const crearImdtres= document.createElement("p")
  crearImdtres.innerText=elem.color;
  crearImdtres.style.textAlign="center"
  crearImdtres.style.fontSize="40px"
  crearImdtres.style.backgroundColor=elem.color;
  creardivUNO.append(crearImdtres);

  dentrode.append(creardivUNO);

}



function loadColorsFromStorage() {

  const traerdelocal=localStorage.getItem('DESDE LA API')

  const convertir_objeto= JSON.parse(traerdelocal);
  
  for (i=0; i<convertir_objeto.length; i++){

        let sacartodo= convertir_objeto[i];
        crearcarrusel(sacartodo)

  }
  
}

fetchColorsList()
loadColorsFromStorage()  

//crearcarrusel()
