const red = document.getElementById('red')
const orange = document.getElementById('orange')
const black = document.getElementById('black')
const button = document.querySelector('button')
const productimg = document.getElementsByTagName('img') [0];

red.addEventListener ('click',() => {
    button.style.backgroundColor = "red"
    productimg.setAttribute('src', 'https://i.postimg.cc/fb9LsZk2/image2.png')
}) 

orange.addEventListener ('click',() => {
    button.style.backgroundColor = "orange"
    productimg.setAttribute('src', 'https://i.postimg.cc/J0P7xzdn/image3.png')
}) 

black.addEventListener ('click',() => {
    button.style.backgroundColor = "black"
    productimg.setAttribute('src', 'https://i.postimg.cc/m2fSW2Dq/pngwing.png')
}) 
