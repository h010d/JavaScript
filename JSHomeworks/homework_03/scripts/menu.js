// 1. массив меню
// {
//  имя_файла : 
//   {
//    "text" : название пункта меню
//    ,"keywords" : ключевые слова
//   }
// }


// - вывести пункты меню
// - вывести только ключевые слова по каждому пункту меню

// 2. Методы для работы с простыми массивами - разобрать
// 3. Строка несколько предложений
// - вывести количество предложений
// - вывести количество слов
// - перемешать слова в строке
// 4. Строка "казнить нельзя помиловать"
// вставить запятую
// 5. Погода
// Переменная - день недели
// Многомерный массив для хранения данных о погоде за каждый день недели
// Вывести погоду по дню недели

var prtSeparator = function () {
  var separ = ""
    , a = 35
    ;
  for (var i = 0; i < a; i++) {
    separ += "-=";
  }
  console.log(separ);
}

prtSeparator();
console.log("1. массив меню");
var menu = {
  "Nomineess": {
    "technology": ["AngularJS", "Apache", "Backbone.js", "Bootstrap", "CSS Framework", "CSS3", "CloudFlare", "Craft CMS", "Debian", "Facebook API", "Google App Engine"]
    , "color": ["Black", "Blue", "Brown", "Green", "Orange", "Pink", "Red", "Silver", "White", "Yellow"]
    , "tag": ["360", "3D", "Animation", "App Style", "Big Background Images", "Bright", "Clean", "Design Websites", "E-Commerce", "Experimental", "Filters and Effects", "Flexible", "Fullscreen", "Graphic design", "Icons"]
    , "category": ["Architecture", "Art & Illustration", "Blogging", "Business & Corporate", "Culture & Education", "Design Agencies", "E-Commerce", "Events", "Facebook API", "Fashion", "Film & TV", "Food & Drink", "Games & Entertainment", "Hotel / Restaurant", "Institutions", "Institutions", "Mobile & Apps", "Music & Sound", "Other", "Photography", "Promotional", "Real Estate", "Sports"]
  }
  , "Magazine": {
    "tag": ["Art & Design", "Apps & Web Apps", "Video", "Code & Front-End", "Creative Advertising", "HTML5 & CSS3", "JavaScript"]
    , "category": ["Design & Illustration", "Media", "News", "Resources & Tools", "The Best Articles", "Web Design", "Interviews", "Inspirational talks"]

  }
  , "Directory": {
    "country": ["Albania", "Argentina", "Canada", "China", "Egypt", "France"]
    , "category": ["App Development", "Art Direction", "SEO / SEM", "UX/UI", "Web Design", "Web Development"]
    , "quote": ["5000 $ - 30000 $", "Over 30000 $", "Under 5000 $"]
    , "type": ["Agency", "Freelancer", "Studio"]
  }
}
  ;

prtSeparator();

console.log("print menu: ");
for (var key in menu) {
  console.log(key);
}

for (key in menu) {
 // console.log(menu[key]);
}

// for (var key in menu) {
//   for(var l in menu[key]){
//   console.log(menu[key]);
//   }
// }

prtSeparator();

var str = "";
for (var i in menu) {
  // console.log("[i]: ", i);
  for (var j in menu[i]) {
    //console.log("[j]: ", j);
    for (var k in menu[i][j]) {
      // console.log("[k]: ", k);
      //console.log(menu[i][j][k]);
      str += menu[i][j][k];
      str += " ";
    }
    //console.log("[", str, "]");
    str = ""
  }
}
 // console.log(menu);


	var array = [[[1.1], [1.2, [1.21, 1.22, 1.23, [1.231, 1.232, 1.233]]], [1.3], [1.4]], [[2.1], [2.2], [2.3], [2.4]], [[3.1], [3.2], [3.3], [3.4]]];

 function iterator (menu, callback) {

	  var item, index = 0, length = menu.length;

	  for (key in menu) {

	    item = key;
//console.log(" rgfagrg", item instanceof Array );
	    if (Object.prototype.toString.call(item) === '[object Array]') {

	      iterator(item, callback);

	    } else {

	      callback(item);

	    }

	  }

	}

	// Будет вызвана для каждого элемента, не являющимся массивом.

	function callback (item) {

	  console.log(item);

	}

	iterator(menu, callback);
  //var a = +prompt('Введите количество баллов','');
// switch(true){
// 	case ( a >= 0 && a <= 40 ) : alert ('Fx На повторный курс'); break;
// 	case ( a >= 41 && a <= 59 ) : alert ('F На пересдачу'); break;
// 	case ( a >= 60 && a <= 67 ) : alert ('E Три-'); break;
// 	case ( a >= 68 && a <= 74 ) : alert ('D Три'); break;
// 	case ( a >= 75 && a <= 81 ) : alert ('C 4-'); break;
// 	case ( a >= 82 && a <= 90 ) : alert ('B 4 '); break;
// 	case ( a >= 91 && a <= 100 ) : alert ('A 5'); break;
// }
