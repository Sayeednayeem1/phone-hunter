const loadPhone = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones =>{
    const phoneContainer =document.getElementById('phone-container');
    phoneContainer.textContent = '';

    // display number how many phone you wanna show
    phones = phones.slice(0,10);
    // display no phones found
    const notFound = document.getElementById('no-found-message');
    if(phones.length === 0){
        notFound.classList.remove('d-none');
    }
    else{
        notFound.classList.add("d-none");
    }
    phones.forEach(phone =>{
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additionalcontent. This content is a little bit longer.</p>
        </div>
         </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    });
    // stop loader
    toggleSpinner(false);
}

document.getElementById('btn-search').addEventListener('click', function(){
    // start loader
    toggleSpinner(true);
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    loadPhone(searchText);

})

const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById("loader");
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add("d-none");
    }
}

loadPhone('iphone');