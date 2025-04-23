// Inicializar EmailJS con ID de usuario
emailjs.init("LWuEjhqZ2nvsxpEMj");

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contactForm');
    const sendMessage = document.getElementById('sendmessage');
    const errorMessage = document.getElementById('errormessage');

    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = '<i class="fa fa-check-circle"></i> <span> ¡Mensaje enviado con éxito!</span>';
    document.body.appendChild(notification);

    // Función para mostrar notificación
    function showNotification() {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Validar que el servicio esté disponible
    if (!emailjs) {
        errorMessage.textContent = 'Error: El servicio de correo no está disponible';
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();

        // Validación
        if (!name) {
            errorMessage.textContent = 'Por favor, ingrese su nombre';
            return;
        }
        if (!email) {
            errorMessage.textContent = 'Por favor, ingrese su correo electrónico';
            return;
        }
        if (!message) {
            errorMessage.textContent = 'Por favor, ingrese su mensaje';
            return;
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage.textContent = 'Por favor, ingrese un correo electrónico válido';
            return;
        }

        // Mostrar mensaje de carga
        sendMessage.textContent = 'Enviando mensaje...';
        errorMessage.textContent = '';

        // Enviar el correo usando EmailJS
        emailjs.send('service_lp5k9hh', 'template_7dn8mvx', {
            from_name: name,
            from_email: email,
            phone: phone,
            message: message
        })
        .then(function(response) {
            console.log('Success:', response);
            sendMessage.textContent = '';
            form.reset();
            errorMessage.textContent = '';
            showNotification();
        }, function(error) {
            console.error('Error completo:', error);
            errorMessage.textContent = 'Hubo un error al enviar el mensaje. Por favor, intente nuevamente.';
            sendMessage.textContent = '';
        });
    });
}); 