// const tod = document.getElementsByClassName("galeriaP");
// const mm = document.getElementsByClassName("mm");
// const r = document.getElementsByClassName("r");
// const tt=tod;

// const btnMm = document.getElementById("mm");
// const btnR = document.getElementById("r");
// btnMm.addEventListener("click",e => {
//     console.log("hola")
//     e.preventDefault();
//     let fM= [...mm];
//     fM.forEach((foto, index)=>{
//         if(index==0){
//             tod[0].innerHTML = "";
//             tod[0].appendChild(foto);          
//         }else{
//             tod[0].appendChild(foto);
//         }
//     })
// })
// btnR.addEventListener("click",e => {
//     console.log("hola")
//     e.preventDefault();
//     let fR= [...r];
//     fR.forEach((foto, index)=>{
//         if(index==0){
//             tod[0].innerHTML = "";
//             tod[0].appendChild(foto);          
//         }else{
//             tod[0].appendChild(foto);
//         }
//     })
// })
// pr.forEach(e=>{

//    if(e.className==="mm"){
//     console.log(e.className)}
// })
$(document).ready(function () {

    const tod = $(".galeriaP");
    const mm = $(".mm");
    const r = $(".r");
    const tt = tod;

    const btnMm = $("#mm");
    const btnR = $("#r");
    const btnT = $("#t");
    btnMm.click(e=>filter(e,"mm",".r"))
    btnR.click(e=>filter(e,"r",".mm"))
    btnT.click(e=>{
        e.preventDefault();
        $.each(tod[0].children, (i, value) => {
           $(value).show();              
        })
    })
    function filter(e, compClase, quitarClase){
        e.preventDefault();
        $.each(tod[0].children, (i, value) => {
            if ($(value).hasClass(compClase)) {
                $(quitarClase).toggle();
            }
        })
    }
})

 