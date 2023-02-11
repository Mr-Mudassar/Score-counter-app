let count1 = 0;
let main = document.getElementById("text1")
function button1() {
count1 += 1;
main.textContent = count1
}
function button2() {
count1 += 2;
main.textContent = count1
}
function button3() {
count1 += 3;
main.textContent = count1
}

// next side

let count2 = 0;
let main2 = document.getElementById("text2")
function guest1() {
    count2 += 1;
    main2.textContent = count2;
}
function guest2() {
    count2 += 2;
    main2.textContent = count2;
}
function guest3() {
    count2 += 3;
    main2.textContent = count2;
}
function reset() {
        count1 = 0
        reset1 = document.getElementById("text1");
        reset1.textContent = 0
        count2 = 0
        reset2 = document.getElementById("text2")
        reset2.textContent = 0
}
if(count1 > count2){
    let style1 = document.getElementById("text1")
    style1.style.color = "red";
}
 