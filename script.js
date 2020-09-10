window.addEventListener("load", function () {
    var button = document.getElementById("startButton");
    var quiz = document.getElementById("quiz");
    var choiceA = document.getElementById("choiceA");
    var choiceB = document.getElementById("choiceB");
    var choiceC = document.getElementById("choiceC");
    var choiceD = document.getElementById("choiceD");
    var timeGauge = document.getElementById("timeGauge");
    var scoreDiv = document.getElementById("scoreContainer");
    var count = 0;
    var score = 0;
    console.log(button);
    button.addEventListener("click", function () {
      //start the timer
      setInterval(function () {
        console.log(count);
        count++;
      }, 1000);

    
      var quiz = [
        {question: "Commonly used data types DO NOT include:",
          answers: [
            { text: "strings", correct: false },
            { text: "booleans", correct: true },
            { text: "alerts", correct: false },
            { text: "numbers", correct: false },
          ],
        },
        {question:
            "The condition in an if/else statement is enclosed within___.",
          answers: [
            { text: "quotes", correct: false },
            { text: "curly braces", correct: false },
            { text: "parenthesis", correct: true },
            { text: "square brackets", correct: false },
          ],
        },
        {question: "Arrays in JavaScript can be used to store____.",
          answers: [
            { text: "number & strings", correct: false },
            { text: "other arrays", correct: false },
            { text: "booleans", correct: false },
            { text: "all of the aboove", correct: true },
          ],
        },
        {question: "Strings must be enclosed within____.",
          answers: [
            { text: "commas", correct: false },
            { text: "curly braces", correct: true },
            { text: "quotes", correct: false },
            { text: "parenthesis", correct: false },
          ],
        },
      ];


      for (var i = 0; i < quiz.length; i++){
        var answers = (quiz[i].question.answers);
        //var question = document.getElementById("intro");
        var question = (quiz[i].question);
        question.innerHTML = quiz[i].question;
        //var answersList = document.getElementById("answers");
        var runningQuestion = 0;
       
        
     

        for (var i = 0; i < 4; i++) {
          var node = document.createElement("li");
          var textnode = document.createTextNode(quiz[i].answers[0].text);
          node.appendChild(textnode);
          document.getElementById("answers").appendChild(node);
          

        //   var node = document.createElement("li");
        //   var textnode = document.createTextNode(quiz[i].answers[1].text);
        //   node.appendChild(textnode);
        //   document.getElementById("answers").appendChild(node);

        //   var node = document.createElement("li");
        //   var textnode = document.createTextNode(quiz[i].answers[2].text);
        //   node.appendChild(textnode);
        //   document.getElementById("answers").appendChild(node);

        //   var node = document.createElement("li");
        //   var textnode = document.createTextNode(quiz[i].answers[3].text);
        //   node.appendChild(textnode);
        //   document.getElementById("answers").appendChild(node);
        }

     
        function checkAnswer(answer){
            if(answer == questions[runningQuestion].true){
                score++;
            }else{
                score--;
            }
        }
        function renderQuestion(){
            var question = quiz[runningQuestion];
            question.innerHTML = "<div>" + question.quiz + "</div>";
            choiceA.innerHTML = question.choiceA;
            choiceB.innerHTML = question.choiceB;
            choiceC.innerHTML = question.choiceC;
            choiceD.innerHTML = question.choiceD;
        }
        // use eventListener to select answer
        // go to next question 
        //answersList.appendChild(answers);
      }

      //Questions and answers
    });
  });