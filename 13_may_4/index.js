/*  
Clicking button will generate a request for data. data will be saved locally and rendered on page.
Filter functionality is sorted locally (asc/desc)
and rendered to the page.
*/

const btn = document.querySelector(".btn");
const filterEl = document.querySelector("#order");

var baseURL =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";

const cardContainer = document.getElementById("card-container");

var fetchedData = []; // to save fetched data locally.(NO NEW REQUESTS made thereafter.)



// key components
btn.addEventListener("click", () => getData(baseURL));
filterEl.addEventListener("change", filterData);


// key functionality

function getData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch data! ${response.status}`);
      return response.json();
    })
    .then(({data}) => {
      fetchedData = data;
      render(fetchedData);
    })
    .catch((err) => {
      console.error(err);
      alert(err.message);
    })
    .finally(() => console.log("Let's move on"));
}

//////////////////////////////////

function render(data) {
  cardContainer.innerHTML = "";
  var html = "";
  data.forEach((each) => {
    html += `<div class="card">
      <h3>${each.country}</h3>
    <p>Population: ${each.population}</p>
  </div>`;
  });
  cardContainer.innerHTML = html;
}

//////////////////////////////////

function filterData() {
  var filterVal = document.querySelector("#order").value;
  var filteredData = fetchedData.slice();
  var url = "";
  if (filterVal === "asc")
    filteredData.sort((a, b) => a.population - b.population);
  else if (filterVal === "desc")
    filteredData.sort((a, b) => b.population - a.population);
  render(filteredData);
}

