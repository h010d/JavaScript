function Game(sSelector) {
    var g = this;
    g.game = $(sSelector);
    //console.log(this.game);
    // this - дает возможность публичного исползования переменной
    g.userAnswer = g.game.children("select"),
        // console.log(userAnswer);

        this.result = g.game.children("#result"),
        this.userAnswerImg = g.game.find("#userAnswerImg"),
        this.computerAnswerImg = g.game.find("#computerAnswerImg"),
        this.message = g.game.find("#message");
    // console.log(this.result);
    // console.log(this.userAnswerImg);
    // console.log(this.computeAnswerImg);
    // console.log(this.message);
    g.play = function() {
        var answers = ["rock", "scissors", "paper"],
            m = 0,
            n = answers.length - 1,
            computerAnswer = answers[Math.floor(Math.random() * (n - m + 1)) + m],
            table = {
                "rock": {
                    "rock": 0,
                    "scissors": 1,
                    "paper": -1
                },
                "scissors": {
                    "rock": -1,
                    "scissors": 0,
                    "paper": 1
                },
                "paper": {
                    "rock": 1,
                    "scissors": -1,
                    "paper": 0
                }
            },
            messages = {
                "-1": "Вы проиграли",
                "0": "Ничья",
                "1": "Вы выиграли"
            };
        console.log(table[g.userAnswer.val()][computerAnswer]);
        g.userAnswerImg.attr("src", "../images/" + g.userAnswer.val() + ".jpg");
        g.computerAnswerImg.attr("src", "../images/" + computerAnswer + ".jpg");
        g.message.text(messages[table[g.userAnswer.val()][computerAnswer]]);
        g.result.css("display", "block");
    }
    g.userAnswer.change(g.play);
}