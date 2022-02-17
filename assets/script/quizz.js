class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  let questions = [
    new Question("Dans quel continent se trouve Madagascar",
    ["Asiatique" , "Africain", "Océanique", "Européen"],
    "Africain"), 

    new Question("Quelle est la langue parlée à Madagacsar",
    ["Créole" , "Africain", "Français", "Malgache"],
    "Malgache"),  

    new Question("Quelle est le nom du peuple qui habite à Madagascar?", 
    ["Madagascarien" , "Magasien", "Malgache", "Comorien"],
    "Malgache"), 

    new Question("Depuis quand Madagascar est devenu un pays indépendant?",
    ["1960" , "Non, Madagascar n'est pas un pays indépendant", "vers  1900", "2018"],
    "1960"), 

    new Question("Où se trouve la capitale de Madagascar", 
    ["Nosy Be" , "Malagasy", "Antananarivo", "Toliary"],
    "fliter()"), 

    new Question("Quelle est la supérficie de Madagascar?",
    ["150 980 km2" , "410 210 km2", "250 000 km2", "587 041 km2"],
    "587 041 km2")
];

  
  console.log(questions);
  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  
  // Regroup all  functions relative to the App Display
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
      this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  
  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();
  
  console.log(quiz);
  