const user = [{
    name : 'lee',
    age : 20,
},{
    name : 'kim',
    age : 30,
    }]
    
/* function a(){
    let num_a = 1
    console.log('a 함수 위치'+num_a)
    b()
}
function b(){
    let num_b = 1
    console.log('b 함수 위치'+num_b)
}
a() */
// ---------------------------------------

function a(){
    user[0].age++
    console.log(user[0].age)
}
a()
function b(){
    user[1].age++
    console.log(user[1].age)
}
b()