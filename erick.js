document.getElementById('crearUsuarioBtn').addEventListener('click', function() {
    document.getElementById('crearUsuarioModal').style.display = 'block';
});

document.getElementById('iniciarSesionBtn').addEventListener('click', function() {
    document.getElementById('iniciarSesionModal').style.display = 'block';
});

document.getElementById('crearUsuarioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var correo = document.getElementById('correo').value;
    var nombreUsuario = document.getElementById('nombreUsuario').value;
    var contrasena = document.getElementById('contrasena').value;

    // Aquí puedes guardar los datos del usuario como desees, por ejemplo, en localStorage
    // Aquí solo mostraremos un mensaje de éxito
    alert('Usuario creado exitosamente');
    document.getElementById('crearUsuarioModal').style.display = 'none';
});

document.getElementById('iniciarSesionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombreUsuario = document.getElementById('nombreUsuarioLogin').value;
    var contrasena = document.getElementById('contrasenaLogin').value;

    // Verificar si el usuario y la contraseña son válidos (esto es solo un ejemplo)
    var usuarioValido = true; // Supongamos que el usuario es válido siempre por simplicidad

    if (usuarioValido) {
        // Mostrar mensaje de bienvenida
        var mensajeBienvenida = document.getElementById('mensajeBienvenida');
        mensajeBienvenida.textContent = '¡Hola, ' + nombreUsuario + '!';
        
        // Abrir una nueva pestaña con los datos de la cuenta
        var userData = "Nombre: " + nombreUsuario + "\n" + "Contraseña: " + contrasena; // Aquí puedes agregar más datos según tu necesidad
        var newWindow = window.open('', '_blank');
        newWindow.document.write('<html><head><title>Datos de la cuenta</title></head><body><h1>Datos de la cuenta</h1><p>' + userData + '</p></body></html>');
        newWindow.focus();
    } else {
        // Mostrar mensaje de error
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
