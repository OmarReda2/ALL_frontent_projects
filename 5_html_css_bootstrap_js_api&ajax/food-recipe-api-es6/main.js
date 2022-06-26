//  fetch-async-wait //
//////////////////////////////////////// 





// 1.1 fetch //
////////////////////////////////////////

// async function getData() {
//     var myResponse = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza'); // await == then , default methode "GET"
//     // var myResponse = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza', { method: 'POST', body: {} }); // POST methode
//     var data = await myResponse.json() // atal3 el data men el response

//     console.log(data)
//     // console.log(data.recipes)
// }

// getData()

///////////////////////////////////////













// 1.2 display with fetch //
/////////////////////////////////////////

var allData = [];
var link = document.querySelectorAll('.nav-item')

async function getData(x) {
    var myResponse = await fetch('https://forkify-api.herokuapp.com/api/search?q=' + x); // await == then
    var data = await myResponse.json() // atal3 el data men el response

    allData = data.recipes;
    displayData();

    console.log(x);
    // console.log(data)
    // console.log(data.recipes)
}

for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (e) {
        // console.log(e.target.innerHTML);
        // console.log(i)

        getData(e.target.innerHTML)
    })
}


function displayData() {
    var divs = '';

    for (var i = 0; i < allData.length; i++) {

        divs += `   <div class="col-md-3">
        <div class="bg-info">
        <img src='${allData[i].image_url}' class='w-100'>
            <h2>${allData[i].title.slice(0, 5)}</h2>
            <p>${allData[i].publisher}</p>
        </div>
    </div>`
    }

    document.getElementById('row').innerHTML = divs;
}

getData('chips');

///////////////////////////////////////////












// 1.2 callbacks with fetch//
//////////////////////////////////////////

// async function getData(x) {
//     var myResponse = await fetch('https://forkify-api.herokuapp.com/api/search?q=' + x); // await == then
//     var data = await myResponse.json() // atal3 el data men el response

//     allData = data.recipes;
//     // displayData();

//     console.log(x);
//     // console.log(data)
//     // console.log(data.recipes)
// }


// // async function getAll() {
// //     await getData('salad')
// //     await getData('pizza')
// //     await getData('tomato')
// //     console.log('end')
// // }
// // getAll()


// // self invoke function
// (async function () {
//     await getData('salad')
//     await getData('pizza')
//     await getData('tomato')
//     console.log('end')
// })()

