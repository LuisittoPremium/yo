document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // El nombre específico que se debe ingresar
    const validUsername = "nancytaxx77";
    
    // Obtener el valor del campo de texto
    const username = document.getElementById('username').value;

    // Verificar si el nombre ingresado es válido
    if (username === validUsername) {
        window.location.href = "index.html";
        // Aquí podrías redirigir a otra página o mostrar contenido
    } else {
        // Mostrar mensaje de error
        document.getElementById('error-message').classList.remove('hidden');
    }
});

