email=document.getElementById("email");
form=document.querySelector("form");

form.addEventListener('submit',function (event){
emails=email.value;
if (emails.length<4){
    alert("ko");
    return
}
console.log(emails);

});