function changeHeading(ev){
    ev.preventDefault()
    const para = document.querySelector("#stats")
    const next = ev.target.personName.value

    //if(i!=0){
    //const curr = para.textContent
    //para.textContent = curr+next
    //}else{
        para.textContent = next
    //    i++
    //}
}
let i = 0;
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', changeHeading)

