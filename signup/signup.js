import { signUp } from '../utils/fetch-utils.js';

const signUpForm = document.getElementById('sign-up');

signUpForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const user = new FormData(signUpForm);

    const userEmail = user.get('email');
    const userPassword = user.get('password');

    await signUp(userEmail, userPassword);

    location.href = '../signin';

});