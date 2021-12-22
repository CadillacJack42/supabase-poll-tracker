import { getPolls, getUserId, savePoll } from '../utils/fetch-utils.js';
import { renderPastPolls } from '../utils/render-utils.js';

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

const closePoll = document.getElementById('submit-poll');

let questionState = '';
let option1Title = '';
let option1VoteCount = 0;
let option2Title = '';
let option2VoteCount = 0;

window.addEventListener('load', async() => {
    const user = await getUserId();
    const closedPolls = await getPolls(user);
    renderPastPolls(closedPolls);
});

newPoll.addEventListener('submit', (e) => {
    e.preventDefault();

    const poll = new FormData(newPoll);
    const question = poll.get('question');
    questionState = question;

    const option1 = poll.get('option-one');
    option1Title = option1;

    const option2 = poll.get('option-two');
    option2Title = option2;

    pollQuestionEl.textContent = question;
    firstOptionEl.textContent = option1;
    secondOptionEl.textContent = option2;

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

closePoll.addEventListener('click', async() => {
    await savePoll(questionState, option1Title, option1VoteCount, option2Title, option2VoteCount);

    const user = await getUserId();
    const closedPolls = await getPolls(user);
    console.log(closedPolls);

});





console.log("I'm a console log on the Polls page");