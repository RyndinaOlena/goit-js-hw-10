import axios from "axios";
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css'
import { fetchBreeds } from './cat-api'
import { fetchCatByBreed } from './cat-api'


const selectEl = document.querySelector('.breed-select')
const catInfo = document.querySelector('.cat-info')

selectEl.addEventListener('change', fetchBreeds)

fetchBreeds().then((data) => {
    const optionMurcup = data.map(({ id, name }) =>
        `<option value="${id}">${name}</option>`
    ).join('');
    selectEl.innerHTML = optionMurcup

    new SlimSelect({
        select: document.querySelector('.breed-select'),
        // data: selectEl.getData(`img url="${url}"`)
    })




})



fetchCatByBreed().then((data) => {
    const createMurcup = data.map((el) => {
        return `<li><img src=$"${el.url}" alt="${el.name}" width="${el.width}" height="${el.heght}"/><h2>${el.name}</h2><p>${el.description}</p><p>${el.temperament}</p>
        </li>`
    }).join('')
    catInfo.insertAdjacentHTML('afterbegin', createMurcup)
})






