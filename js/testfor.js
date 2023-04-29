//modal,add product

let openmodal = document.querySelector(".open-modal");
closemodal = document.querySelector(".close-modal")
let modal = document.querySelector("#add-product-modal")

openmodal.addEventListener("click", () => {
    document.body.classList.add("modal-body");
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    modal.style.transform = "translate(-50%,-50%) scale(1)";
});

closemodal.addEventListener("click", () => {
    ModalClose()
})
function ModalClose() {
    document.body.classList.remove("modal-body");
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    modal.style.transform = "translate(-50%,-50%) scale(0)";
  }

//add product
let nameInput = document.querySelector("#name")
let priceInput = document.querySelector("#price");
let imageInput = document.querySelector("#image");
let form = document.querySelector("#product-form");
let cardsWrapper = document.querySelector(".cards");
let submitBtn = document.querySelector(".submit-form");
let color = document.querySelector("#color");

// let country = document.querySelector("#country");
// let isDiscounted = document.querySelector("#isDiscounted");

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const product = {
        name: nameInput.value,
        price: priceInput.value,
        imageurl: imageInput.value,
        color: color.value
    }


    //reset inputs
    nameInput.value = ""
    priceInput.value = ""
    imageInput.value = ""
    color.value = ""

//Demeli formda yazdigimiz sheyleri card a atmaq ucun html den onu goturub cards wrapperin icinde innerhtmle yaziriq

    cardsWrapper.innerHTML += `
    <div class="col-4 mt-5">
    <div class="card" style="width: 18rem;">
      <img src="${product.imageurl}" class="card-img-top"
        alt="photo">
      <div class="card-body" style="background-color: ${product.color}">
        <h5 class="card-title">Product name: <span id="name-holder">${product.name}</span></h5>
        <p class="card-text">Prouduct price <span id="price-holder">${product.price}</span></p>
        <a href="#" class="btn btn-primary">Add</a>
      </div>
    </div>
  </div>
    `

})

nameInput.addEventListener("keyup", (e)=>{
    if(e.target.value.length<3){
        e.target.nextElementSibling.classList.replace("d-none","d-block");
        submitBtn.setAttribute("disabled","")
    }
    else{
        e.target.nextElementSibling.classList.replace("d-block","d-none")
        submitBtn.removeAttribute("disabled")
    }
})
