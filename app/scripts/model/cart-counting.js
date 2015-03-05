function CartCounting() {
}

CartCounting.getGiftItems = function (cartItems) {
  return _.filter(cartItems, function (item) {
    return item.freeCount != 0;
  });
};


CartCounting.getItemTotal = function (item) {
  if(item.freeFare == 0)
    return (item.count * item.price - item.freeFare) + '元';
  return (item.count * item.price - item.freeFare)+'元'+'(原价：'+item.price * item.count+'元)';
};

CartCounting.getCartTotal = function (cartItems) {
  return _.reduce(cartItems, function (sum, item) {
    return sum + item.count * item.price - item.freeFare;
  }, 0, this);
};

CartCounting.getGiftTotal = function (gitfItems) {
  return _.reduce(gitfItems, function (sum, item) {
    return sum + item.freeFare;
  }, 0, this);
};

CartCounting.refreshCartView = function (itemView, itemName) {
  //refresh cart count
  refreshLocalCartCount();

  //refresh total price
  var cartItems = JSON.parse(localStorage.cartItems);
  $("#cart-total").text(CartCounting.getCartTotal(cartItems)+"元");

  //refresh small total price
  if(itemView){
    var item = _.find(cartItems, function (item) {return item.name === itemName});
    itemView.find(".item-total").text(CartCounting.getItemTotal(item));
  }

};

CartCounting.refreshLocalStorage = function (itemName, btnType) {
  var totalCount = parseInt(localStorage.totalCount);
  var cartItems = JSON.parse(localStorage.cartItems);
  var item = _.find(cartItems, function (item) {return item.name === itemName});
  if(btnType === "add"){item.count++; totalCount++;}
  if(btnType === "minus"){item.count--;totalCount--;}
  if(item.promotion == true){Item.setFreeDomain(item);}
  localStorage.totalCount = totalCount;
  localStorage.cartItems = JSON.stringify(cartItems);
};
