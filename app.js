let inputNum = document.getElementById("inputNumber").value;

const Guess = () => {
    console.log(inputNum);
}


// let count = 0;
// let arr = [];

// function setCount() {
//     count = count + 1;
//     // arr.push(inputNum);
// }


// const Guess = () => {

//     let msg1 = document.getElementById("msg");
//     let msg2 = document.getElementById("msg1");
//     let msg3 = document.getElementById("msg2");
//     console.log(inputNum)

//     setCount();

//     let num = Math.floor(Math.random() * 100);

//     if (num == inputNum) {
//         msg1.innerHTML = "Yahhhhhh you won it!";
//         msg3.innerHTML = "You Guessed it in 12 Guesses"
//         msg2.innerHTML = "The Number was " + num;
//     }
//     else if (inputNum < num) {

//         msg1.innerHTML = "Your Guess is too low";
//         msg2.innerHTML = "No of Guesses :" + count;
//         // msg3.innerHTML = "Guesses Number are " + arr;

//     }
//     else if (inputNum > num) {

//         msg1.innerHTML = "Your Guess is too High";
//         msg2.innerHTML = "No of Guesses :" + count;
//         // msg3.innerHTML = "Guesses Number are " + arr;
//     }



// }



