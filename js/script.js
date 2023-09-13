
const call = document.querySelector(".call")
const callNow = document.querySelector(".icon-call")
const mail = document.querySelector(".mail")
const mailNow = document.querySelector(".icon-mail")
const loc = document.querySelector(".locat")
const locationNow = document.querySelector(".icon-locat")
 const web = document.querySelector(".webs")
const webNow = document.querySelector(".icon-web")
const Home = document.querySelector("#Home")
const show = document.querySelector(".show")

const overlay = document.querySelector(".content-overlay")
const Textoverlay = document.querySelector(".text-overlay")
const notification = document.querySelector(".notification")
const menu = document.querySelector(".menu")
const wifi = document.querySelector(".wifi")
const n_to = document.querySelector(".Notification-to")

call.addEventListener("click", function(){
    callNow.classList.toggle("show")
    locationNow.classList.remove("show")
    webNow.classList.remove("show")
    mailNow.classList.remove("show")
    n_to.style.height = "55vh"
   
})
mail.addEventListener("click", function(){
  callNow.classList.remove("show")
  locationNow.classList.remove("show")
  webNow.classList.remove("show")
  mailNow.classList.toggle("show")
  n_to.style.height = "55vh"
})
 loc.addEventListener("click", function(){ 
    mailNow.classList.remove("show")
    callNow.classList.remove("show")
    webNow.classList.remove("show")
    locationNow.classList.toggle("show")
    n_to.style.height = "54vh"
  })
web.addEventListener("click", function(){
  mailNow.classList.remove("show")
  callNow.classList.remove("show")
  locationNow.classList.remove("show")
  webNow.classList.toggle("show")
  n_to.style.height = "55vh"
})

const welcome=document.querySelector('.container')


let isOpen=false;
welcome.addEventListener("click", function(e){
        e.preventDefault()
       
      if(isOpen){
        menu.style.display="block"
        wifi.style.display="block"
         overlay.classList.remove("content-to");
         Textoverlay.classList.remove("to")
         notification.classList.remove("Notification-to")
         isOpen=false;
         return false;
      }
        callNow.style.display = "none";
        mailNow.style.display = "none";
        locationNow.style.display = "none";
        webNow.style.display = "none";
        isOpen=true;
       wifi.style.display="none"
      menu.style.display="none"
      overlay.classList.add("content-to");
      Textoverlay.classList.add("to")
      notification.classList.add("Notification-to") 
})
// active item===============
let list = document.querySelectorAll(".home-icon  li");
function active(){
  list.forEach((item)=>{
    item.classList.remove("active")

    this.classList.add("active")
  })
}
list.forEach((item)=> item.addEventListener("click",active))



// overlay.addEventListener("mouseout", function(){
//   menu.style.display="block"
//     wifi.style.display="block"
//     overlay
//     Textoverlay
//     notification
//      overlay.classList.remove("content-to");
//      Textoverlay.classList.remove("to")
//      notification.classList.remove("Notification-to")
//      notification.style.height = ""  
// })


  //  const over = document.getElementById("over");
  // const showOverlayButton = document.querySelector(".menu");
  // const closeOverlayButton = document.getElementById("closs-ovee");

  // function toggleOverlay() {
  //  over.style.left === "0%" ? "-100%" : "0%";
  // }

  // showOverlayButton.addEventListener("click", toggleOverlay);
  // closeOverlayButton.addEventListener("click", toggleOverlay);
