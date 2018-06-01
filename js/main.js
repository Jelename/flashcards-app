let flashCards = [
    {
      question: 'Can an array store all data types?',
      answer: 'yes, it can :)',
      //right() {},
      //wrong() {},
    }
]

function submit() {
  let newQuestion = document.getElementById('newQuestion').value;
  document.getElementById('newQuestion').value = null;
  console.log(newQuestion);

  let newAnswer = document.getElementById('newAnswer').value;
  document.getElementById('newAnswer').value = null;
  console.log(newAnswer);
}
