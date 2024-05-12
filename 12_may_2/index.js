document.querySelector("button").addEventListener("click", renderCard)
var container = document.querySelector(".container")
async function renderCard() {
  var response = await fetch(`https://reqres.in/api/users`)
  var json = await response.json()
  container.innerHTML = ""
  var html = ""
  json.data.forEach(each => {
    html += `
    <div class="card" style="">
      <img class="card-img-top" src="${each.avatar}" alt="Avatar Image">
      <div class="card-body">
        <h4 class="card-title">${each.first_name} ${each.last_name}</h4>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem omnis odit mollitia deserunt temporibus, harum exercitationem quam.</p>
        <a href="#" class="card-link">${each.email}</a>
      </div>
    </div>`
  })
  container.innerHTML = html
}