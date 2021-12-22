const closedPollsEl = document.getElementById('past-polls');

export const renderPastPolls = (polls) => {
    closedPollsEl.textContent = '';
    

    for (const poll of polls) {
        const pollContainer = document.createElement('div');

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
    }
};