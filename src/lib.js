// Functions Helpers
const INIT_STORAGE = [];
const PUBLIC_KEY = 'key';
let model = INIT_STORAGE;

const qs = (s) => document.querySelector(s);

const getStorage = () => JSON.parse(localStorage.getItem(PUBLIC_KEY));

const setStorage = () =>
    localStorage.setItem(PUBLIC_KEY, JSON.stringify(model));

const initStorage = () => !getStorage() && setStorage();

const getModel = () => model;

const createModel = (newEntry = null, newModel = model) => {
    if (newEntry !== null) model = [...model, newEntry];
    else model = newModel;
};

const updateAll = (newEntry, newModel = getStorage()) => {
    createModel(newEntry, newModel);
    setStorage();
};

export default {
    qs,
    initStorage,
    updateAll,
    getModel,
};
