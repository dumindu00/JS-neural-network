// const trainingData = [
//     'Jane saw Doug',
//     'Doug saw Jane',
//     'Spot saw and Jane looking at each other.',
//     'It was love at first sight, and Spot had A front row seat. It was a very special moment for all.'
// ];

// const net = new brain.recurrent.LSTM();
// net.train(trainingData, {
//     iterations: 1500,
//     errorThresh: 0.011
// })

// console.log(net.run('Jane'))
// console.log(net.run('It was'))


const trainingData = [
    { input: 'I am super happy!', output: 'happy' },
    { input: 'What a pill!', output: 'sarcastic' },
    { input: 'I am super unhappy!', output: 'sad' },
    { input: 'Are we there yet!', output: 'excited' }
]

const net = new brain.recurrent.LSTM();
net.train(trainingData, {
    iterations: 100,
    errorThresh: 0.011
});

console.log(net.run('I am unhappy!'))
console.log(net.run('What a pill!'))