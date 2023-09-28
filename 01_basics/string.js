let userName = "Levi"
let userWord = "Dreams"
console.log(`${userName} said to Erwin,"Give up on your ${userWord} and die."`); //string intercollision

// ++++++++++++++++++++++++++++++++++++++ //

const userGame = new String('Shivam-anuj')
console.log(userGame);
console.log(userGame.toUpperCase());
console.log(userGame.endsWith());
console.log(userGame.charAt(3));
const userGame2 = userGame.substring(2,7)
console.log(userGame2)
const userGame3 = userGame.slice(-7,2)
console.log(userGame3);

//trim
const userName4 = "    Shivam Mathur"
console.log(userName4.trim())

//replace
console.log(userName4.replace('i','v'))

//split
const userName5 = userName4.split('a')
console.log(userName5)