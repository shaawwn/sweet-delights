

function removeAndAppend(array) {

    let toRemove = array.splice(0, 1)[0]
    
    array.push(toRemove)
    
    console.log(toRemove, array)
    return array
}


const array = [1, 2, 3, 4, 5]
removeAndAppend(array)
