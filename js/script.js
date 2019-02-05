
function Phone(brand, price, color, screenSize) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.screenSize = screenSize;
}

Phone.prototype.printInfo = function() {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color +  ' the price is '  + this.price + ' and the screen size is ' + this.screenSize + '.');
}

var iPhone6S = new Phone('Apple', 2250, 'silver', '5.5' );
var samsungGalaxyS6 = new Phone('Samsung', 2000, 'black', '6');
var huaweiP20Pro = new Phone('Huawei', 1500, 'gold', '5');
var sonyXperiaXz3 = new Phone('Sony', 3000, 'white', '5.3');
var lgG7 = new Phone('LG', 2400, 'red', '5.1');

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
huaweiP20Pro.printInfo();
sonyXperiaXz3.printInfo();
lgG7.printInfo();
