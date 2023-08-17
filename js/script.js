const call = document.querySelector(".call")
const callNow = document.querySelector(".icon-call")
const mail = document.querySelector(".mail")
const mailNow = document.querySelector(".icon-mail")
const loc = document.querySelector(".locat")
const locationNow = document.querySelector(".icon-locat")
 const web = document.querySelector(".webs")
const webNow = document.querySelector(".icon-web")

const overlay = document.querySelector(".content-overlay")
const Textoverlay = document.querySelector(".text-overlay")
const notification = document.querySelector(".notification")
const menu = document.querySelector(".menu")
const wifi = document.querySelector(".wifi")

const move = ()=>{
  call.addEventListener("click", function(){
    callNow.style.display = "block";
    mailNow.style.display = "none";
    locationNow.style.display = "none";
    webNow.style.display = "none";
    notification.style.height ="95px"
  })
  mail.addEventListener("click", function(){
   callNow.style.display = "none";
    mailNow.style.display = "block";
    locationNow.style.display = "none";
    webNow.style.display = "none";
    notification.style.height ="99px"
  })
   loc.addEventListener("click", function(){
     callNow.style.display = "none";
    mailNow.style.display = "none";
    locationNow.style.display = "block";
    webNow.style.display = "none";
    notification.style.height ="79px"
    })
  web.addEventListener("click", function(){
   callNow.style.display = "none";
    mailNow.style.display = "none";
    locationNow.style.display = "none";
    webNow.style.display = "block";
    notification.style.height ="95px"
  },true)
}


overlay.addEventListener("mouseover", function(){

    call.addEventListener("click", function(){
        callNow.style.display = "block";
        mailNow.style.display = "none";
        locationNow.style.display = "none";
        webNow.style.display = "none";
        notification.style.height = "72%" 
      })
      mail.addEventListener("click", function(){
       callNow.style.display = "none";
        mailNow.style.display = "block";
        locationNow.style.display = "none";
        webNow.style.display = "none";
        notification.style.height = "72%"  
      })
       loc.addEventListener("click", function(){
         callNow.style.display = "none";
        mailNow.style.display = "none";
        locationNow.style.display = "block";
        webNow.style.display = "none"; 
        notification.style.height = "72%"  
        })
      web.addEventListener("click", function(){
       callNow.style.display = "none";
        mailNow.style.display = "none";
        locationNow.style.display = "none";
        webNow.style.display = "block";
        notification.style.height = "72%"  
      })
        callNow.style.display = "none";
        mailNow.style.display = "none";
        locationNow.style.display = "none";
        webNow.style.display = "none";
        
    wifi.style.display="none"
    menu.style.display="none"
    overlay.classList.add("content-to");
    Textoverlay.classList.add("to")
    notification.classList.add("Notification-to") 
})

overlay.addEventListener("mouseout", function(){
  menu.style.display="block"
    wifi.style.display="block"
    overlay
    Textoverlay
    notification
     overlay.classList.remove("content-to");
     Textoverlay.classList.remove("to")
     notification.classList.remove("Notification-to")
     notification.style.height = ""  
})


  //  const over = document.getElementById("over");
  // const showOverlayButton = document.querySelector(".menu");
  // const closeOverlayButton = document.getElementById("closs-ovee");

  // function toggleOverlay() {
  //  over.style.left === "0%" ? "-100%" : "0%";
  // }

  // showOverlayButton.addEventListener("click", toggleOverlay);
  // closeOverlayButton.addEventListener("click", toggleOverlay);
