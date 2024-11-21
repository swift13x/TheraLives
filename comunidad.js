document.getElementById("enviarComentario").addEventListener("click", function () {
    // Capturar el texto del comentario
    const comentarioTexto = document.getElementById("comentarioTexto").value.trim();
    
    if (comentarioTexto) {
      // Crear el nuevo elemento HTML para el comentario
      const nuevoComentario = document.createElement("div");
      nuevoComentario.className = "comentarios";
      nuevoComentario.innerHTML = `
        <p><strong>Tú:</strong> ${comentarioTexto}</p>
      `;
  
      // Agregar el nuevo comentario al muro
      document.getElementById("muroComentarios").appendChild(nuevoComentario);
  
      // Limpiar el campo de texto
      document.getElementById("comentarioTexto").value = "";
    } else {
      alert("Por favor, escribe un comentario antes de enviar.");
    }
  });
  