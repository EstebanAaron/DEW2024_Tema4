const button = document.getElementById('btCreate');
const container = document.getElementById('container');

button.addEventListener('click',(e)=>{
const newBox = document.createElement('div');
newBox.classList.add('box');
if (e.ctrlKey) {
  newBox.classList.add('azul');
}
if (e.altKey) {
  newBox.classList.add('amarillo');
}

console.log(e);
container.append(newBox)

})


