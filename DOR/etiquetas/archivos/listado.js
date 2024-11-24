const lista1 = document.getElementById('1');
const lista2 = document.getElementById('2');
const municipio = document.getElementById('3');

Object.values(PROVINCIAS).forEach(element => {
  const option = document.createElement('option');
  option.value = element.idProvincia;
  option.textContent = element.nombre;
  option.setAttribute('required');
  lista1.append(option);
});

lista1.addEventListener('change', () => {
  municipio.hidden = false
  // console.log(lista1.value);
  let aux = (document.querySelectorAll('#hijos'));

  aux.forEach(element => {
    element.remove();
  });
  Object.values(MUNICIPIOS).forEach(element => {
    // console.log(lista1.value);
    if (element.idProvincia === lista1.value) {
      console.log(lista1.value + "    " + element.idProvincia);

      const option1 = document.createElement('option');
      option1.textContent = element.nombre;
      option1.value = element.idMunicipio;
      option1.id = 'hijos';
      lista2.append(option1);
    }
  })

})

lista2.addEventListener('change', () => {
   console.log(lista2.value);
})  
   