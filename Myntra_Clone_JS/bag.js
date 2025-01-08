let bagItemObjects;

function loadBagItemObjects(){
    console.log(bagItems);
    bagItemObjects = bagItems.map(itemId =>{
        for(let i = 0 ; i < items.length ; i++){
            if(itemId == items[i].id){
                return items[i];
            }
        }
    })
    console.log(bagItemObjects);
    
}

function onLoad(){
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

function displayBagItems(){
    let containerElement = document.querySelector('.bag-items-container');
    let innerHtml = ``;
    bagItemObjects.forEach(item => {
        innerHtml += generateItemHTML(item);
    })
    containerElement.innerHTML = innerHtml;
}


function removeFromCart(itemid){
    bagItems = bagItems.filter(bagItemId => bagItemId != itemid);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagItems();
    displayBagIcon();
    displayBagSummary();
}

function generateItemHTML(item){
    return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(0% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period}</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromCart(${item.id})">X</div>
  </div>`
}

function displayBagSummary(){
    let bagSummaryElement = document.querySelector('.bag-summary');
    bagSummaryElement.innerHTML = `<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${bagItemObjects.length} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalMRP()} </span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs ${totalDiscount()}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${totalConvenience()}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${totalMRP() - totalDiscount() + totalConvenience() }</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;
}

function totalMRP(){
    let totalMrp = 0;
    bagItemObjects.forEach(item =>{
        totalMrp += item.original_price;
    });
    return totalMrp;
}

function totalDiscount(){
    let currentPrice = 0;
    bagItemObjects.forEach(item =>{currentPrice+=item.current_price});
    return totalMRP() - currentPrice;
}

function totalConvenience(){
    return bagItemObjects.length * 30 ;
}

onLoad();