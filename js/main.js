const menuUrl =
  "https://gist.githubusercontent.com/maratgaip/44060c688fcf5f2b7b3985a6d15fdb1d/raw/e93c3dce0826d08c8c6e779cb5e6d9512c8fdced/restaurant-menu.json";

const container = document.querySelector(".container");
const btn = document.querySelectorAll(".navBtn");

const fetchData = async () => {
  try {
    const response = await fetch(menuUrl);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
fetchData();
// fetchData().then((data) => console.log(data));
// (async () => {
//   const data = await fetchData();
//   console.log(data);
// })();

const showItemsOnUI = async () => {
  const data = await fetchData();
  console.log(data);

  //   let dataDisplay = data.map((item) => {
  //     const { title, img, desc, price } = item;
  //   });
  for (let item of data) {
    // create card
    const div = document.createElement("div");
    div.classList.add("card", item.category, "hide");
    const img = document.createElement("img");
    const itemName = document.createElement("h3");
    const price = document.createElement("span");
    const description = document.createElement("p");

    itemName.innerHTML = item.title;
    img.src = item.img;
    price.innerHTML = item.price;
    description.innerText = item.desc;
    div.appendChild(itemName);
    div.appendChild(img);
    div.appendChild(price);
    div.appendChild(description);
    container.appendChild(div);
  }
};

showItemsOnUI();
// parameter passed from button (parameter same as category )
function filterMenuItems(value) {
  let buttons = document.querySelectorAll(".navBtn");
  buttons.forEach((button) => {
    // check if value equals inner text
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // select all cards

  let elements = document.querySelectorAll(".card");
  // loop through all cards
  elements.forEach((element) => {
    // display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      // check if element contains category class
      if (element.classList.contains(value)) {
        // display element based on category
        element.classList.remove("hide");
      } else {
        // hide other elements
        element.classList.add("hide");
      }
    }
  });
}

// Initially dispaly ll products

window.onload = () => {
  filterMenuItems("all");
};
