var btnCategoryData = document.querySelector("#get-category-data")
var btnIngredientData = document.querySelector("#get-ingredient-data")
btnCategoryData.addEventListener("click", getCategoryData)
btnIngredientData.addEventListener("click", getIngredientData)
async function getCategoryData() {
  // console.log("getCategoryData text")
  try {
    var response = await fetch('https://www.themealdbb.com/api/json/v1/1/filter.php?c=Seafood');
    var json = await response.json();
    console.log(json)
  } catch (error) {
    console.log('Something Went Wrong: ', error);
  }
}
async function getIngredientData() {
  // console.log("getIngredientData text")
  try {
    var response = await fetch('https://www.themealdbb.com/api/json/v1/1/filter.php?i=chicken_breast');
    var json = await response.json();
    console.log(json)
  } catch (error) {
    console.log('Something Went Wrong: ', error);
  }
}