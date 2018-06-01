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

function showCardQuestion() {
  let currentCard = flashCards[Math.floor(Math.random() * flashCards.length)];
  let cardHolderDiv = document.getElementById('loadQuestion')
  let questionHolder = document.createTextNode(`${currentCard.question}`);
  let answerHolder = document.createTextNode(`${currentCard.answer}`);
  cardHolderDiv.appendChild(questionHolder);

  //changing an question to an answer
  let changeSide = document.getElementById('card');
  changeSide.onclick = function(event) {
    cardHolderDiv.replaceChild(answerHolder, questionHolder);
  }
}























//68
