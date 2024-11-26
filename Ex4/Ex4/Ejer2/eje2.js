const temas = document.getElementById('temasContainer');
const formId = document.getElementById('suscripcionForm');
let isValid =true;

TEMAS.forEach( element =>{
  const input = document.createElement('input');
  input.type= 'checkbox';
  input.name='tema[]';
  input.id=element
  input.value=element

  const label = document.createElement('label');
  label.setAttribute('for',element);
  label.textContent=element;

  temas.append(input,label)
})

formId.addEventListener('input', (e)  => {
  isValid =true

  if (e.target.tagName == 'INPUT') {
    
    const nombre = document.getElementById('nombre');
    
    if (nombre.value.length <3) {
      nombre.value = nombre.value.toUpperCase();
      nombre.setCustomValidity('El nombre de usuario debe tener al menos 3 caracteres.');
      nombre.nextElementSibling.textContent = nombre.validationMessage;
      isValid = false;
     
    } else {
      nombre.value = nombre.value.toUpperCase();
      nombre.setCustomValidity('');
      nombre.nextElementSibling.textContent = '';
      
      
      // //e.target.setCustomValidity('');
      // e.target.nextElementSibling.textContent = e.target.validationMessage;
    }


    const dni = document.getElementById('dni');
    const dniPattern = /^[0-9]{8}-[A-Z]{1}/;
    if(!dniPattern.test(dni.value)){
      dni.setCustomValidity('Por favor, introduce 8 digitos , un guion y una letra mayuscula');
      dni.nextElementSibling.textContent = dni.validationMessage;
      isValid = false;
      } else {
      dni.setCustomValidity('');
      dni.nextElementSibling.textContent  = '';
      }
    }
      if(document.querySelector('input[name="tipo"]:checked').value=='elite'){
        [...formId.elements['tema[]']].forEach(i => i.checked=true)

      }

      if ( [...formId.elements['tema[]']].filter(i => i.checked).length > checklength() ) {
        document.getElementById('errorTema').textContent='tienes demasiados temas para tu tipo de suscripcion'
        isValid = false;
      }
      else if([...formId.elements['tema[]']].filter(i => i.checked).length < checklength()){
         document.getElementById('errorTema').textContent='te faltan temas para tu tipo de suscripcion'
         isValid = false;
      }
      else{
         document.getElementById('errorTema').textContent='';
      }

      console.log(document.querySelector('input[name="tipo"]:checked').value);
      
      
    
    
  
});

function checklength() {
  let tipo =document.querySelector('input[name="tipo"]:checked').value
  if (tipo=='basico') {
    return 1
  }
  if (tipo=='estandar') {
    return 3
  }
  if(tipo=='premium'){
    return 6
  }
  if (tipo=='elite') {
    return TEMAS.length
  }
}

formId.addEventListener('submit', function(event) {
  event.preventDefault();
  // let isValid = true;

  // // Validación del nombre de usuario
  // const nombre = document.getElementById('nombre');
  // if (nombre.value.length < 5) {
  //     nombre.setCustomValidity('El nombre de usuario debe tener al menos 5 caracteres.');
  //     nombre.nextElementSibling.textContent = nombre.validationMessage;
  //     isValid = false;
  // } else {
  //     nombre.setCustomValidity('');
  //     nombre.nextElementSibling.textContent  = '';
  // }

  // Validación del correo electrónico
  // const email = document.getElementById('email');
  // const emailError = document.getElementById('emailError');
  // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // if (!emailPattern.test(email.value)) {
  //     email.setCustomValidity('Por favor, introduce un correo electrónico válido.');
  //     emailError.textContent = email.validationMessage;
  //     isValid = false;
  // } else {
  //     email.setCustomValidity('');
  //     emailError.textContent = '';
  // }

  
  

  if (isValid) {
      alert('Formulario enviado con éxito.');
      // Aquí puedes enviar el formulario al servidor
      // this.submit();
  }
});