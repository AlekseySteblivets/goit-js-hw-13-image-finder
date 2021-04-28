
// export default function fetchPixabay(page = 1, searchQuery) {
//     return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=21303972-574e9d18be62e9d74443b9e84`).then(res => {
//      if(!res.ok) {
//          throw res;
//      }
//      return res.json();
//  });
//  }
 
export default class NewApiService {
    constructor () {
        this.searchQuery = '';
        this.page = 1;

    }

    fetchFotos() {
        // console.log(this);
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=21303972-574e9d18be62e9d74443b9e84`;
        return fetch(url)
        .then(res => {
            if(!res.ok) {
                throw res;
            }
            return res.json();
             })
        .then (data => {
            console.log(data);
            this.increment();
            return data.hits;
        });
    }


    increment() {
        this.page += 1;
    }

    resetPerPage() {

        this.page = 1;
    }

    get query () {
        return this.searchQuery;
    }

    set query (newQuery) {
        this.searchQuery = newQuery;
    }
};