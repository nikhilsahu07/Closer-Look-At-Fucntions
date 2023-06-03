'use strict'

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = prompt(`${this.question}\n ${this.options.join('\n')}\n(Write Option Number)`);
        console.log(answer);

        if (answer < this.answers.length) {
            this.answers[answer]++;
        };
        console.log(this.answers);

        // this.displayResults();

    },
    displayResults(type = 'string') {
        // type = prompt('String or Array')
        if (type === '' || type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        } else if (type === 'array') {
            console.log(this.answers);
        }
    },
};
// poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
document.querySelector('.pollresult').addEventListener('click', poll.displayResults.bind(poll));

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];
// poll.answers = data1;
poll.answers = data2;
const myDisplayResults = poll.displayResults();


