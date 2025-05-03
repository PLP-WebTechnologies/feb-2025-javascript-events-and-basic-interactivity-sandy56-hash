// --- Event Handling ---
const droneButton = document.getElementById('droneButton');
const droneMessage = document.getElementById('droneMessage');

droneButton.addEventListener('click', () => {
    droneMessage.textContent = 'Initiating drone field scan... 🚁';
    droneButton.disabled = true;
    setTimeout(() => {
        droneMessage.textContent = 'Drone scan complete! Data being processed... 📊';
        droneButton.disabled = false;
    }, 4000);
});

const serviceGallery = document.querySelector('.service-gallery');
const galleryMessage = document.getElementById('galleryMessage');
const serviceItems = document.querySelectorAll('.service-item');

serviceGallery.addEventListener('mouseover', () => {
    galleryMessage.textContent = 'Click on a service for more info!';
});
serviceGallery.addEventListener('mouseout', () => {
    galleryMessage.textContent = '';
});

serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        const serviceName = item.querySelector('p').textContent;
        alert(`You selected: ${serviceName} - More details coming soon!`);
    });
});

document.addEventListener('keypress', (event) => {
    if (event.key === 'i') {
        alert('Secret: Displaying advanced infrastructure map!');
    }
});

// Bonus: Secret Action (Long Press on Drone Button - refined)
let dronePressTimer;
droneButton.addEventListener('mousedown', () => {
    dronePressTimer = setTimeout(() => {
        droneButton.textContent = 'Analyzing Deep Data...';
        droneButton.style.backgroundColor = '#9c27b0'; /* Purple */
        setTimeout(() => {
            alert('Super Secret: Accessing yield prediction model!');
            droneButton.textContent = 'See Drone Mapping in Action';
            droneButton.style.backgroundColor = '#ffab40'; /* Revert color */
        }, 3000);
    }, 1500); // 1.5 second long press
});
droneButton.addEventListener('mouseup', () => {
    clearTimeout(dronePressTimer);
});
droneButton.addEventListener('mouseout', () => {
    clearTimeout(dronePressTimer);
});

// --- Interactive Elements ---
const featureButtons = document.querySelectorAll('.feature-buttons .feature-button');
const featureContents = document.querySelectorAll('.feature-content');

featureButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;

        featureButtons.forEach(btn => btn.classList.remove('active'));
        featureContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Animation is handled by CSS (animated-leaf)

// --- Form Validation ---
const subscriptionForm = document.getElementById('subscriptionForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const emailValid = document.getElementById('emailValid');
const subscribeButton = document.getElementById('subscribeButton');
const subscriptionMessage = document.getElementById('subscriptionMessage');

subscriptionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validateSubscriptionForm();
});

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        displayValidationFeedback(nameInput, nameError, 'Your name is required.', false);
    } else {
        displayValidationFeedback(nameInput, nameError, '', true);
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() === '') {
        displayValidationFeedback(emailInput, emailError, 'Your email is required.', false);
        displayValidationFeedback(emailInput, emailValid, '', false);
    } else if (!isValidEmail(emailInput.value.trim())) {
        displayValidationFeedback(emailInput, emailError, 'Invalid email format.', false);
        displayValidationFeedback(emailInput, emailValid, '', false);
    } else {
        displayValidationFeedback(emailInput, emailError, '', true);
        displayValidationFeedback(emailInput, emailValid, 'Looks good!', true);
    }
});

function validateSubscriptionForm() {
    let isValid = true;

    // Name (Required)
    if (nameInput.value.trim() === '') {
        displayValidationFeedback(nameInput, nameError, 'Your name is required.', false);
        isValid = false;
    } else {
        displayValidationFeedback(nameInput, nameError, '', true);
    }

    // Email Format
    if (emailInput.value.trim() === '') {
        displayValidationFeedback(emailInput, emailError, 'Your email is required.', false);
        displayValidationFeedback(emailInput, emailValid, '', false);
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        displayValidationFeedback(emailInput, emailError, 'Invalid email format.', false);
        displayValidationFeedback(emailInput, emailValid, '', false);
        isValid = false;
    } else {
        displayValidationFeedback(emailInput, emailError, '', true);
        displayValidationFeedback(emailInput, emailValid, 'Looks good!', true);
    }

    if (isValid) {
        subscriptionMessage.textContent = 'Thank you for subscribing! We\'ll be in touch soon. 🌱';
        subscriptionForm.reset();
        displayValidationFeedback(emailInput, emailValid, '', false); // Reset valid feedback
        displayValidationFeedback(nameInput, nameError, '', false);
    } else {
        subscriptionMessage.textContent = ''; // Clear success message on error
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayValidationFeedback(inputElement, feedbackElement, message, isValid) {
    if (isValid) {
        inputElement.classList.remove('is-invalid');
        inputElement.classList.add('is-valid');
        feedbackElement.classList.remove('invalid-feedback');
        feedbackElement.classList.add('valid-feedback');
        feedbackElement.textContent = message;
    } else {
        inputElement.classList.remove('is-valid');
        inputElement.classList.add('is-invalid');
        feedbackElement.classList.remove('valid-feedback');
        feedbackElement.classList.add('invalid-feedback');
        feedbackElement.textContent = message;
    } else {
        inputElement.classList.remove('is-valid');
        inputElement.classList.remove('is-invalid');
        feedbackElement.classList.remove('valid-feedback');
        feedbackElement.classList.remove('invalid-feedback');
        feedbackElement.textContent = message;
    }
}