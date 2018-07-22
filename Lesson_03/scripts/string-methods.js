var str = "hello"
, letters = "AZ"
, firstLetterNum = letters.charCodeAt(0)
, lastLetterNum  = letters.charCodeAt(1)
, menu           = ""
, sDate          = "26.05.2018"
, aDate          = sDate.split(".")
, months         = {
    "05": "мая"
   ,"06": "июня"
  }
;
console.log(str, str.length, str[3]);
console.log(firstLetterNum, lastLetterNum);

for(var i = firstLetterNum; i <= lastLetterNum; i++){
menu += "\n <a href = \"#\">" + String.fromCharCode(i) + "</a>";
}
console.log(menu);
console.log("Сегодня:", aDate);
console.log("Сегодня:", aDate[0], months[aDate[1]], aDate[2]);