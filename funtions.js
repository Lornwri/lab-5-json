//Notes from lecture videos

function shout(text) {
    return text.toUpperCase() + '!!!';
}

console.log(shout('hello world'));
let message = shout('hello web programmers');
console.log(message);


function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9;
    if (decimalPlaces) {
        return celsius.toFixed(decimalPlaces);
    } else {
        return celsius;
    }
}

let todayTemp = 75;
todayCelsius = f_to_c(todayTemp, 4);
console.log("Today's temperature is " + todayCelsius + " degrees Celsius");