$(document).ready(function () {
  localStorage.getItem('totalCount') || (localStorage.totalCount = JSON.stringify(0));
  localStorage.getItem('cartItems') || (localStorage.cartItems = JSON.stringify({}));
  refreshLocalCartCount();
});
