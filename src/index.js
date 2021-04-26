import './styles.css';
import NewApiService  from './js/apiService';

const fetchFotosPixabay = NewApiService();

console.log(fetchFotosPixabay);

// const refs = {
//     searchForm: document.querySelector('form[id=search-form]'),

// }

// console.log(refs.searchForm);

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch (e) {
//     e.preventDefault();

//     fetchFotosPixabay.query = e.currentTarget.elements.query.value;
//     fetchFotosPixabay.fetchFotos();
// }

// console.log(fetchFotosPixabay(1, 'running'));

