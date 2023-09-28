// Stack memory(Primitive)
let userOne = "Shivam"
let userTwo = userOne
console.log(userTwo); //Here we get the copy of the variable
userTwo = "Samarth"
console.log(userOne);
console.log(userTwo);

//Heap memory(Non-Primitive)
let userThree = {
    email: "shivam08@gmail.com",
    upi: "Eren"
}
let userFour = userThree
console.log(userFour.email);
userFour.email = "anujmathur@gmail.com"
console.log(userThree.email);
console.log(userFour.email);
