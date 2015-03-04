$(function () {
  getLocalCartCount();
  var target = $(".item-body");
  var items = JSON.parse(localStorage.cartItems);
  _(items).each(function (item) {
    var text = '<tr class="good_body">' + '<td>' + item.type + '</td>'
      + '<td class="good_name">' + item.name + '</td>'
      + '<td>' + item.price+ '</td>'
      + '<td>' + item.unit + '</td>'
      +'<td><div class="btn-group"><button class="btn btn-default item-minus">-</button>\
            <button class="btn btn-default item-count" disabled="disabled">'+item.count +'</button>'
      +'<button class="btn btn-default item-add">+</button>'
      + '<td class="small_total">' +CartCounting.getItemTotal(item)+ '</td>'
      + '</tr>';
    target.append(text);
  });


  $(".item-add").bind("click", function () {

    CartCounting.refreshCart();
  });






});
