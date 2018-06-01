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


  let newAnswer = document.getElementById('newAnswer').value;
  document.getElementById('newAnswer').value = null;
  

  let newCard = {
    question: newQuestion,
    answer: newAnswer
  }

  flashCards.push(newCard);
  console.log(flashCards);


}
