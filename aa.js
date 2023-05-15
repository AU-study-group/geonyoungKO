const mainContent = document.querySelector('.web');

fetch('https://janghwanpark.github.io/ajax-data-storage/json-data/product-data/movie-data.json ')
.then(res => res.json())
.then(data => {data.movies.forEach((movie) =>  {
        const { id, title, genre ,director, year, rating ,product, DVD , price ,stock } = movie;
        mainContent.insertAdjacentHTML("beforeend", `
        <div clas = "products-wrapper" data-id="${id}">
        <div class = "products-data-information flex-box">
            <h6>영화명 : <span>${title}</span></h6>
            <p>감독 : <span>${director}</span>
               년도 : <span>${year}</span></br>
               평점 : <span>${rating}</span></p>
               <button class = "get-products-item">담기</button>
            </div>
            </div>`);
    
});
})

.catch(error => console.log(error))
