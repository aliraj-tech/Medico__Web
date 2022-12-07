
// Cart Open / Close Function
var cart = document.getElementById("cart__items")
const cartBtn = document.getElementById("cart__btn")
cartBtn.addEventListener('click' , () => {
    cart.style.display = "block"
})

var cartCloseBtn = document.getElementById("cart__close")
cartCloseBtn.addEventListener("click" , () => {
    cart.style.display = "none"
})



