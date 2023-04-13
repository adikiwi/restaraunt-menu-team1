function FoodData(name,picNum,price,type){
    this.name = name;
    this.picNum = `../images/item-${picNum}.jpeg`;
    this.price = price;
    this.type = type;
    this.description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel unde aut fugit vitae obcaecati hic recusandae libero molestiae maiores!";
    this.priceAdd = function priceAdd(){
        cost.innerHTML = 'asdf'
    }

}


const butterMilkPncks = new FoodData('Buttermilk Pancakes',1,15.99,'lunch');
const dinerDouble = new FoodData('Diner Double',2,13.99,'Dinner');
const godzillaMlkshk = new FoodData('Godzilla Milkshake',3 ,6.99,'Shake');
const countryDelight = new FoodData('Country Delight',4 ,20.99,'breakfast');
const eggAttck = new FoodData('Egg Attack',5 ,22.99, 'lunch');
const oreoDream = new FoodData('Oreo Dream',6 ,19.99,'shakes');
const bOverflow = new FoodData('B overflow',7 ,8.99, 'breakfast');
const americanChsbrgr = new FoodData('American Classic',8,12.99,'lunch');
const quarantineBud = new FoodData('Quarantine Buddy',9 ,16.99,'shake');
const steakDinner = new FoodData('Steak Dinner',10 ,39.99,'Dinner');

const array = [butterMilkPncks,dinerDouble,godzillaMlkshk,countryDelight,eggAttck,oreoDream,bOverflow,americanChsbrgr,quarantineBud,steakDinner]

const menu = document.querySelector('menu');

function clear(){
    while(menu.firstChild){
        menu.removeChild(menu.firstChild);
    }
}

function displayOnUI(array){
    clear()
    
    array.forEach(el=>{
        let div = document.createElement('div');
        div.classList.add('dish')
        menu.appendChild(div);

        let img = document.createElement('img');
        img.src = el.picNum;
        div.appendChild(img);

        
        let descr = document.createElement('div')
        descr.innerHTML = `
        <span><h3>${el.name}</h3>
        <p>${el.description}</p>
        
        </span> <span><h3 class = "price">${el.price}</h3></span>
        `
        div.appendChild(descr);
    })
    showPrice();
}
displayOnUI(array)

function filter(word){
    clear()
    const newArr = [];
    array.forEach(el=> {
        if(el.type == word){
            newArr.push(el);
        }
    })
    console.log(newArr)
    displayOnUI(newArr)
    showPrice()
}
//////////////////////////////////////////////////////////////////

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cartBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
const content = document.querySelector(".namesOfDishes")
btn.onclick = function() {
  modal.style.display = "block";
  
  content.innerHTML = `${costArr.map(el=>{
    console.log(el)
    return `
    <li>${el}</li>  <br>
    `
    
  }).join('')}`
  
  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

////////////////////////////////////////////////////////////////////

let cost = 0;
let costArr = [];
function showPrice(){
let total = document.querySelector('#total')

const img = document.getElementsByTagName('img')
const imgArray = Array.from(img);



imgArray.forEach((el,i) => {
    el.addEventListener('click',()=>{
    cost += array[i].price
    costArr.push(array[i].name)
    total.innerHTML = `Total: ${cost}`
    console.log(costArr)
    
})
})
}



let reset = document.querySelector('.reset')
reset.addEventListener('click',()=>{
    console.log('asdf')
    cost = 0
    total.innerHTML = `Total: 0`
    content.innerHTML = ''
    costArr=[];
})
showPrice();