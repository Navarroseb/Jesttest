
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.58 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(3.5)
    const expected = 3.5 * 106.58; 
    expect(fromDollarToYen(3.5)).toBe(373.04); 
})

test("One yen should be 0.006 pound", function(){
    const { fromYentoPound } = require('./app.js')
    const pound = fromYentoPound(3.5)
    const expected = 3.5 * 0.006; 
    expect(fromYentoPound(3.5)).toBe(0.022); 
})
