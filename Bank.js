function calculateSI(){
    var p=document.getElementById("amt").value;
    var n=document.getElementById("nper").value;
    var r=document.getElementById("rate").value;
    var si=(p*n*r)/100;
    document.getElementById("res").innerHTML += " " + si + " Rs.";
}
 