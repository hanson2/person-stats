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
    list.appendChild(renderListItem('name',name))
    list.appendChild(renderListItem('age',age))
    list.appendChild(renderListItem('color',colorDiv))
    para.appendChild(list)
}
function renderListItem(label, value){
    const item = document.createElement('li')
    item.textContent = `${label}: `
    try{
        item.appendChild(value)
    }
    catch(e){
        item.textContent+=value
    }
    return item
}
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', handleEvent)