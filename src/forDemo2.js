var number = 0;
var ji = 0;


// function comp(i,jisuan) {
//
//     jisuan++;
//     console.log("jisuan"+jisuan);
//     if(jisuan ==5 && number<20){
//         jisuan =0;
//         number+=5;
//         setTimeout(() =>  f(), 3000)
//     }
// }


function f(number) {
    for (let i = number; i < number + 10; i++) {
        console.log(i);
        console.log('ji' + ji);
        if (ji == 9) {
            setTimeout(() => ji++, 2000)
        } else {
            ji++
        }


    }
}


const intervalObj = setInterval(() => {
    if ((ji % 10) == 0) {
        console.log('---------一组结束----------')
        ji = 0
        number += 10
        f(number, ji)
    }
    if (number > 100) {
        clearInterval(intervalObj);
    }
}, 500);
