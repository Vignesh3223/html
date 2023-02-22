function perfect() {
    var n = document.getElementById("input1").value;
    var sum = 0;
    var i;
    for (i = 1; i < n; i++) {
        if (n % i == 0)
            sum = sum + i;
    }
    if (sum == n) {
        document.write("The given number is a Perfect number");
    }
    else {
        document.write("The given number is not  a Perfect number");
    }
};
function factorial() {
    var a = document.getElementById("input2").value;
    var i = 1;
    var fact = 1;
    do {
        fact = fact * i;
        i++;
    } while (i <= a);
    window.alert("Factorial is " + fact);
}
function fibo() {
    var k = document.getElementById("input3").value;
    var t1 = -1;
    var t2 = 1;
    var t3;
    document.write("Fibonacci series is ");
    while (k > 0) {
        t3 = t1 + t2;
        t1 = t2;
        t2 = t3;
        document.write("\n" + t3);
        k--;
    }
}