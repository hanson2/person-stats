function changeHeading(ev){
    ev.preventDefault()
    const para = document.querySelector("#para")
    const next = ev.target.personName.value
    const color = ev.target.personInfo.value
    para.style.color = color
    if(i!=0){
        
        const curr = para.textContent
        para.textContent = curr+", "+next
    }else{
        para.textContent = next
        i++
    }
}
let i = 0;
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', changeHeading)

