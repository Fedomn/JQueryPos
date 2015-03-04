//$(document).ready(function () {
$(function () {
  getLocalCartCount();
  var items = loadAllItems();
  _.forEach(items, function (item) {
    var addBtn = '<button class="btn btn-primary btn-sm">加入购物车</button>';
    var listItem = '<tr class="item-list" data-barcode="' + item.barcode + '">\
                            <td>' + item.type + '</td>\
                            <td class="item-name">' + item.name + '</td>\
                            <td>' + item.price + '</td>\
                            <td>'+ item.unit +'</td>\
                            <td>' + addBtn + '</td>\
                          </tr>';
    $("#item-table").append(listItem);
  });

  $(".item-list").bind("click", function () {
    var cartCount = $("#cart-count");
    var totalCount = parseInt(localStorage.getItem('totalCount'));
    totalCount++;
    localStorage.setItem('totalCount', totalCount);
    cartCount.text(totalCount);

    //count item num
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
    var itemBarcode = $(this).attr("data-barcode");
    _.find(items, function (item) { return item.barcode === itemBarcode; }).count++;
    //count promotion item free domain
    var promotions = loadPromotions()[0];
    _.times(promotions.barcodes.length, function (index) {
      _.find(items, function(item){return item.barcode===promotions.barcodes[index]}).setFreeDomain();
    });

    localStorage.cartItems = JSON.stringify(items);
  });

});
