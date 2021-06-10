function sum() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    x = n1 + n2;
    document.getElementById("output").innerHTML = ("Output : <br>" + x);
}
function sub() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    x = n1 - n2;
    document.getElementById("output").innerHTML = ("Output : <br>" + x);
}
function mul() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    x = n1 * n2;
    document.getElementById("output").innerHTML = ("Output : <br>" + x);
}
function divide() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    x = n1 / n2;
    document.getElementById("output").innerHTML = ("Output : <br>" + x);
}