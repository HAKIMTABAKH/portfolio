//Enable hidden nav bar
{
    const nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll" , ()=>{
        if(lastScrollY < window.lastScrollY){
            nav.classList.add("navbar--hidden");
        }else{
            nav.classList.remove("navbar--hidden");
        }
        lastScrollY = window.lastScrollY;
    })
}

$(document).ready(function(){
    $(".menu-icon").click(function(){
      $("nav ul").toggleClass("menu-active");
    });
  });
  
const form = document.querySelector('form')

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "hakim.tabakh@isimg.tn",
        Password : "F092E064BF0C680874691CDF9E5BFD9CA53D",
        To : 'hakimtabakh2020@gmail.com',
        From :document.getElementById("email").value,
        Subject : "New Contact From Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
})