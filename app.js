let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * oneEuroIs.JPY / oneEuroIs.USD;
    return Number(valueInYen.toFixed(2));
}
const fromYentoPound = function(valueInYen){
    let valueInPound = valueInYen *  oneEuroIs.GBP / oneEuroIs.JPY;
    return Number(valueInPound.toFixed(3));
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {fromEuroToDollar,fromDollarToYen,fromYentoPound};