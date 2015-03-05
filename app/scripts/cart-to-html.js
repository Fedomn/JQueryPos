$(function () {
  //refreshLocalCartCount();
  CartCounting.refreshCartView();

  var target = $(".cart-body");
  var items = JSON.parse(localStorage.cartItems);
  _(items).forEach(function (item) {
    var text =
        '<tr class="item-body">' + '<td>' + item.type + '</td>'
      + '<td class="item-name">' + item.name + '</td>'
      + '<td>' + item.price+ '</td>'
      + '<td>' + item.unit + '</td>'
      + '<td><div class="btn-group">\
          <button class="btn btn-default item-minus">-</button>\
          <button class="btn btn-default item-count" disabled="disabled">'+item.count +'</button>'
      + '<button class="btn btn-default item-add">+</button>'
      + '<td class="item-total">' +CartCounting.getItemTotal(item)+ '</td>'
      + '</tr>';
    target.append(text);
  });


  $(".item-add").bind("click", function () {
    btnControler(this, "add");
  });

  $(".item-minus").bind("click", function () {
    btnControler(this, "minus");
  });

  function btnControler(view, btnType){
    var itemView = $(view).closest(".item-body");
    var itemName = $(view).closest(".item-body").find(".item-name").text();
    var itemCountView = $(view).closest(".item-body").find(".item-count");
    if(btnType === "add"){
      itemCountView.text(parseInt(itemCountView.text())+1);
    }
    if(btnType === "minus"){
      if(parseInt(itemCountView.text()) == 0) return;
      itemCountView.text(parseInt(itemCountView.text())-1);
    }
    CartCounting.refreshLocalStorage(itemName, btnType);
    CartCounting.refreshCartView(itemView, itemName);
  }

});
