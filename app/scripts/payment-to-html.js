$(function () {
  refreshLocalCartCount();
  $("#pay-date").text(getDateTime());
  var target = $(".item-body");
  var cartItems = JSON.parse(localStorage.cartItems);
  _(cartItems).forEach(function (item) {
    var text = '<tr class="item-body">' +
          '<td>' + item.type + '</td>' +
          '<td>' + item.name + '</td>' +
          '<td>' + item.price + '</td>' +
          '<td>' + item.unit + '</td>' +
          '<td>' + item.count + '</td>' +
          '<td class="item-total">' +CartCounting.getItemTotal(item)+ '</td>' +
          '</tr>';
    target.append(text);
  });

  var giftTarget = $(".gift-body");
  var giftItems = CartCounting.getGiftItems(cartItems);
  _(giftItems).forEach(function (gift) {
    var giftText = '<tr>' +
      '<td>' + gift.type + '</td>' +
      '<td>' + gift.name + '</td>' +
      '<td>' + gift.freeCount + '</td>' +
      '</tr>';
    giftTarget.append(giftText);
  });

  $("#cart-total").text(CartCounting.getCartTotal(cartItems).toFixed(2)+'元');
  $("#gift-total").text(CartCounting.getGiftTotal(giftItems).toFixed(2)+'元');

  $("#cart-confirm").bind("click", function () {
    localStorage.clear();
  });

});


function getDateTime(){
  return moment().format('YYYY年MM月DD日 HH:mm:ss');
}

