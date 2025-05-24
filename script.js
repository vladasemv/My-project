let input = document.querySelector(".form-control")
let btn = document.querySelector(".btn-search")
let form = document.getElementById("searchForm");
let cards = document.querySelectorAll(".card")
let btn_bye = document.querySelectorAll(".btn-bye")
let cart_counter = document.querySelector(".cart-counter")

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  let input_variable = input.value.trim().toLowerCase();
  cards.forEach(element => {
    if(input_variable != ""){
      if(element.querySelector('.name').textContent.toLowerCase().search(input_variable) == -1){
        element.style.display = "none"
      } else {
        element.style.display = "block"
      }
    } else {
      element.style.display = "block"
    }
  });
});

function goToCart(){
  window.location.href = 'corb_page1.html';
}

document.addEventListener("DOMContentLoaded", () => {
  let cart_counter = document.querySelector(".cart-counter");
  cart_counter.innerHTML = localStorage.getItem("count") || 0;

  let counter = +localStorage.getItem("count") || 0;

  window.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-cart")) {
      counter++;
      localStorage.setItem("count", counter);
      cart_counter.innerHTML = counter;

      let card = event.target.closest(".card")


      let product_info = {
          title: card.querySelector(".name").innerText,
          imgSrc: card.querySelector(".card-img").getAttribute("src"),
          desc: card.querySelector('.describtion').innerText,
          price: +card.querySelector('.price').innerText,
          id: card.querySelector('.id').innerText
      }

      // console.log(JSON.stringify(product_info))

      // localStorage.setItem("card", JSON.stringify(product_info));
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Додаємо новий товар до масиву
      cart.push(product_info);
  
      // Зберігаємо оновлений кошик у localStorage
      localStorage.setItem("cart", JSON.stringify(cart));    }
      localStorage.setItem("cart", JSON.stringify(cart));   
     }
  });
});
