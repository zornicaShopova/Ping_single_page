function isEmpty(){
var email = document.form.email.value;
if(email === ""){
    alert("Whoops! It looks like you forgot to add your email");
    return false;
}else if(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    alert("Please provide a valid email address");
    return false;
}else{
    alert("You are succesfully submited!");
}

}