const form = document.querySelector('#contact-form');
const userName = form.name;
const userPhone = form.phone;
const userEmail = form.email;
const userPay = form.payment;
const userFrom = form.city;
const userPost = form.post;
const userQuantity = form.quantity;
const userComment = form.comment;
const button = document.querySelector('#submit_btn');
const contactForm = document.querySelector('.contact-form')


const inputs = [
	{
		name: 'name',
		inputEl: userName,
		validationsRules: [validateStringLength],
		isValid: false,
		needToValidate: true,
		errorEl: userName.parentElement.querySelector('.error-name')
	},
	{
		name: 'phone',
		inputEl: userPhone,
		validationsRules: [isNumber],
		isValid: false,
		needToValidate: true,
		errorEl: userPhone.parentElement.querySelector('.error-phone')
	},
	{
		name: 'email',
		inputEl: userEmail,
		validationsRules: [validateForValue, isEmail],
		isValid: false,
		needToValidate: true,
		errorEl: userEmail.parentElement.querySelector('.error-email')
	},
    {
        name: 'city',
		inputEl: userFrom,
    },
    {
        name: 'pay',
		inputEl: userPay,
    },
    {
        name: 'post',
		inputEl: userPost,
    },
    {
        name: 'quantity',
		inputEl: userQuantity,
    },
    {
        name: 'comment',
		inputEl: userComment,
    },
];


button.addEventListener('click', (e) => {
	e.preventDefault();

	const validatedArr = inputs.map((el) => {
        if (el.validationsRules) {
            const isAllValid = el.validationsRules.map((func) => {
                return func(el.inputEl.value, el.errorEl)
            })
            return isAllValid.every(el => el === true)
        } else {
            return true;
        }
    })

	if(validatedArr.every(el => el === true)) {
		const data = {}
		inputs.forEach((input) => {
			data[input.name] = input.inputEl.value
		})
		sendData(data)
        console.log(data);
        contactForm.style.display = 'none';
        createPopupWithCloseButton();

	} else {
		console.log(`something wrong`)
	};

});

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
    const isValid = value.length >= 2
    errorEl.classList[isValid ? 'add' : 'remove']('error-name')
    return isValid
};

function validateForValue(value, errorEl) {
    const isValid = !!value.trim();
	errorEl.classList[isValid ? 'add' : 'remove']('error-email')
    return isValid
};

function isNumber(value, errorEl) {
	const isValid = value ? !isNaN(+value) : false
	errorEl.classList[isValid ? 'add' : 'remove']('error-phone')
	return isValid
};

function isEmail(value, errorEl) {
    const isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
	errorEl.classList[isValid ? 'add' : 'remove']('error-email')
    return isValid
};

