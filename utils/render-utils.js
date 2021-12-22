const closedPollsEl = document.getElementById('past-polls-container');

export const renderPastPolls = (polls) => {
    closedPollsEl.textContent = '';
    

    for (const poll of polls) {
        renderPoll(poll);
    }
};

const renderPoll = (poll) => {
    const pollContainer = document.createElement('div');
    pollContainer.classList.add('single-poll');

    const questionEl = document.createElement('p');
    const firstOptionEl = document.createElement('p');
    const secondOptionEl = document.createElement('p');
    const firstVoteEl = document.createElement('p');
    const secondVoteEl = document.createElement('p');

    questionEl.textContent = poll.question;
    firstOptionEl.textContent = poll.option_one;
    secondOptionEl.textContent = poll.option_two;
    firstVoteEl.textContent = poll.one_count;
    secondVoteEl.textContent = poll.two_count;

    pollContainer.append(questionEl, firstOptionEl, firstVoteEl, secondOptionEl, secondVoteEl);
    closedPollsEl.append(pollContainer);
};

export const displayCurrentPoll = (poll) => {
    const pollQuestionEl = document.getElementById('current-question');
    const firstOptionEl = document.getElementById('first-option');
    const secondOptionEl = document.getElementById('second-option');

    const option1Votes = document.getElementById('first-count');
    const option2Votes = document.getElementById('second-count');

    pollQuestionEl.textContent = poll.questionState;
    firstOptionEl.textContent = poll.option1Title;
    secondOptionEl.textContent = poll.option2Title;

    option1Votes.textContent = poll.option1VoteCount;
    option2Votes.textContent = poll.option2VoteCount;

};