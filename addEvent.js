const p = document.querySelector('p');
const button = document.querySelector('button');
const check = document.querySelector('#check');
let a;
let count =1;

function addText() {
  if (check.checked) {
    p.textContent += "Esto es contenido"+count++;
  }
  
 
}

  // a =setInterval(addText,10)


button.addEventListener('click',addText)

check.addEventListener('change',function a(){
  console.log('cambiando...', check.checked);
  if (check.checked){
    setInterval(b,2000);
   
    function b() {
      if (check.checked) {
        check.checked=false
      }
      else{
        check.checked=true
      }
     
    }
  }
})