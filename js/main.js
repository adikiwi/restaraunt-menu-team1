const apiUrl = "https://gist.githubusercontent.com/maratgaip/44060c688fcf5f2b7b3985a6d15fdb1d/raw/e93c3dce0826d08c8c6e779cb5e6d9512c8fdced/restaurant-menu.json"

const divContainer = document.querySelector(".container")

function getData() {
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item) => {
            // the front part of the card
            const divCardContainer = document.createElement("div")
            const divCard = document.createElement("div")
            const foodTitle = document.createElement("h2")
            const frontCard = document.createElement("div")
            const foodPrice = document.createElement("h2")
            const cardImg = document.createElement("img")
            const namePrice = document.createElement("div")
            namePrice.classList.add("name-price")
            divCardContainer.classList.add("card-container")
            frontCard.classList.add("front")
            divCard.classList.add("card")
            foodTitle.classList.add("food-title")
            divContainer.appendChild(divCardContainer)
            divCardContainer.appendChild(divCard)
            divCard.appendChild(frontCard)
            frontCard.appendChild(cardImg)
            // frontCard.appendChild(foodTitle)
            namePrice.appendChild(foodTitle)
            namePrice.appendChild(foodPrice)

            foodPrice.innerHTML = `$${item.price}`
            cardImg.src = item.img
            // console.log(item)
            foodTitle.innerHTML = item.title
            
            frontCard.appendChild(namePrice)

            // The back part of the card
            const backOfCard = document.createElement("div")
            const backCardContent = document.createElement("div")
            const leftContent = document.createElement("div")
            const description = document.createElement("p")
            backOfCard.classList.add("back")
            backCardContent.classList.add("back-content")
            leftContent.classList.add("left")
            description.classList.add("description")
            leftContent.appendChild(description)
            backCardContent.appendChild(leftContent)
            backOfCard.appendChild(backCardContent)
            divCard.appendChild(backOfCard)
            description.innerHTML = item.desc

            const price = document.createElement("span")
            backOfCard.appendChild(price)
            price.innerHTML = `$${item.price}`


            divCard.addEventListener("click", function() {
                console.log("CLICK")
                divCard.classList.toggle('flip')
              })
        })
    })
}
getData()

function clear() {
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild)
    }
}

const btnAll = document.querySelector(".btn-all")

btnAll.addEventListener("click", (event) => {
    event.preventDefault()
    clear()
    getData()
})


const btnBreakfast = document.querySelector(".btn-breakfast")

btnBreakfast.addEventListener("click", (event) => {
    event.preventDefault()
    clear()
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item) => {
            if(item.category === "breakfast") {
            const divCardContainer = document.createElement("div")
            const divCard = document.createElement("div")
            const foodTitle = document.createElement("h2")
            const frontCard = document.createElement("div")
            const cardImg = document.createElement("img")
            divCardContainer.classList.add("card-container")
            frontCard.classList.add("front")
            divCard.classList.add("card")
            foodTitle.classList.add("food-title")
            divContainer.appendChild(divCardContainer)
            divCardContainer.appendChild(divCard)
            divCard.appendChild(frontCard)
            frontCard.appendChild(cardImg)
            frontCard.appendChild(foodTitle)
            cardImg.src = item.img
            foodTitle.innerHTML = item.title
            }
        })
    })
})

const btnLunch = document.querySelector(".btn-lunch")

btnLunch.addEventListener("click", (event) => {
    event.preventDefault()
    clear()
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item) => {
            if(item.category === "lunch") {
            const divCardContainer = document.createElement("div")
            const divCard = document.createElement("div")
            const foodTitle = document.createElement("h2")
            const frontCard = document.createElement("div")
            const cardImg = document.createElement("img")
            divCardContainer.classList.add("card-container")
            frontCard.classList.add("front")
            divCard.classList.add("card")
            foodTitle.classList.add("food-title")
            divContainer.appendChild(divCardContainer)
            divCardContainer.appendChild(divCard)
            divCard.appendChild(frontCard)
            frontCard.appendChild(cardImg)
            frontCard.appendChild(foodTitle)
            cardImg.src = item.img
            foodTitle.innerHTML = item.title
            }
        })
    })
})

const btnDinner = document.querySelector(".btn-dinner")

btnDinner.addEventListener("click", (event) => {
    event.preventDefault()
    clear()
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item) => {
            if(item.category === "dinner") {
            const divCardContainer = document.createElement("div")
            const divCard = document.createElement("div")
            const foodTitle = document.createElement("h2")
            const frontCard = document.createElement("div")
            const cardImg = document.createElement("img")
            divCardContainer.classList.add("card-container")
            frontCard.classList.add("front")
            divCard.classList.add("card")
            foodTitle.classList.add("food-title")
            divContainer.appendChild(divCardContainer)
            divCardContainer.appendChild(divCard)
            divCard.appendChild(frontCard)
            frontCard.appendChild(cardImg)
            frontCard.appendChild(foodTitle)
            cardImg.src = item.img
            foodTitle.innerHTML = item.title
            }
        })
    })
})

const btnShakes = document.querySelector(".btn-shakes")

btnShakes.addEventListener("click", (event) => {
    event.preventDefault()
    clear()
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item) => {
            if(item.category === "shakes") {
            const divCardContainer = document.createElement("div")
            const divCard = document.createElement("div")
            const foodTitle = document.createElement("h2")
            const frontCard = document.createElement("div")
            const cardImg = document.createElement("img")
            divCardContainer.classList.add("card-container")
            frontCard.classList.add("front")
            divCard.classList.add("card")
            foodTitle.classList.add("food-title")
            divContainer.appendChild(divCardContainer)
            divCardContainer.appendChild(divCard)
            divCard.appendChild(frontCard)
            frontCard.appendChild(cardImg)
            frontCard.appendChild(foodTitle)
            cardImg.src = item.img
            foodTitle.innerHTML = item.title
            }
        })
    })
})

const cards = document.querySelectorAll('.card');
const arrayOfCards = Array.from(cards)
console.log(arrayOfCards)

//For each card filp the card on click
cards.forEach(card => {
  card.addEventListener('click', function() {
    console.log("CLICK")
    card.classList.toggle('flip')
  })
})
