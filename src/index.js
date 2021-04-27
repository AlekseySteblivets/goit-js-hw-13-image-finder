import './styles.css';
import NewApiService  from './js/apiService';

const fetchFotosPixabay = new NewApiService();

console.log(fetchFotosPixabay);

const refs = {
    searchForm: document.querySelector('input'),

}

console.log(refs.searchForm);

refs.searchForm.addEventListener('input', onSearch);

function onSearch (e) {
    e.preventDefault();

    fetchFotosPixabay.query = e.data;
    fetchFotosPixabay.fetchFotos();
}

// console.log(fetchFotosPixabay(1, 'running'));

