document.querySelector("button").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos/").then(r => r.json()).then(d => render(d))
})

function render(obj) {
  var container = document.querySelector(".container")
  container.innerHTML = ""
  if (Array.isArray(obj)) {
    var html = ""
    obj.forEach(each => html+=`<div><label>${each.title} <input type = "checkbox" /></label></div>`)
    container.innerHTML = html
  }
  else {
    container.innerHTML = `<div><label>${obj.title} <input type = "checkbox" /></label></div>`
  }
}