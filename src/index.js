import axios from "axios";
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css'
import { fetchBreeds } from './cat-api'
const selectEl = document.querySelector('.breed-select')
const catInfo = document.querySelector('.cat-info')

selectEl.addEventListener('change', fetchBreeds, choose)

fetchBreeds().then((data) => {
    const optionMurcup = data.map(({ id, name }) =>
        `<option value="${id}">${name}</option>`
    ).join('');
    selectEl.innerHTML = optionMurcup

    new SlimSelect({
        select: document.querySelector('.breed-select'),
    })

})
function choose(e) {
    const cat = e.target.elements.value
    console.log(cat)
}








