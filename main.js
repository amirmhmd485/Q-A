// code
const allButtons = document.querySelectorAll(".question i");
allButtons.forEach(btn => {
    let opens = true;
    btn.addEventListener("click" , function(e){
        if(opens){
            btn.parentElement.parentElement.style.height = "237px";
            btn.className = "fa-solid fa-minus";
            opens = false;
        }
        else{
            btn.parentElement.parentElement.style.height = "90px";
            btn.className = "fa-solid fa-plus";
            opens = true;
        }
    })
})