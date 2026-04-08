function calculateMarks() {

    let m1 = parseInt(document.getElementById("m1").value) || 0;
    let m2 = parseInt(document.getElementById("m2").value) || 0;
    let m3 = parseInt(document.getElementById("m3").value) || 0;
    let m4 = parseInt(document.getElementById("m4").value) || 0;
    let m5 = parseInt(document.getElementById("m5").value) || 0;

    let total = m1 + m2 + m3 + m4 + m5;

    document.getElementById("totalMarks").innerHTML =
        "Total Marks = " + total;
}


function sumEvenNumbers() {

    let n = parseInt(document.getElementById("num").value);

    let sum = 0;

    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }

    document.getElementById("evenSum").innerHTML =
        "Sum of even numbers = " + sum;
}