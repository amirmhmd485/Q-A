// code
const allButtons = document.querySelectorAll(".question i");
allButtons.forEach(btn => {
    let opens = true;
    btn.addEventListener("click" , function(e){
        if(opens){
            btn.parentElement.nextElementSibling.style.display = "flex";
            btn.className = "fa-solid fa-minus";
            opens = false;
        }
        else{
            btn.parentElement.nextElementSibling.style.display = "none";
            btn.className = "fa-solid fa-plus";
            opens = true;
        }
    })
})