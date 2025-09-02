// rawData = [{ open: number, high: number, low: number, close: number }]





function scaleDown(step) {
    return {
        open: step.open / 150,
        high: step.high / 150,
        low: step.low / 150,
        close: step.close /150
    };
}


function scaleUp(step) {
    return {
        open: step.open * 150,
        high: step.high * 150,
        low: step.low * 150,
        close: step.close * 150
    }
}

const scaledData = rawData.map(scaleDown);

const trainingData = [
    scaledData.slice(0, 5),
    scaledData.slice(5, 9),

]


const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 4,
    hiddenLayers: [8, 8],
    outputSize: 4
})

net.train(trainingData, { 
    learningRate: 0.005, 
    errorThresh: 0.02, 
    // log: (stats) => console.log(stats)
})


// console.log(scaleUp(net.run(trainingData[0])))

console.log(net.forecast([
    trainingData[0][0],
    trainingData[0][1],
], 3).map(scaleUp))