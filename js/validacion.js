    // Función de validar la misma contraseña
  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe si hay errores de validación
  
    const passwordInput = document.getElementById("password1");
    const repeatPasswordInput = document.getElementById("password2");
  
    // Limpiar cualquier mensaje de error previo
    passwordInput.setCustomValidity("");
    repeatPasswordInput.setCustomValidity("");
  
    // Primero, validar el campo "Contraseña"
    if (!passwordInput.checkValidity()) {
      passwordInput.setCustomValidity("La contraseña debe tener al menos 6 caracteres");
      passwordInput.reportValidity();
      return; // Salir si "Contraseña" no es válida
    }
  
    // Luego, validar el campo "Repetir contraseña"
    if (passwordInput.value !== repeatPasswordInput.value) {
      repeatPasswordInput.setCustomValidity("Las contraseñas no coinciden");
    } else {
      repeatPasswordInput.setCustomValidity(""); // No hay errores si coinciden
    }
  
    // Mostrar cualquier error de validación para "Repetir contraseña"
    repeatPasswordInput.reportValidity();
  
    // Si todo está bien, puedes permitir el envío del formulario
    if (passwordInput.checkValidity() && repeatPasswordInput.checkValidity()) {
      // Aquí puedes enviar el formulario, o realizar alguna acción
      alert("Formulario enviado exitosamente");
    }
  });
 

  // Agrega los event listeners al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const submit = document.getElementById('submitButton');
    const name = document.getElementById('nombre');
    const lastname = document.getElementById('apellido');
    const email = document.getElementById('email');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const modal=document.getElementById('terminos');

    // Validación para el campo nombre
    name.addEventListener('input', function() {
        if (name.checkValidity()) {
            name.classList.add('is-valid');
            name.classList.remove('is-invalid');
        } else {
            name.classList.add('is-invalid');
            name.classList.remove('is-valid');
        }
    });

    // Validación para el campo apellido
    lastname.addEventListener('input', function() {
        if (lastname.checkValidity()) {
            lastname.classList.add('is-valid');
            lastname.classList.remove('is-invalid');
        } else {
            lastname.classList.add('is-invalid');
            lastname.classList.remove('is-valid');
        }
    });

    // Validación para el campo email
    email.addEventListener('input', function() {
        if (email.checkValidity()) {
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        } else {
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
        }
    });

    // Validación para el campo password1
    password1.addEventListener('input', function() {
        if (password1.checkValidity()) {
            password1.classList.add('is-valid');
            password1.classList.remove('is-invalid');
        } else {
            password1.classList.add('is-invalid');
            password1.classList.remove('is-valid');
        }
    });

    // Validación para el campo password2
    password2.addEventListener('input', function() {
        if (password2.checkValidity() && password2.value === password1.value) {
            password2.classList.add('is-valid');
            password2.classList.remove('is-invalid');
        } else {
            password2.classList.add('is-invalid');
            password2.classList.remove('is-valid');
        }
    });

     // Validación para el modal
     modal.addEventListener('input', function() {
        if (modal.checkValidity()) {
        modal.classList.add('is-valid');
        modal.classList.remove('is-invalid');
    } else {
        modal.classList.add('is-invalid');
        modal.classList.remove('is-valid');
    }
   });

   // ES LA COMPROBACIÓN PARA QUE CUANDO SE LE DA CLICK A "REGISTRARME" Y LOS CAMPOS ESTÉN VACÍOS, LOS MARQUE TODOS EN ROJO
   submit.addEventListener('click', function(event) {
    const campos = [name, lastname, email, password1, password2];
    const emailFormato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let esValido = true; 

    campos.forEach(campo => {
        if (campo.value === "") {
            campo.classList.add('is-invalid');
            esValido = false; 
        } else {
            campo.classList.remove('is-invalid');
        }
    });

    // Validacion para campo email
    if (!emailFormato.test(email.value)) {
        email.classList.add('is-invalid');
        esValido = false; 
    } else {
        email.classList.remove('is-invalid');
    }

    const textoBoton = document.getElementById('modalButton');

    if (!modal.checked) {
      textoBoton.style.color = '';
      textoBoton.classList.add('textito');
      textoBoton.classList.remove('textitovalido');
      modal.classList.add('is-invalid');
      modal.classList.remove('is-valid');
      esValido = false; 
    } else {
      textoBoton.style.color = '';
      textoBoton.classList.add('textitovalido');
      textoBoton.classList.remove('textito');
      modal.classList.add('is-valid');
      modal.classList.remove('is-invalid');
  }

    if (!esValido) {
        event.preventDefault(); 
    }
});
// TERMINA ACÁ

});

// Manejador del evento submit para prevenir el envío
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario
});


const terminos = document.getElementById('terminos');
const errorText = document.getElementById('errorText');
const modalButton = document.getElementById('modalButton');
const submitButton = document.getElementById('submitButton');

// Función para verificar si los términos fueron aceptados
function checkTerms() {
    if (!checkboxModal.checked) {
      errorText.classList.remove('d-none');        
      modalButton.classList.add('error');          
      return false;                                
    } else {
      // Ocultar el error si el checkbox está marcado
      errorText.classList.add('d-none');           
      modalButton.classList.remove('error');       
      return true;                                
  }
};
  
  submitButton.addEventListener('click', function(event) {
    // Verificar si los términos fueron aceptados
    if (!checkTerms()) {
      event.preventDefault();
    }
  })

document.getElementById("submitButton").addEventListener("click", function(event) {
  const checkbox = document.getElementById("terminos");
  const errorText = document.getElementById("errorText");

  if (!checkbox.checked) {
    event.preventDefault(); // Evita que se envíe el formulario
    errorText.classList.remove("d-none"); // Muestra el mensaje de error
  } else {
    errorText.classList.add("d-none"); // Oculta el mensaje de error
  }
});