const menuUrl = "https://gist.githubusercontent.com/maratgaip/44060c688fcf5f2b7b3985a6d15fdb1d/raw/e93c3dce0826d08c8c6e779cb5e6d9512c8fdced/restaurant-menu.json";

const fetchData = async () => {
  try {
    const response = await fetch(menuUrl);
    const data = await response.json();
    console.log(data, ' Food Data');
  
  } catch (err) {
    console.log(err);
  }
}
fetchData();


function showItemsOnUI(data){
  
   for (let item of data) {
    const div = document.createElement("div");
    div.classList.add("card", item.category, "hide");
    const img = document.createElement("img");
    const itemName = document.createElement("h3");
    const price = document.createElement("span");
    const description = document.createElement("p");

    itemName.innerHTML = item.title;
    img.src = item.img;
    price.innerHTML = item.price;
    description.innerText = item.description;
    div.appendChild(itemName);
    div.appendChild(img);
    div.appendChild(price);
    div.appendChild(description);
    container.appendChild(div);
  }
};
showItemsOnUI();
