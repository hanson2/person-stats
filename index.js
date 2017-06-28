function handleEvent(ev){
    ev.preventDefault()
    const para = document.querySelector("#stats")
    const name = ev.target.personName.value
    const age = ev.target.personAge.value
    const color = ev.target.personInfo.value

    const colorDiv = renderColor(color, para)
    renderList(para, name, age, colorDiv)
    
   
}   

function renderColor(color, para){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '2rem'
    return colorDiv
}
function renderList(para, name, age, colorDiv){
    const list = document.createElement('ul')
    renderListItem(list,name,age,colorDiv)
    para.appendChild(list)
}
function renderListItem(list, name, age, colorDiv){
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${name}`
    list.appendChild(nameItem)
    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`
    list.appendChild(ageItem)
    const colorItem = document.createElement('li')
    colorItem.textContent = `Color: `

    colorItem.appendChild(colorDiv)
    list.appendChild(colorItem)
}
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', handleEvent)