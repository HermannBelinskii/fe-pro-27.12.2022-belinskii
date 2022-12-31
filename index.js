const userName = prompt('Enter your name:')
const userAge = prompt('How old are you?');
const smoke = confirm('Are you smoke?');

if(userAge < 18) {
    if (smoke) {
        alert(`Hello ${userName}! Shame on you!`);
    } else {
        alert(`Hello ${userName}! Well done!`);
    }
} else { 
    if (smoke) {
        alert(`Hello ${userName}! Spend your money on something else!`);
    } else {
        alert(`Hello ${userName}! You are doing fine!`);
    }
}