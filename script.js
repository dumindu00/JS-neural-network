async function doSome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const youDone = true
            if(youDone) {
                    resolve("ok")
            }
            else {
                reject("fuck")
            }
        },2000)
    })
}

document.addEventListener("click", async () => {
    try {
        const result = await doSomethingAsync();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
})