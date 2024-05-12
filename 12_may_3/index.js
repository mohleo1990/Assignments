// apikey=efd82403

var formEl = document.querySelector("form")

formEl.addEventListener("submit", (e) => { 
  var searchVal = document.querySelector("input").value
  e.preventDefault(); 
  getTitle(searchVal) 
})

function getTitle(title) {
  var response = fetch(`http://www.omdbapi.com/?t=${title}&apikey=efd82403`)
  response.then(d => d.json()).then(d => renderCard(d))
}

function renderCard(movie) {
  var container = document.querySelector(".container")
  container.innerHTML =
    `
  <div class="card" style="">
      <img class="card-img-top" src="${movie.Poster}" alt="Avatar Image">
      <div class="card-body">
        <h2 class="card-title">${movie.Title}</h2>
        <p class="card-text">${movie.Plot}</p>
        <h5 class="card-title">${movie.Released}</h5>
      </div>
    </div>
  `
}