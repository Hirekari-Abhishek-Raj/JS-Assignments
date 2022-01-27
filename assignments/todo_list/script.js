var txt = document.querySelector("input");
var btn = document.querySelector("button");
var list = document.querySelector('.todos');
var count = 0;
btn.addEventListener('click', function () {
    var data = txt.value;
    var para = document.createElement("p");
    para.setAttribute("key", count);
    para.append(data);
    list.append(para);
    txt.value = "";
    count = count + 1
    para.addEventListener('click', function () {
        para.remove()
    })
})