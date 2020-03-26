function sayHello() {
    console.log("Hellooo Thereeee!!!")
}

sayHello()


// Lightning Exercise
// I Love JavaScript
// Write a function that logs the string "I love JavaScript!" to the console.
// Call the function.

function Lightning() {
    console.log("I love JavaScript!")
}

// Lightning()



function greetAFriend(friendName) {
    console.log(`Hi ${friendName}, how are you?`)
}

var jordan = "Jordan"

greetAFriend("Devin")

greetAFriend("Dylan")

greetAFriend(jordan)


function goodMorning(timeOfDay, friendName){
    console.log(`Good ${timeOfDay} ${friendName}, how are you?`)
}

goodMorning("afternoon", "Mike")




// Lightning Exercise
// Dream Vacation
// Write a function that accepts two parameters of name and destination.
// The function should log a sentence to the console about where that person wants to go.
// Call the function three different times with different parameters. Example: if you pass in "Jessica" and "Mount Fuji" as parameters, you should see the sentence "Jessica would love to visit Mount Fuji." logged to the console.


function dreamVacation(destination, taco) {
    console.log(`${taco} would love to visit ${destination}`)
}

dreamVacation("Tommy", "couch")

var hi = "hellloooo"

function myPizza(crust, toppings, pickupOrDelivery) {
    var madePizza = `They want a ${crust} crust pizza with ${toppings} for ${pickupOrDelivery}.`
    return madePizza
}

console.log(hi)


// myPizza("thin", "mushrooms", "pick up")

var finishedPizza = myPizza("thin", "mushrooms", "pick up")

console.log(myPizza("thin", "mushrooms", "pick up"))



// // Taco Truck
// // Write a function to represent a taco truck's ordering system. The function should accept two parameters: typeOfShell and topping. (Both will be strings.)
// // Inside the function, use string interpolation to build a sentence that announces the taco is ready. Use the information the customer passed in. For example: "Your soft shell taco with chicken is ready!"
// // Return the taco sentence.
// // Execute the function.
// // Log the returned sentence to the console.

function tacoTruck(typeOfShell, topping){
    var itsReady = `Your ${typeOfShell} taco with ${topping} is ready!`
    return itsReady
}

var catchTheReturn = tacoTruck("hard shell", "beef")

console.log(tacoTruck("hard shell", "beef"))



var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];


function printRestaurants(singleRestaurant) {
    document.querySelector("#restaurants-list").innerHTML += `<li>${singleRestaurant}</li>`


}
for(var i = 0; i < downtownRestaurants.length; i++) {
 console.log(downtownRestaurants[i]);
 document.querySelector("#restaurants-list").innerHTML += `<li>${downtownRestaurants[i]}</li>`
}


