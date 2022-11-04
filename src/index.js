import lib from './lib.js';

// DOM
const formInput = lib.qs('.form__input');
const formBtn = lib.qs('.form__btn');
const result = lib.qs('.result');

const render = () => {
    result.innerHTML = lib.getModel();
};

const run = () => {
    lib.initStorage();
    lib.updateAll();
    render();
    formBtn.addEventListener('click', (evt) => {
        lib.updateAll(formInput.value);
        render();
        formInput.value = '';
    });
};

run();
