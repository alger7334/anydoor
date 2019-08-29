// var number = 1;
// comp();
// function comp() {
//     console.log((number / 10));
//
//     if(number > 20){
//
//     }else if ((number / 10) == 0) {
//         number = number+10
//         getText(number);
//     }else{
//         getText(number);
//     }
//
// }

// function getCon(data) {
//     for (let i = data; i < data+10; i++) {
//         getText(i)
//     }
// }

var number = 0;
// // setTimeout(() => getText(i), 1000)
//
// function getText(number) {
//     console.log(number);
//     i++
//     // number++;
//     // comp();
// }
//
//
// setInterval(getText(i), 1000);
// function intervalFunc() {
//     if(number >20){
//         clearInterval(intervalObj);
//     }
//
//     for (let i = number; i < number+10; i++) {
//         console.log(i++);
//     }
// }
const intervalObj = setInterval(() => {
    for (let i = number; i < number + 10; i++) {
        console.log(i);
    }
    number = number + 10
    if (number > 100) {
        clearInterval(intervalObj);
    }
}, 500);


// setInterval(intervalFunc, 1500);
