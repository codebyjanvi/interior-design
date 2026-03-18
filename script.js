function scrollToProjects(){
document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});
}

let slides=document.querySelectorAll(".slide");

let index=0;

setInterval(()=>{

slides[index].classList.remove("active");

index=(index+1)%slides.length;

slides[index].classList.add("active");

},4000);
function orderProduct(product){

let phone="+918123842947";

let message="Hello, I want to order: " + product;

let url="https://wa.me/"+phone+"?text="+encodeURIComponent(message);

window.open(url);

}
function sendMessage(){

let name=document.querySelector("input[type=text]").value;
let email=document.querySelector("input[type=email]").value;
let message=document.querySelector("textarea").value;

let phone="919999999999";

let text="Name: "+name+" Email: "+email+" Message: "+message;

let url="https://wa.me/"+phone+"?text="+encodeURIComponent(text);

window.open(url);

}