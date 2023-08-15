import axios from "axios";
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css'
import { fetchBreeds } from './cat-api'
import { fetchCatByBreed } from './cat-api'


const selectEl = document.querySelector('.breed-select')
const catInfo = document.querySelector('.cat-info')

selectEl.addEventListener('change', fetchBreeds)

fetchBreeds().then((data) => {
    const optionMurcup = data.map(({ id, name, url }) =>
        `<option value="${id}">${name}</option>`
    ).join('');
    selectEl.innerHTML = optionMurcup

    new SlimSelect({
        select: document.querySelector('.breed-select'),
        // data: selectEl.getData(`img url="${url}"`)
    })

    console.log(fetchCatByBreed(data.id))


})








