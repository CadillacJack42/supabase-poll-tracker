import { signIn } from '../utils/fetch-utils.js';

const signInForm = document.getElementById('sign-in');

signInForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const user = new FormData(signInForm);

    const email = user.get('email');
    const password = user.get('password');

    await signIn(email, password);

    location.href = '../polls';
});