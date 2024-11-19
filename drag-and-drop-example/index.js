document.querySelectorAll('.example-draggable').
forEach(div => {
  div.draggable =true;
  div.addEventListener('dragstart',onDragStart);
  
})

function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);

    event
    .currentTarget
    .style
    .backgroundColor = 'yellow';
}

function onDragOver(e){
  // console.log(e.target);
  e.preventDefault();
  
}

document.querySelectorAll('.example-dropzone')
  .forEach( div =>{
    div.addEventListener('dragover',onDragOver);
    div.addEventListener('drop', onDrop)
  })

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');

  console.log(id);

  const divDrag = document.getElementById(id);
  event.currentTarget.append(divDrag);
  divDrag.style.backgroundColor ='';
  
}