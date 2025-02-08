const  faqQuestionContainerEl =document.querySelector(".faq__section--container")
const allArticle = document.querySelectorAll(".faq__section--answer")
faqQuestionContainerEl.addEventListener("click", function(e){
         const click = e.target.closest(".faq__section--button")
         console.log(click.dataset.tab)
         // allArticle.forEach(e=>e.classList.remove("faq__section--answer-active"))
         if (!click) return 
  click.classList.toggle("faq__section--button-minus")
         document.querySelector(`.faq__section--answer--${click.dataset.tab}`).classList.toggle("faq__section--answer-active")

})