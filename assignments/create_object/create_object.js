function CreateObject(arr) {
    // Write your code here
    let obj = {}
    let i = 0
    while (i < arr.length) {
        let key = arr[i]
        let value = arr[i + 1]
        obj[key] = value
        i=i+2
    }  
    return obj
}


module.exports = CreateObject;
