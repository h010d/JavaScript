var message = "начало лета"
, symbols = {
  "н":"n", "а":"a", "ч":"ch", "л":"l", "о":"o", "е":"e", "т":"t"
}
, newMessage = ""
;

for(var i = 0; i < message.length; i++){
  newMessage += symbols[message[i]] ? symbols[message[i]] : message[i];
}
console.log(newMessage);