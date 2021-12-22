const newPoll = document.getElementById('new-poll');
const pollQuestionEl = document.getElementById('current-question');
const firstOptionEl = document.getElementById('first-option');
const secondOptionEl = document.getElementById('second-option');

const option1Votes = document.getElementById('first-count');
const option2Votes = document.getElementById('second-count');

const upVote1 = document.getElementById('first-option-btn-plus');
const downVote1 = document.getElementById('first-option-btn-minus');

const upVote2 = document.getElementById('second-option-btn-plus');
const downVote2 = document.getElementById('second-option-btn-minus');

let option1VoteCount = 0;
let option2VoteCount = 0;

newPoll.addEventListener('submit', (e) => {
    e.preventDefault();

    const poll = new FormData(newPoll);
    const question = poll.get('question');
    const optionOne = poll.get('option-one');
    const optionTwo = poll.get('option-two');

    pollQuestionEl.textContent = question;
    firstOptionEl.textContent = optionOne;
    secondOptionEl.textContent = optionTwo;

    option1Votes.textContent = option1VoteCount;
    option2Votes.textContent = option2VoteCount;

    newPoll.reset();
});


upVote1.addEventListener('click', () => {
    option1VoteCount++;
    option1Votes.textContent = option1VoteCount;
});
downVote1.addEventListener('click', () => {
    option1VoteCount--;
    option1Votes.textContent = option1VoteCount;
});

upVote2.addEventListener('click', () => {
    option2VoteCount++;
    option2Votes.textContent = option2VoteCount;
});
downVote2.addEventListener('click', () => {
    option2VoteCount--;
    option2Votes.textContent = option2VoteCount;
});







console.log("I'm a console log on the Polls page");