// --- MARCAR IDIOMA ACTIVO ---
const buttons = document.querySelectorAll('#btn_idiomas button');
const idiomaGuardado = localStorage.getItem("btn_idiomas") || "btn_esp";

// Al cargar la página, marcar el idioma guardado
buttons.forEach(boton => {
  if (boton.value === idiomaGuardado) {
    boton.classList.add('active');
  }
});

// Cuando el usuario haga clic, cambiar la clase activa
buttons.forEach(boton => {
  boton.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    boton.classList.add('active');
  });
});
