import { nanoid } from "nanoid";
import './style.css'

const passwordBtnEl = document.querySelector('button')
const displayPasswordEL = document.querySelector('h2')
const copy = import('clipboard-copy')

passwordBtnEl.addEventListener('click', () => {
    const randomPassword = nanoid()
    displayPasswordEL.innerHTML = randomPassword
})




