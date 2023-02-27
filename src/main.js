import '../style.css'
import { nanoid } from 'nanoid';

// console.log(nanoid());
const btn = document.querySelector('button');
const display = document.querySelector('h2');

btn.addEventListener('click', () => {
  display.innerHTML = nanoid();
});