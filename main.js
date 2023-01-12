/* document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม: " +sum;

}) */
/* document.getElementById("calculator1").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม: " +sum;

})
document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม: " +sum;

})
document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม: " +sum;

}) */

function myalert(){
    alert("Hello")
} 

function sum1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    alert(sum)
}
function sum2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    alert(sum)
}
function sum3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    alert(sum)
}
function sum4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    alert(sum)
}
function sum5(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = num1 / (num2/100 * num2/100);
    alert(sum.toFixed(2))
}

const img = document.createElement("img")

img.src = "img/p1.png";
img.style.width = "200px";

document.getElementById("mydiv").appendChild(img);