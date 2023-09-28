const userGame = new Number(400)
console.log(userGame);
console.log(userGame.toString().length);

//to Precision
const userGame2 = new Number(112233.74830)
console.log(userGame2.toPrecision(2));

//to LocaleString
const userGame3 = new Number(8000000000)
console.log(userGame3.toLocaleString('en-IN'))