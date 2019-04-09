let result = document.getElementById('result');
let input = document.getElementById('input');
let main_input = "";

let ac = document.getElementById("ac");
let back = document.getElementById("back");

let open = document.getElementById("open");
let close = document.getElementById("close");

let point = document.getElementById("point");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

let mod = document.getElementById("mod");

let equal = document.getElementById("equal");

input.addEventListener('input',(ev)=>{
    main_input = ev.target.value;
});


ac.addEventListener('click',()=>{
    main_input = "";
    result.innerHTML = 0;
    input.value = main_input;
})

back.addEventListener('click',()=>{
    main_input = main_input.slice(0, -1);
    input.value = main_input;
})


equal.addEventListener('click',()=>{
    if(main_input){
        result.innerHTML = eval(main_input);
    }else{
        result.innerHTML = 0;
    }
})


open.addEventListener('click',()=>{
    main_input = main_input + "(";
    input.value = main_input;
})

close.addEventListener('click',()=>{
    main_input = main_input + ")";
    input.value = main_input;
})

point.addEventListener('click',()=>{
    main_input = main_input + ".";
    input.value = main_input;
})

zero.addEventListener('click',()=>{
    main_input = main_input + "0";
    input.value = main_input;
})

one.addEventListener('click',()=>{
    main_input = main_input + "1";
    input.value = main_input;
})

two.addEventListener('click',()=>{
    main_input = main_input + "2";
    input.value = main_input;
})
three.addEventListener('click',()=>{
    main_input = main_input + "3";
    input.value = main_input;
})

four.addEventListener('click',()=>{
    main_input = main_input + "4";
    input.value = main_input;
})

five.addEventListener('click',()=>{
    main_input = main_input + "5";
    input.value = main_input;
})

six.addEventListener('click',()=>{
    main_input = main_input + "6";
    input.value = main_input;
})

seven.addEventListener('click',()=>{
    main_input = main_input + "7";
    input.value = main_input;
})

eight.addEventListener('click',()=>{
    main_input = main_input + "8";
    input.value = main_input;
})

nine.addEventListener('click',()=>{
    main_input = main_input + "9";
    input.value = main_input;
})


plus.addEventListener('click',()=>{
    main_input = main_input + "+";
    input.value = main_input;
})

minus.addEventListener('click',()=>{
    main_input = main_input + "-";
    input.value = main_input;
})

multiply.addEventListener('click',()=>{
    main_input = main_input + "*";
    input.value = main_input;
})

divide.addEventListener('click',()=>{
    main_input = main_input + "/";
    input.value = main_input;
})

mod.addEventListener('click',()=>{
    main_input = main_input + "%";
    input.value = main_input;
})