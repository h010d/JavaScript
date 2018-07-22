function game() {
	var answers            = ['rock', 'scissors', 'paper'],
	    userAnswer         = userAnswerSelect.value,
	    m                  = 0,
	    n                  = answers.length,
	    computeAnswer      = answers[Math.floor(Math.random() * (
		    n - m + 1
	    )) + m]
		, table            = {
		    rock: {
			    rock: 0,
			    scissors: 1,
			    paper: -1
		    }
		    , scissors: {
			    rock: -1,
			    scissors: 0,
			    paper: 1
		    }
		    , paper: {
			    rock: 1,
			    scissors: -1,
			    paper: 0
		    }
	    },
		messages           = {
			'-1': 'Вы проиграли',
			'0': 'Ничья',
			'1': 'Вы выиграли'
		}
		, result           = document.getElementById('result')
		, userAnswerImg    = document.getElementById('userAnswerImg')
		, computeAnswerImg = document.getElementById('computeAnswerImg')
		, message          = document.getElementById('message')
	;
	
	console.log(userAnswer, computeAnswer);
	console.log(messages[table[userAnswer][computeAnswer]]);
	userAnswerImg.src    = 'images/' + userAnswer + '.jpg';
	computeAnswerImg.src = 'images/' + computeAnswer + '.jpg';
	message.innerText    = messages[table[userAnswer][computeAnswer]];
	result.style.display = 'block';
	
}

var userAnswerSelect = document.getElementById('userAnswer');
userAnswer.onchange  = game;
