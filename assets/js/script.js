const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://www.feriadosapp.com/api/holidays.json`
    );
    const datos = await respuesta.json();
    
    datos.data.map(a=> {
    const myTable = document.getElementById("myTable")
    myTable.innerHTML += 
    `<tr>
    <th scope="row">${a.id}</th>
    <td>${a.date}</td>
    <td>${a.title}</td>
    <td>${a.extra}</td>
    <td>${a.law}</td>
    </tr>`

      console.log(a)
    });
    // document.getElementById("#myTable").innerHTML = "<p>Estoy aca</p>"
  //   ´´

  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();
