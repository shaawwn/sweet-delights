import './style.css'

console.log("Loading scripts..")

document.addEventListener("DOMContentLoaded", () => {
    const title = document.createElement('h1')
    title.innerText = 'Hello, world'
    document.body.appendChild(title)
})

