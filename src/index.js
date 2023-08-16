import axios from "axios";
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css'
import { fetchBreeds } from './cat-api'
import { fetchCatByBreed } from './cat-api'


const selectEl = document.querySelector('.breed-select')
const catInfo = document.querySelector('.cat-info')

selectEl.addEventListener('change', onSelect)

fetchBreeds().then((data) => {
    const optionMurcup = data.map(({ id, name }) =>
        `<option value="${id}">${name}</option>`
    ).join('');
    selectEl.innerHTML = optionMurcup

    new SlimSelect({
        select: document.querySelector('.breed-select'),
    })

})





function onSelect(e) {
    const cat = e.target.value
    fetchCatByBreed(e.target.value).then((data) => {
        const createMurcup = data.filter(el => el.id === cat).map((el) => {
            return `<li><img src="${el.image.url}" alt="${el.name}" width="${el.width}" height="${el.heght}"/><h2>${el.name}</h2><p>${el.description}</p><p>${el.temperament}</p>
        </li>`
        }).join('')
        catInfo.innerHTML = createMurcup
    })


}



