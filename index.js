function changeHeading(ev){
    ev.preventDefault()
    const para = document.querySelector("#para")
    const next1 = ev.target.personName.value
    const next2 = ev.target.personInfo.value

    if(i!=0){
    const curr = para.textContent
    para.textContent = curr+", "+next1+":"+next2
    }else{
        para.textContent = next1+":"+next2
        i++
    }
}
let i = 0;
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', changeHeading)

