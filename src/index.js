import './styles.css';
import NewApiService  from './js/apiService';
import articlesTpl from './templatesRenderCards.hbs';

const fetchFotosPixabay = new NewApiService();

console.log(fetchFotosPixabay);

const refs = {
    searchForm: document.querySelector('.search-form'),
    cardRender: document.querySelector('.gallery'),
    buttonLoadMore: document.querySelector('.button-load-more')
}

console.log(refs.searchForm);
console.log(refs.buttonLoadMore);

refs.searchForm.addEventListener('submit', onSearch);
refs.buttonLoadMore.addEventListener('click', onLoadMore);

function onSearch (e) {
    e.preventDefault();
    fetchFotosPixabay.query = e.currentTarget.elements.query.value;
    
    // fetchFotosPixabay.increment();
    fetchFotosPixabay.resetPerPage();
    fetchFotosPixabay.fetchFotos().then(articles => {
        clearArticlesContainer();
        appendArticlesMarkup(articles);
    } );
}



function onLoadMore () {
    fetchFotosPixabay.fetchFotos().then(appendArticlesMarkup);
    // window.scrollTo(0, 0);
}

function appendArticlesMarkup(articles) {
    refs.cardRender.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
    refs.cardRender.innerHTML = '';
}
