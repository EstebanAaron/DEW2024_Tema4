const divAnimals = document.getElementById('animals');

data.forEach(animals =>{
  const span = document.createElement('span');
  span.innerHTML= '&#'+ animals.code+';'
  divAnimals.append(span);
})