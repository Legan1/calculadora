//esto me si para llamar el 
const display = document.querySelector("#display")
//selecciona todos los botones
const buttons = document.querySelectorAll("button")

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerText="" //esto me sirve que para al momento de dar clic al boton con el id de clear me borra lo que tiene el display
        }else if(item.id=="backspace"){
            let string =display.innerText.toString()
            display.innerText=string.substr(0,string.length-1)
        }else if(display.innerText != "" && item.id=="equal"){
            display.innerText =eval(display.innerText)
        }else if(display.innerText =="" && item.id=="equal"){
            display.innerText = "null"
            setTimeout(()=>(display.innerText = ""),2000)
        }
        else{
            display.innerText+= item.id
        }
    }
})
const themetoggleBtn = document.querySelector(".theme-toggler")
const calculadora=document.querySelector(".calculadora")
let isDark = true;

themetoggleBtn.onclick=()=>{
    calculadora.classList.toggle("dark")
    themetoggleBtn.classList.toggle("active")
    isDark=false
}