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
  cardHolderDiv.appendChild(questionHolder);

  //console.log(questionHolder);
  console.log(cardHolderDiv);



//   // create a new div element
// var newDiv = document.createElement("div");
// // and give it some content
// var newContent = document.createTextNode("Hi there and greetings!");
// // add the text node to the newly created div
// newDiv.appendChild(newContent);
}
