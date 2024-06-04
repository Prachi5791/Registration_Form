const container = document.querySelector(".container"),
     pwshowHide = document.querySelectorAll(".showHide"),
     pwfields = document.querySelectorAll(".password"),
     signUp = document.querySelector(".signup-link"),
     login = document.querySelector(".login-Link");




     //js code to show /hide password and chage icon
     pwshowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click",()=>{
            pwfields.forEach(pwfields =>{
                if(pwfields.type === "password"){
                    pwfields.type = "text";
                    pwshowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash","uil-eye");
                    })
                }
                else{
                    pwfields.type = "password";

                    pwshowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye","uil-eye-slash");
                    })
                }
            })
        })
        
     });




//js to appear sign up and login

signUp.addEventListener("click",()=>{
    container.classList.add("active");
});
login.addEventListener("click",()=>{
    container.classList.remove("active");
})