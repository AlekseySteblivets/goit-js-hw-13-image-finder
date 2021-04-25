
export default function fetchPixabay(searchQuery) {
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=21303972-574e9d18be62e9d74443b9e84`).then(res => {
     if(!res.ok) {
         throw res;
     }
     return res.json();
 });
 }
 