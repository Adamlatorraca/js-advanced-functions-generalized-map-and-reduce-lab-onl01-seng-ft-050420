// Add your functions here
const map = function(sourceArray, callback) {
    let mapped = []
    sourceArray.forEach((element) => {
        mapped.push(callback(element))
    })
    return mapped
}

const reduce = function(sourceArray, reducer, init = sourceArray[0]) {
    let total = init
    if (total != sourceArray[0]) {
        sourceArray.forEach((element) => {
            total = reducer(element, total)
        })
    } else {
        for (let i = 1; i < sourceArray.length; i++) {
            total = reducer(sourceArray[i], total)
        }
    }
    return total
}
