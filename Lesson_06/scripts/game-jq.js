function game() {
  var answers = ["rock", "scissors", "paper"]
  ,userAnswer  = $("#userAnswer").val()
    ,m = 0
    ,n = answers.length - 1
    ,computeAnswer = answers[Math.floor(Math.random() * (n - m + 1)) + m]
    ,table = {
      rock: {
        rock: 0
        ,scissors: 1
        ,paper: -1
      }
      , scissors: {
        rock: -1
        ,scissors: 0
        ,paper: 1
      }
      , paper: {
        rock: 1
        ,scissors: -1
        ,paper: 0
      }
    },
    messages = {
      "-1": "Вы проиграли"
      ,"0": "Ничья"
      ,"1": "Вы выиграли"
    }
    ,result            = $("#result")
    ,userAnswerImg     = $("#userAnswerImg")
    ,computeAnswerImg  = $("#computeAnswerImg")
    ,message           = $("#message")
    ;

  console.log(userAnswer, computeAnswer);
  console.log(messages[table[userAnswer][computeAnswer]]);
  userAnswerImg.attr( "src", "images/" + userAnswer + ".jpg");
  computeAnswerImg.attr("src","images/" + computeAnswer + ".jpg");
  message.text    = messages[table[userAnswer][computeAnswer]];
  result.css("display","block");
}

var userAnswerSelect = $("#userAnswer");
$("#userAnswer").change(game);
