

// let item = {
//     item_image: 'images/1.jpg',
//     rating: {
//         rating:{
//             stars: 4.5,
//             no_of_reviews: 1400,
//         },
//     },
//     company_name:'Carlton London',
//     item_name: 'Rhodium-Plated CZ Floral Studs',
//     current_price: 'Rs 606',
//     original_price: 'Rs 1045',
//     discount: '(42% OFF)',

// };

// instead of this we will take an array of objects

let itemsInCartCount = 0;
let bagItems;
onLoad();

function onLoad() {
  console.log("Inside log at start");
  let bagItemsStr = localStorage.getItem("bagItems");
//   console.log("Value of bagItemsStr:", bagItemsStr);
  try {
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    // console.log(bagItems);
  } catch (error) {
    console.log(error);
  }
  displayItemsOnHomePage();
  displayBagIcon();
}

function addtoBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  itemsInCartCount++;
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemElement.style.visibility = "visible";
    bagItemElement.textContent = `${bagItems.length}`;
  } else {
    bagItemElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector(".items-container");
    let innerHtml = ``;

    if(!itemsContainerElement){
        return; 
    }

  items.forEach((item) => {
    innerHtml += `<div class="item-container">
                <img class="item-image" src="${item.image}" alt="">
                <div class="rating"> ${item.rating.stars}⭐| ${item.rating.count}</div>
                <div class="company-name">${item.company}</div>
                <div class="item-name"> 
                    ${item.item_name},
                </div>
                <div class="price">
                    <span class="current-price"> Rs${item.current_price}</span>
                    <span class="original-price">RS${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}%OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addtoBag(${item.id});" >Add to Bag</button>
            </div>`;
  });
  itemsContainerElement.innerHTML = innerHtml;
}

console.log("script");

// localStorage.clear();
