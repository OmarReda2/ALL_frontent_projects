////////////////////////////////////////////
var productNameInput = document.getElementById('productName');
var productCatogeryInput = document.getElementById('productCatogery');
var productPriceInput = document.getElementById('productPrice');
var productDescriptionInput = document.getElementById('productDescription');
var btn = document.querySelector('#btn');

// localStorage.clear();




if (localStorage.getItem('all data') != null) {
    var stringArray = localStorage.getItem('all data');
    var productList = JSON.parse(stringArray);
    displayProducts();
}

else {
    productList = [];
}






function createProduct() {
    if (btn.innerHTML == 'add') {
        if (validateProductName() == true && productNameInput.value != '' && productCatogeryInput.value != '' && productDescriptionInput.value != '' && productPriceInput.value != '') {
            var singleProduct = {
                pname: productNameInput.value,
                pprice: productPriceInput.value,
                pcat: productCatogeryInput.value,
                pdesc: productDescriptionInput.value
            }

            productList.push(singleProduct);

            localStorage.setItem('all data', JSON.stringify(productList))
            displayProducts();

            // clearForm();
        }

        else {
            alert('try again')
        }
    }

    else{
        updateProduct();
    }
}





function clearForm() {
    productNameInput.value = '';
    productCatogeryInput.value = '';
    productPriceInput.value = '';
    productDescriptionInput.value = '';

}





function displayProducts() {
    var trs = '';

    for (var i = 0; i < productList.length; i++) {
        trs += `
        <tr>
        <td>${[i]}</td>
        <td>${productList[i].pname}</td>
        <td>${productList[i].pcat}</td>
        <td>${productList[i].pprice}</td>
        <td>${productList[i].pdesc}</td>
        <td><button onclick='retrieveDataInForm(${i})' class="btn btn-outline-warning">
            <i class="far fa-edit"></i>
        </button></td>

        <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">
            <i class="fas fa-trash-alt"></i>
        </button></td>
    </tr>`
    }

    document.getElementById('tbody').innerHTML = trs;
}







function deleteProduct(index) {

    productList.splice(index, 1);

    localStorage.setItem('all data', JSON.stringify(productList))

    displayProducts();
}







function displayProducts2() {
    var trs = '';

    // no looping as the low perf 
    lastIndex = productList.length - 1;

    trs = `
        <tr>
        <td>${[lastIndex]}</td>
        <td>${productList[lastIndex].pname}</td>
        <td>${productList[lastIndex].pcat}</td>
        <td>${productList[lastIndex].pprice}</td>
        <td>${productList[lastIndex].pdesc}</td>
        <td><button class="btn btn-outline-warning">
            <i class="far fa-edit"></i>
        </button></td>

        <td><button onclick='deleteProduct();' class="btn btn-outline-danger">
            <i class="fas fa-trash-alt"></i>
        </button></td>
    </tr>`

    document.getElementById('tbody').innerHTML += trs;
}







var nameAlert = document.getElementById('nameAlert');

function validateProductName() {
    var pnameRegex = /^[A-Z][a-z0-9]{3,15}$/;
    var productName = productNameInput.value

    if (pnameRegex.test(productName)) {
        nameAlert.style.display = 'none';
        return true;
    }

    else {
        nameAlert.style.display = 'block';
        return false;
    }
}

productNameInput.addEventListener('blur', validateProductName);






function searchProduct() {
    var searchInputValue = document.getElementById('searchInput').value;
    var trs = '';

    for (var i = 0; i < productList.length; i++) {
        if (productList[i].pname.toLowerCase().includes(searchInputValue.toLowerCase()) == true) {

            trs += `
            <tr>
            <td>${[i]}</td>
            <td>${productList[i].pname}</td>
            <td>${productList[i].pcat}</td>
            <td>${productList[i].pprice}</td>
            <td>${productList[i].pdesc}</td>
            <td><button class="btn btn-outline-warning">
                <i class="far fa-edit"></i>
            </button></td>
    
            <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">
                <i class="fas fa-trash-alt"></i>
            </button></td>
        </tr>`
        }
        document.getElementById('tbody').innerHTML = trs;
    }
}






var index;
function retrieveDataInForm(x) {

    index = x;
    productNameInput.value = productList[x].pname;
    productPriceInput.value = productList[x].pprice;
    productCatogeryInput.value = productList[x].pcat;
    productDescriptionInput.value = productList[x].pdesc;

    btn.innerHTML = 'update';
}


function updateProduct() {
    productList[index].pname = productNameInput.value;
    productList[index].pprice = productPriceInput.value;
    productList[index].pdesc = productDescriptionInput.value;
    productList[index].pcat = productCatogeryInput.value;

    localStorage.setItem('all data', JSON.stringify(productList))


    displayProducts();
    btn.innerHTML = 'add';
    // clearForm();
}

