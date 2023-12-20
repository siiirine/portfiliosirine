// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Your code here
    console.log('Script loaded.');

    // Example: Change background color on header click
    const header = document.querySelector('header');
    header.addEventListener('click', function () {
        header.style.backgroundColor = getRandomColor();
    });

    // Example: Form validation for the contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateContactForm();
    });

    function validateContactForm() {
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');

        // Simple email validation
        if (!isValidEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simple phone number validation
        if (!isValidPhoneNumber(phoneInput.value)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // If all validations pass, you can submit the form or perform other actions
        alert('Form submitted successfully!');
    }

    function isValidEmail(email) {
        // Use a regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone) {
        // Utilisez une expression régulière pour valider un numéro de téléphone avec 8 chiffres et commence par 2, 4, 5 ou 9
        const phoneRegex = /^[2459]\d{7}$/;
        return phoneRegex.test(phone);
    }
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
