const newPoll = document.getElementById('new-poll');
const pollQuestionEl = document.getElementById('current-question');
const firstOptionEl = document.getElementById('first-option');
const secondOptionEl = document.getElementById('second-option');

newPoll.addEventListener('submit', (e) => {
    e.preventDefault();

    const poll = new FormData(newPoll);
    const question = poll.get('question');
    const optionOne = poll.get('option-one');
    const optionTwo = poll.get('option-two');

    pollQuestionEl.textContent = question;
    firstOptionEl.textContent = optionOne;
    secondOptionEl.textContent = optionTwo;
});








console.log("I'm a console log on the Polls page");