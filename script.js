function makeSandwich(ingredients) {
    //get the bread
    //get a knife
    //for every ingredient, do the following
        //grab that ingredient
        //open ingredient's packaging
        //put it on the sandwich
    //cut sandwich in half
    //return sandwich

}

makeSandwich(["peanut butter","jelly"]);
makeSandwich();


// Pythagorean Theorem
// a squared + b squared = c squared

function add( a , b){
    return a + b;
}

function square(a){
    return a * a;
}

function calcPythag(a , b){
    return add( square(a), square (b));
}

console.log(calcPythag(3, 4));

//custom for each function
// this takes an array of things and performs some action on everything in that list
function forEvery (list, action){
    // loop (iterate) over everything in the list
    for(let i=0; i < list.length; i++){

        console.log(list[i]);

    }
}

forEvery([3, 15, 2, -4, 4, 14]);
