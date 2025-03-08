  (() => {
    'use strict';
    // Selecciona todos los formularios que requieren validación
    const forms = document.querySelectorAll('.needs-validation');
    // Itera sobre cada formulario y añade un listener para el evento submit
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        // Si el formulario no es válido, evita el envío y detiene la propagación
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        // Añade la clase 'was-validated' para mostrar los estilos de validación
        form.classList.add('was-validated');
      }, false);
    });
  })();
