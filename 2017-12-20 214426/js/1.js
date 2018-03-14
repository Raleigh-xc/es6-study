// export let A = 123;

// export function test(){
//     console.log('function.test');
// }

// export class Hello{
//     test(){
//         console.log('hello.test');
//     }
// }

let A = 123;
let test = function(){
    console.log('test');
}
class Hello{
    test(){
        console.log('class');
    }
}

export default {
    A,
    test,
    Hello
};