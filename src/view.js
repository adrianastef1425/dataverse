export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const newUl = document.createElement("ul");
  //crear la etiqueta ul  
  data.forEach(onlyCat => {
    // const img = document.createElement("img");//crear la etiqueta img
    // img.src = onlyCat.imageUrl;//insertar la imagen de la data en la etiqueta img
    const newLi = document.createElement("li");//crear la etiqueta li para un gato
    // newLi.appendChild(img);//inserta la etiqueta img en la etiqueta li de ese gato
    // const h2 = document.createElement("h2");//crear la etiqueta h2
    // const nameCat = document.createTextNode(onlyCat.name);//crea un nuevo texto, este texto sera el nombre de cada gato
    // //document.createTextNode(JSON.stringify(data[i]));
    // h2.appendChild(nameCat);//inserta el nombre de cada gato a la etiqueta h2
    // newLi.appendChild(h2); //inserta la etiqueta h2 en la etiqueta li, hace esto para cada gato en la iteración
    // const p = document.createElement("p");//crea la etiqueta p
    // const shortDesc = document.createTextNode(onlyCat.shortDescription);//crea un nuevo texto, este texto sera la shortDescription de cada gato
    // p.appendChild(shortDesc);//inserta la shortdescription de cada gato en la etiqueta p
    // newLi.appendChild(p);//inserta la etiqueta p en la etiqueta li

    newLi.innerHTML = `<li itemscope itemtype="RazasDeGatos">
    <img src="${onlyCat.imageUrl}" alt="${onlyCat.id}">
    <h2 itemprop="name">${onlyCat.name}</h2>
    <p itemprop="shortDescription">${onlyCat.shortDescription}</p>
    <p>Tamaño: <span itemprop="tamanoGato">${onlyCat.facts["tamanoGato"]}</span></p>
    <p>Pelaje: <span itemprop="pelajeGato">${onlyCat.facts["pelajeGato"]}</span></p>
    <p>Esperanza de vida: <span itemprop="esperanzaMax">${onlyCat.facts["esperanzaMax"]}</span></p>
    <p>Precio: <span itemprop="precioCachorro">${onlyCat.facts["precioCachorro"]}</span></p>
    <button id="ver-mas" class="botonVer">Ver más</button>
  </li>`

    newUl.appendChild(newLi);//inserta la etiqueta li en la etiqueta ul
  });
  return newUl;
};