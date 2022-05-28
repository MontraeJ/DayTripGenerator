 console.log ("Hello World");

//array of destinations
let listOfDestinations = ["San Marcos", "Austin", "Kerrville", "New Braunfels"];
let typesOfRestaurants = ["Chinese", "Italian", "Steak", "Vegan"];
let modesOfTransportation = ["Uber", "Train", "Car", "Bus"];
let formsOfEntertainment = ["Movies", "Tubing", "Karoke", "City Tour"];


function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice
}
function choiceGenerator(type, listOf){
  let random;
  // userIsHappy will determine if we continue looping through our "while" loop
  let userIsHappy = false
  // Since userIsHappy equals false by default, it will AUTOMATICALLY  enter into this while loop
  while(userIsHappy === false){
    // randomDestination will "catch" whatever value is RETURNED from the randomGenerator function
      random = randomGenerator(listOf)

      let userResponse = prompt(`Your randomly generated ${type} is ${random}. Are you okay with that?`)

      if(userResponse.toLowerCase() === 'yes'){
        alert(`Enjoy ${random}`)
        // Since the "while" loop only runs if userIsHappy is false, as soon as it sees that its switched to "true", it will end the loop
        userIsHappy = true
      }else if(userResponse.toLowerCase() === 'no'){
        userIsHappy = false
      }
  }
  return random
}
let destinationChoice = choiceGenerator("destination", listOfDestinations)
let restaurantChoice = choiceGenerator("restaurant", typesOfRestaurants)

let randomDestination
let randomRestaurant
let randomTransportation
let randomEntertainment




//array of modes of transportation



function transportationGenerator(){
  
    let userIsHappy = false
  
    while(userIsHappy === false){
        randomTransportation = randomGenerator(modesOfTransportation)
  
        let userResponse = prompt(`Your mode of transportation is ${randomTransportation}. Are you okay with that?`)
  
        if(userResponse.toLowerCase() === 'yes'){
          alert(`Enjoy your ${randomTransportation}`)
         
          userIsHappy = true
        }else if(userResponse.toLowerCase() === 'no'){
          userIsHappy = false
        }
    }
  }
  
  transportationGenerator()


  //array forms of entertainment



function entertainmentGenerator(){
  
    let userIsHappy = false
  
    while(userIsHappy === false){
        randomEntertainment = randomGenerator(formsOfEntertainment)
  
        let userResponse = prompt(`Your form of entertainment is ${randomEntertainment}. Are you ready for that?`)
  
        if(userResponse.toLowerCase() === 'yes'){
          alert(`Enjoy your ${randomEntertainment}`)
         
          userIsHappy = true
        }else if(userResponse.toLowerCase() === 'no'){
          userIsHappy = false
        }
    }
  }
  
  entertainmentGenerator()

  console.log(`${randomDestination}/${randomRestaurant}/${randomTransportation}/${randomEntertainment}`)
  //array dayTripGenerator



// function destinationChecker(destinationList){
//   let user_choice =  prompt("Select your destination")
//   for (let index = 0; index < destinationList.length; index++) {
//     if (destinationList[index] === user_choice){
//         console.log ("You found a destination")
//     }
//   }
// }
// destinationChecker(destination)

// let restaurant = []
// restaurant.push ["Chinese", "Italian", "Steak", "Vegan"];

// let transportation = []
// transportation.push ["Uber", "Train", "Car", "Bus"];

// let entertainment
// entertainment.push ["Movies", "Tubing", "Karoke", "City Tour"];

// let destination = []
// destination.push ["San Marcos", "Austin", "Kerrville", "New Braunfels"];