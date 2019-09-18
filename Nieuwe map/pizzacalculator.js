//Koen van Wensen opdracht: Pizzacalculator
var pizzaSmall = prompt ("hoeveel small pizza's wilt u?","aantal"); // vraagt aantal Small Pizza's
var prijsSmall = 5.99; // geeft de prijs aan
document.write("Small Pizza: $", pizzaSmall*prijsSmall,"<br/>")
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
var pizzaMedium = prompt ("hoeveel Medium Pizza's wilt u?","aantal"); // vraagt aantal Medium Pizza's
var prijsMedium = 6.99; // geeft de prijs aan
document.write("Medium Pizza: $", pizzaMedium*prijsMedium,"<br/>")
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
var pizzaLarge = prompt ("hoeveel Large Pizza's wilt u?","aantal"); // vraagt aantal Large's Pizza's
var prijsLarge = 8.99; // geeft de prijs aan
document.write("Large Pizza: $", pizzaLarge*prijsLarge,"<br/>")
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
var totaalSmall = pizzaSmall*prijsSmall; //|
var totaalMedium = pizzaMedium*prijsMedium; //|> variable maken voor elke totaalprijs
var totaalLarge = pizzaLarge*prijsLarge; //|

document.write("Eindtotaal: $",totaalSmall+totaalMedium+totaalLarge); // De totaal prijs word hier uitgerekend
// hij doet het niet