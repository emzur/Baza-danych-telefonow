function Telefon(marka, cena, kolor, obrazek) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
	this.obrazek = obrazek;
}

Telefon.prototype.printInfo = function() {
console.log("Marka telefonu to " + this.marka + ", kolor to " + 
	this.kolor + ", cena to " + this.cena + ",a obrazek to " + this.obrazek + ".");
}

var SamsungGalaxyS6 = new Telefon("Samsung", 3000, "czarny", "logo");
var iPhone6S = new Telefon("Apple", 2250, "srebrny", "logo");
var OnePlusOne = new Telefon("One", 4000, "biały", "logo");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();