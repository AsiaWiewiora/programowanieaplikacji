  // valiation
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('helpForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const formErrorMessage = document.getElementById('formErrorMessage');
    const formSuccessMessage = document.getElementById('formSuccessMessage');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        let isValid = true;
        let errorMessage = '';

        if (!/^[a-zA-Z]+$/.test(nameInput.value.trim())) {
            errorMessage += 'Pole Imię może zawierać tylko litery.\n';
            isValid = false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            errorMessage += 'Podaj poprawny adres email.\n';
            isValid = false;
        }
        
        const phoneRegex = /^\d{9}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            errorMessage += 'Numer telefonu musi zawierać dokładnie 9 cyfr.\n';
            isValid = false;
        }
        
        if (!/^[a-zA-Z]+$/.test(subjectInput.value.trim())) {
            errorMessage += 'Pole Temat może zawierać tylko litery.\n';
            isValid = false;
        }
        
        if (messageInput.value.trim() === '') {
            errorMessage += 'Pole Wiadomość jest wymagane.\n';
            isValid = false;
        }
        
        if (!isValid) {
            alert(errorMessage);
        } else {
            alert('Formularz został wysłany!');
            formSuccessMessage.style.display = 'block';
        }
    });
});









