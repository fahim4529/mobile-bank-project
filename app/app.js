document.getElementById("login-btn").addEventListener("click", function(event){
event.preventDefault();
// console.log('hello bangladesh')
const accountNumber=document.getElementById('Account-number').value;
// console.log("accountNumber");

const pin = document.getElementById('pin').value;
// console.log(accountNumber,pin);
if(accountNumber.length===11){
    // console.log("yess")
    // console.log(typeof pin)
    if (pin==='1234'){
        // console.log('okey thik ace');
        window.location.href="./main.html"
    }
    else{
        alert('pin thik nai')
    }
}
else{
    alert("need valid number")
}

});
