const restaurants = {
    "Hope In! Food Is On The Table":"Monday",
    "Samson's":"Tuesday",
    "Café De Italia":"Wednesday",
    "The Hungry Boe":"Thursday",
    "Fun Day Inn":"Friday",
    "Bahai Food":"Saturday",
    "Eat More":"Sunday"
}


// input : { Monday, Tuesday, Wednesday, etc. }
// output : { Restaurant1, Restaurant2 ... }

const trainingData = [];

for (let restaurantName in restaurants) {
    const dayOfWeek = restaurants[restaurantName];
    trainingData.push({
        input: { [dayOfWeek]: 1 },
        output: { [restaurantName]: 1 }
    })
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData)

console.log(stats)


console.log(net.run({ 'Thursday': 1 }))


function restaurantForDay(dayOfWeek) {
    const result = net.run({ [dayOfWeek]: 1 });
    let highestValue = 0;
    let highestRestaurantName = '';
    for (let restaurantName in result) {
        if (result[restaurantName] > highestValue) {
            highestValue = result[restaurantName];
            highestRestaurantName = restaurantName;
        }
    }
    return highestRestaurantName;
}

console.log(restaurantForDay('Monday'))
console.log(restaurantForDay('Tuesday'))
console.log(restaurantForDay('Wednesday'))
console.log(restaurantForDay('Thursday'))
console.log(restaurantForDay('Friday'))
console.log(restaurantForDay('Saturday'))
console.log(restaurantForDay("Sunday"))