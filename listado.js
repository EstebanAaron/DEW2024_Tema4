const fruits = document.querySelectorAll('li');

fruits.forEach(fruit => fruit.addEventListener('click',aux))

function ramdom() {
  let x = Math.floor(Math.random()*4)+1;
  return x
  
}

function aux() {
  let idInterval;
  
  this.removeEventListener('click',aux)
  
  let result = 'c'+ramdom();
  this.className=result;

  idInterval = setInterval(() => {
    
    let newResult = 'c' + ramdom();
    this.className=newResult;
    
  }, 100);
  this.addEventListener('click',()=>{clearInterval(idInterval)
    this.addEventListener('click',aux)
  })
}
