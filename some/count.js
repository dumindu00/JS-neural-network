// Count to 8
// 5-10, 10-5

const trainingData = [
    [5,6,7,8,9,10],
    [10,9,8,7,6,5]
];

const net = new brain.recurrent.LSTMTimeStep();


net.train(trainingData)

console.log(net.run([5,6,7,8,9,]))
console.log(net.run([10,9,8,7,6,]))