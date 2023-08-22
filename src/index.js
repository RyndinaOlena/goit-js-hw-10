import axios from "axios";
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css'
import { fetchBreeds } from './cat-api'
import { fetchCatByBreed } from './cat-api'
import Notiflix, { notiflix } from 'notiflix'


const selectEl = document.querySelector('.breed-select')
const catInfo = document.querySelector('.cat-info')
const loaderEl = document.querySelector('.loaderS')
const errorEl = document.querySelector('.error')
errorEl.innerHTML = ''
loaderEl.style.display = 'none'



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
    .catch(error => Notiflix.Report.failure('Oops! Something went wrong! Try reloading the page!'))





function onSelect(e) {
    const cat = e.target.value
    // loaderEl.classList.add('loaderS')
    loaderEl.style.display = 'block'
    fetchCatByBreed(e.target.value).then((data) => {
        const events = e.target.value


        const createMurcup = data.filter(el => el.id === cat).map((el) => {
            return `<img src="${el.image.url}" alt="${el.name}" width="${el.image.width}" height="${el.image.heght}"/><h2>${el.name}</h2><p>${el.description}</p><p>${el.temperament}</p>
        `
        }).join('')
        loaderEl.classList.remove('loaderS')
        catInfo.innerHTML = createMurcup
        // if (catInfo !== '') {
        //     loaderEl.classList.remove('loaderS')
        // }

    }).catch(error => Notiflix.Report.warning('Oops! Something went wrong! Try reloading the page!')).finally(() => {

    })
}



