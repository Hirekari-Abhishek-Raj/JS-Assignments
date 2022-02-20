var btn = document.querySelector("button")
var btn1 = document.querySelector("#f")
fetch('https://jsonplaceholder.typicode.com/todos').then(function (data) {
    console.log(data)
    return data.json()
}).then(function (data) {
    btn.addEventListener('click', function () {
        for (i = 0; i < 100; i++) {
            if (data[i].completed === true) {
                const para = document.createElement('p')
                const out = data[i].title
                para.textContent = out
                document.getElementById("root").append(para)
            }
        }
    })
    btn1.addEventListener('click', function () {
        for (i = 0; i < 100; i++) {
            if (data[i].completed === false) {
                const para = document.createElement('p')
                const out = data[i].title
                para.textContent = out
                document.getElementById("root").append(para)
            }
        }
    })
})