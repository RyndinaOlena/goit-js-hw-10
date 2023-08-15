import axios from "axios";
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css'
import { fetchBreeds } from './cat-api'
const selectEl = document.querySelector('.breed-select')


selectEl.addEventListener('change', getMurcup)


fetchBreeds().then((data) => {
    getMurcup(data)

})

function getMurcup(data) {

    // const takeCats = data.map(({ url, alt, name, descrition, temperament }) => {
    //     `<li><img src="${url}" alt="${alt}"><h2>${name}</h2><p>${descrition}</p><h3>${temperament}</h3> </li>`
    // })



    const optionMurcup = data.map(({ id, name }) =>
        `<option value="${id}">${name}</option>`
    ).join('');
    selectEl.insertAdjacentHTML('afterbegin', optionMurcup)

    new SlimSelect({
        select: document.querySelector('.breed-select'),

    })

    // const takeCats = data.map(({ url, alt, name, descrition, temperament }) => {
    //     `<li><img src="${url}" alt="${alt}"><h2>${name}</h2><p>${descrition}</p><h3>${temperament}</h3> </li>`
    // })

    // selectEl.insertAdjacentHTML('afterbegin', takeCats)

}





