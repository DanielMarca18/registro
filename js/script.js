
const formularioUsuario = document.querySelector(".formularioUsuario")

const usuarios = []
formularioUsuario.addEventListener("submit", (event) => {
  event.preventDefault()

  usuarios.push({
    nombre: formularioUsuario.nombre.value
  })
    
});
