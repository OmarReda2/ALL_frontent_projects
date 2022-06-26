var allData = [];
var link = document.querySelectorAll('.nav-item')
var singleRecipeContainer = document.getElementById('single-recipe-container')
var singleRecipe;


console.log(singleRecipeContainer)





for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (e) {
        // console.log(e.target.innerHTML);
        // console.log(i)

        getRecipes(e.target.innerHTML)
    })
}



function getRecipes(x) {
    var req = new XMLHttpRequest();

    req.open('GET', 'https://forkify-api.herokuapp.com/api/search?q=' + x);
    req.send();


    req.addEventListener('readystatechange', function () {
        if (req.readyState == 4 && req.status == 200) {

            allData = req.response;

            allData = JSON.parse(allData)

            allData = allData.recipes;
            displayData()

            // console.log(allData.length);
            console.log(allData);

        }


    })
}



function displayData() {
    var divs = '';

    for (var i = 0; i < allData.length; i++) {

        divs += `   <div class="col-md-3">
        <div class="bg-light">
        <img src='${allData[i].image_url}' class='w-100 img-api' onclick='displaySingleRecipe(${i})'>
            <h2>${allData[i].title.slice(0, 5)}</h2>
            <p>${allData[i].publisher}</p>
        </div>
    </div>`

    }
    console.log(allData.length)
    document.getElementById('row').innerHTML = divs;
}





// api and ajax are done but response output display no completed
function displaySingleRecipe(i) {
    var recipeInfo = `  
    <img src="${allData[i].image_url}" alt="" id="img-Recipe">`;

    var req2 = new XMLHttpRequest

    req2.open('GET', `https://forkify-api.herokuapp.com/api/get?rId=${allData[i].recipe_id}`)
    req2.send();
    req2.addEventListener('readystatechange', function () {
        if (req2.readyState == 4 && req2.status == 200) {

            singleRecipe = req2.response;
            singleRecipe = JSON.parse(singleRecipe);

            // console.log(singleRecipe.publisher)
            console.log(singleRecipe)


            singleRecipeContainer.innerHTML = recipeInfo;
            singleRecipeContainer.style.display = 'flex';


        }
    })


}


