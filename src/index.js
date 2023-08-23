import axios from "axios";
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css'
import { fetchBreeds } from './cat-api'
import { fetchCatByBreed } from './cat-api'
import Notiflix, { notiflix } from 'notiflix'


const selectEl = document.querySelector('.breed-select')
const catInfo = document.querySelector('.cat-info')
const loaderEl = document.querySelector('.loader')
const errorEl = document.querySelector('.error')
errorEl.innerHTML = ''




selectEl.addEventListener('change', onSelect)
function onLoad() {
    loaderEl.classList.remove('is-hidden')
    fetchBreeds().then((data) => {
        const optionMurcup = data.map(({ id, name }) =>
            `<option value="${id}">${name}</option>`
        ).join('');
        selectEl.innerHTML = optionMurcup

        new SlimSelect({
            select: document.querySelector('.breed-select'),
        })
    })
        .catch((error) => onError()).finally(() =>
            loaderEl.classList.add('is-hidden')
        )

}
onLoad()


function clearMarcup() {
    catInfo.innerHTML = ""
}

function onError() {
    Notiflix.Report.failure('Oops! Something went wrong! Try reloading the page!')
}




function onSelect(e) {
    const cat = e.target.value

    loaderEl.classList.remove('is-hidden')


    fetchCatByBreed(e.target.value).then((data) => {
        const events = e.target.value



        const createMurcup = data.filter(el => el.id === cat).map((el) => {
            return `<img src="${el.image.url}" alt="${el.name}" width="${el.image.width}" height="${el.image.heght}"/><h2>${el.name}</h2><p>${el.description}</p><p>${el.temperament}</p>
        `
        }).join('')

        catInfo.innerHTML = createMurcup


    }).catch(error => {
        onError()
        clearMarcup()
    }).finally(() => {

        loaderEl.classList.add('is-hidden')
    })
}



