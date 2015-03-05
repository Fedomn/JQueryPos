function Item(barcode, name, unit, price, type) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
    this.type = type;
    this.count = 0;
    this.promotion = false;
    this.freeCount = 0;
    this.freeFare = 0;
}

Item.setFreeCount = function (item) {
  item.freeCount = Math.floor(item.count / 3);
};

Item.setFreeFare = function (item) {
  item.freeFare = item.freeCount * item.price;
};

Item.setFreeDomain = function (item) {
    this.setFreeCount(item);
    this.setFreeFare(item);
};
