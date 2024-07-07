import './style.css'

import {Button} from './components'


console.log("Loading scripts..")

document.addEventListener("DOMContentLoaded", () => {
    const title = document.createElement('h1')
    title.innerText = 'Hello, world'

    const button = new Button('Get early access')

    document.body.appendChild(title)
    document.body.appendChild(button)
})

