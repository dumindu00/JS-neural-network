const trainingData = [
    { input: { blue: 1 }, output: [1] },
    { input: { red: 1 }, output: [1] },
    { input: { black: 1 }, output: [0] },
    { input: { green: 1 }, output: [0] },
    { input: { brown: 1 }, output: [0]}
]


const net = new brain.NeuralNetwork();

net.train(trainingData)

console.log('before preference change')
console.log(Array.from(net.run({ blue: 1 })))
console.log(Array.from(net.run({ brown: 1 })))

trainingData.push(
    { input: { brown: 1 }, output: [1]}
);

console.log('after preference change')
net.train(trainingData)
console.log(Array.from(net.run({ blue: 1 })))
console.log(Array.from(net.run({ brown: 1 })))