
function sendData(data) {
    console.log(`${data} send to server`);
};

const closeForm = document.querySelector('.close-form');
closeForm.addEventListener('click', (e)=>{
    e.preventDefault();
    contactForm.style.display = 'none';
    removeOverlay();
})

function validateStringLength(value, errorEl) {
    const isValid = value.length >= 4;
    errorEl.classList[isValid ? 'add' : 'remove']('error-name')
    return isValid
};

function validateNameEnglish(value, errorEl) {
	const langOfName = /^[a-zA-Z]+\s[a-zA-Z]+$/.test(value);
    errorEl.classList[langOfName ? 'add' : 'remove']('error-name')
    return langOfName
}

function validateForValue(value, errorEl, fieldName) {
    const isValid = !!value.trim();
    if (fieldName === 'email') {
        errorEl.classList[isValid ? 'add' : 'remove']('error-email');
    } else if (fieldName === 'phone') {
        errorEl.classList[isValid ? 'add' : 'remove']('error-phone');
    }
    return isValid;
};

function isNumber(value, errorEl) {
	const isValid = value ? !isNaN(+value) : false
	errorEl.classList[isValid ? 'add' : 'remove']('error-phone')
	return isValid
};

function validatePhone(value, errorEl) {
	const phoneRegex = /^\+?[1-9]\d{1,14}$/.test(value);
	errorEl.classList[phoneRegex ? 'add' : 'remove']('error-phone')
	return phoneRegex;
}

function validatePhoneLength(value, errorEl) {
	const phoneLength = value.length === 8;
	errorEl.classList[phoneLength ? 'add' : 'remove']('error-phone')
	return phoneLength;
}

function isEmail(value, errorEl) {
    const isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
	errorEl.classList[isValid ? 'add' : 'remove']('error-email')
    return isValid
};

function validateSelect(value, errorEl, fieldName) {
    const isValid = value !== 'default';

    if (fieldName === 'city') {
        errorEl.classList[isValid ? 'add' : 'remove']('error-city');
    } else if (fieldName === 'pay') {
        errorEl.classList[isValid ? 'add' : 'remove']('error-payment');
    } else if (fieldName === 'post') {
        errorEl.classList[isValid ? 'add' : 'remove']('error-post');
    } else if (fieldName === 'quantity') {
        errorEl.classList[isValid ? 'add' : 'remove']('error-quantity');
    }

    return isValid;
}