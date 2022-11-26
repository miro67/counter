let con = 0;
const nubr = document.getElementById("nubr")
const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        if(e.currentTarget.classList.contains("salib")){
            con--;
        }else if(e.currentTarget.classList.contains("incres")){
            con++;
        }else{
            e.currentTarget.classList.contains("reset")
            con = 0;
        }
        if(con<0){
            nubr.style.color="red";
        }
        if(con>0){
            nubr.style.color="green";
        }
        if(con===0){
            nubr.style.color="#222";
        }
        nubr.textContent = con;
    })
});