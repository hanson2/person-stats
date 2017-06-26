function changeHeading(ev){
    h1 = document.querySelector("h1")

    ev.preventDefault()
    h1.textContent = ev.target.personName.value
}

const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', changeHeading)
