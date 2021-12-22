import { checkUser, getPolls, getUserId, logOutUser, savePoll } from '../utils/fetch-utils.js';
import { displayCurrentPoll, renderPastPolls } from '../utils/render-utils.js';

const newPoll = document.getElementById('new-poll');

const upVote1 = document.getElementById('first-option-btn-plus');
const downVote1 = document.getElementById('first-option-btn-minus');

const upVote2 = document.getElementById('second-option-btn-plus');
const downVote2 = document.getElementById('second-option-btn-minus');

const closePoll = document.getElementById('submit-poll');

const logOut = document.getElementById('logout-btn');

let questionState = '';
let option1Title = '';
let option1VoteCount = 0;
let option2Title = '';
let option2VoteCount = 0;

window.addEventListener('load', async() => {
    checkUser();
    const user = await getUserId();
    const closedPolls = await getPolls(user);
    renderPastPolls(closedPolls);
});

logOut.addEventListener('click', async() => {
    await logOutUser();
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

    const currentPoll = {
        questionState,
        option1Title,
        option1VoteCount,
        option2Title,
        option2VoteCount
    };

    displayCurrentPoll(currentPoll);

    newPoll.reset();
});


upVote1.addEventListener('click', () => {
    option1VoteCount++;
    const currentPoll = {
        questionState,
        option1Title,
        option1VoteCount,
        option2Title,
        option2VoteCount
    };

    displayCurrentPoll(currentPoll);
});
downVote1.addEventListener('click', () => {
    option1VoteCount--;
    const currentPoll = {
        questionState,
        option1Title,
        option1VoteCount,
        option2Title,
        option2VoteCount
    };

    displayCurrentPoll(currentPoll);
});

upVote2.addEventListener('click', () => {
    option2VoteCount++;
    const currentPoll = {
        questionState,
        option1Title,
        option1VoteCount,
        option2Title,
        option2VoteCount
    };

    displayCurrentPoll(currentPoll);
});
downVote2.addEventListener('click', () => {
    option2VoteCount--;
    const currentPoll = {
        questionState,
        option1Title,
        option1VoteCount,
        option2Title,
        option2VoteCount
    };

    displayCurrentPoll(currentPoll);
});

closePoll.addEventListener('click', async() => {
    await savePoll(questionState, option1Title, option1VoteCount, option2Title, option2VoteCount);

    const user = await getUserId();
    const closedPolls = await getPolls(user);
    renderPastPolls(closedPolls);

    const currentPoll = {
        questionState: 'Create new poll',
        option1Title: 'Create new options',
        option1VoteCount: 0,
        option2Title: 'Create new options',
        option2VoteCount: 0
    };

    displayCurrentPoll(currentPoll);

});
