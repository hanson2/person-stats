function changeHeading(ev){
    ev.preventDefault()
    const para = document.querySelector("#stats")
    const next = ev.target.personName.value
    const age = ev.target.personAge.value
    const color = ev.target.personInfo.value
    

    const list = document.createElement('ul')
    para.appendChild(list)
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${next}`
    list.appendChild(nameItem)
    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`
    list.appendChild(ageItem)
   
}   
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', changeHeading)

