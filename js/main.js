// Función para manejar el botón "Leer más"
document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.previousElementSibling;
            content.classList.toggle('expanded');
            this.classList.toggle('expanded');
            
            if (this.classList.contains('expanded')) {
                this.textContent = 'Leer menos';
            } else {
                this.textContent = 'Leer más';
            }
        });
    });
}); 