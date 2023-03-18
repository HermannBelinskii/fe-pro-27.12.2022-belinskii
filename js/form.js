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
		validationsRules: [validateStringLength, validateNameEnglish],
		isValid: false,
		needToValidate: true,
		errorEl: userName.parentElement.querySelector('.error-name')
	},
	{
		name: 'phone',
		inputEl: userPhone,
		validationsRules: [validatePhone],
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
		validationsRules: [validateSelect],
        isValid: false,
		needToValidate: true,
		errorEl: userQuantity.parentElement.querySelector('.error-city')
    },
    {
        name: 'pay',
		inputEl: userPay,
		validationsRules: [validateSelect],
        isValid: false,
		needToValidate: true,
		errorEl: userQuantity.parentElement.querySelector('.error-payment')
    },
    {
        name: 'post',
		inputEl: userPost,
		validationsRules: [validateSelect],
        isValid: false,
		needToValidate: true,
		errorEl: userQuantity.parentElement.querySelector('.error-post')
    },
    {
        name: 'quantity',
		inputEl: userQuantity,
        validationsRules: [validateSelect],
        isValid: false,
		needToValidate: true,
		errorEl: userQuantity.parentElement.querySelector('.error-quantity')
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
                return func(el.inputEl.value, el.errorEl, el.name)
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


