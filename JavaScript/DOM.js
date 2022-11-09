var para = document.getElementById("para1");
var p = document.getElementsByTagName("p");
var div = document.getElementsByClassName("hell")
var q = document.querySelector("p")   // return first occurence works like tagName
var qa = document.querySelectorAll("p")
console.log(para)
para.innerHTML = "hello"
para.style.color = "balck";
para.style.textAlign = "center"
para.style.backgroundColor = "red"
para.style.border = "2px solid black";
// para.className = "sachin"
// console.log(para)
// para.className = "sharma"
console.log(para)
p[1].innerHTML = '<h1>Hello</h1>'
var paraList = para.classList;
console.log(paraList)
paraList.add("sachin")
console.log(paraList)
paraList.add("sharma")
console.log(paraList)
var btn = document.getElementsByClassName("btn")[0];
console.log(btn)
var sideBar = para;
btn.onclick = () => {
    sideBar.style.display = "block"
}

const hello = () => {
    alert("This is CLick!!");
}
const ondb = () => {
    alert("This is blur!!");
}

// attributes

var link = document.getElementById("link");
link.href = "www.google.co.in"
link.target = "_blank"

// dom element remove and add
var delPara = p[1];
var d = div[0];
d.removeChild(delPara);

var d2 = div[1]
d2.style.height = '50px'
d2.style.width = '100vw'
d2.style.border = '2px solid green'

d2.innerHTML = '<h2>div 2</h2>'
var data = document.createElement('a')
data.href = "www.google.com"
data.innerText = "google"
d2.appendChild(data)


function clearText() {
    var username = document.getElementById("username");
    username.value = "";
}
function show(event) {
    console.log(event.target.value)
    console.log(`name: ${name}`)
}