const inProgress = document.getElementById('in-progress');
const done = document.getElementById('done');
const toDo = document.getElementById('to-do');
const paperbin = document.getElementById('paperbin');
const select = document.getElementById('select');
let newID = 16;
const button = document.getElementById('clear');

select.addEventListener('change',selectColor);
// paperbin.addEventListener()
 
 
function selectColor() {
  select.classList = '';
  select.classList.add(select.value);
}

divsContainers =[inProgress,done,toDo,paperbin];
 
tasks.forEach(element => {
  const div = document.createElement('div');
  div.textContent = element.task
  div.classList.add('task',element.priority);
  div.id=element.id;
  div.draggable =true;
  div.addEventListener('dragstart',onDragStart);
  if (element.state=='in-progress') {
    inProgress.append(div);
  }
  if (element.state=='done') {
    done.append(div);
  }
  if (element.state=='to-do') {
    toDo.append(div)
  }
});

function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}

function onDragOver(e){
  // console.log(e.target);
  e.preventDefault();
  
}

divsContainers.forEach( divC =>{
  // console.log(divC);
  
  divC.addEventListener('dragover',onDragOver);
  divC.addEventListener('drop', onDrop);
})

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');

  if (event.currentTarget.id=='paperbin') {
    document.getElementById(id).classList.add('remove');
    
    setTimeout(() => {
      if (document.getElementById(id).classList.contains('remove')) {
        document.getElementById(id).remove()
      }
     
      
    }, 10000);
    
  }
  else{
    document.getElementById(id).classList.remove('remove');
  }

  const divDrag = document.getElementById(id);
  event.currentTarget.append(divDrag);
  
}
function remove(){
  preventDefault();
  console.log(this);
  
}

document.forms[0].addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log(document.forms[0].elements['task'].value);
 let aux = document.forms[0].elements['task'].value;
 console.log(select.value);
  if (aux.length <3 || select.value=='') {
    alert("Error la longitud tiene que ser como minimo 3 y tiene que elegir una prioridad")
    
  }else{

  
  
  const divNew = document.createElement('div');
  divNew.textContent = aux
  divNew.classList.add('task',select.value);
  divNew.id=newID++;
  divNew.draggable =true;
  divNew.addEventListener('dragstart',onDragStart);
  
    toDo.append(divNew)
  }
})

button.addEventListener('click',removeALL);

function removeALL(){
  [...paperbin.children].forEach(element =>{
    if (element.classList.contains('task')) {
      element.remove();
    }
  })
}