function changeHeading(ev){
    ev.preventDefault()
    const para = document.querySelector("#stats")
    const next = ev.target.personName.value
    const color = ev.target.personInfo.value
    
    if(i!=0){
        
        const curr = para.innerHTML
        para.innerHTML = "<p>"+next+'</p>'+curr
        const pa = para.querySelector('p')
        pa.style.color = color
    }else{
        para.innerHTML = '<p>'+next+'</p>'
        i++
    }
}   
let i = 0;
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', changeHeading)

