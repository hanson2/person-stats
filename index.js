function changeHeading(ev){
    ev.preventDefault()
    const para = document.querySelector("#stats")
    const next = ev.target.personName.value
    const age = ev.target.personAge.value
    const color = ev.target.personInfo.value

    const p = document.createElement('p')

    p.textContent = `${next}: ${age}`
    p.style.color = color

    para.appendChild(p)
    
   
}   
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', changeHeading)

