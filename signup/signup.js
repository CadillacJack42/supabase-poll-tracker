import { signUp } from '../utils/fetch-utils.js';




const signUpForm = document.getElementById('sign-up');

signUpForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const poll = new FormData(signUpForm);

    const userEmail = poll.get('email');
    const userPassword = poll.get('password');

    await signUp(userEmail, userPassword);

    location.href = '../signin';

});








console.log("I'm a console log on the sign up page");