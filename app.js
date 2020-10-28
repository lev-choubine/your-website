const shaker = document.getElementById('shaker');
const glass = document.getElementById('glass');
const barspoon = document.getElementById('barspoon');
const strainer = document.getElementById('strainer');
const jigger = document.getElementById('jigger');
const screen = document.querySelector('.screen');
//////////////////////////////////////////////////
shaker.addEventListener('mouseover', function(){
    screen.style.backgroundImage="url('https://cdn11.bigcommerce.com/s-cznxq08r7/images/stencil/1280x1280/products/825/5346/crfths.5.1009__62148.1590769846.jpg?c=1')";

})

shaker.addEventListener('mouseout', function(){
    screen.style.backgroundImage="none";

})
//////////////////////////////////////////////////
glass.addEventListener('mouseover', function(){
    screen.style.backgroundImage="url('https://www.cocktailkingdom.com/media/catalog/product/cache/1/image/364x/040ec09b1e35df139433887a97daa66f/m/x/mxg_yaraimixix_0000_jap_web1_1_1.jpg')";

})

glass.addEventListener('mouseout', function(){
    screen.style.backgroundImage="none";

})
//////////////////////////////////////////////////
barspoon.addEventListener('mouseover', function(){
    screen.style.backgroundImage="url('https://images-na.ssl-images-amazon.com/images/I/61zJuHF7SGL._AC_SL1500_.jpg')";

})

barspoon.addEventListener('mouseout', function(){
    screen.style.backgroundImage="none";

})
//////////////////////////////////////////////////
strainer.addEventListener('mouseover', function(){
    screen.style.backgroundImage="url('https://www.oxo.com/media/catalog/product/cache/c1ec3133c42ea2566566913f36920cb6/1/0/1058016V1.jpg')";

})

strainer.addEventListener('mouseout', function(){
    screen.style.backgroundImage="none";

})
//////////////////////////////////////////////////
jigger.addEventListener('mouseover', function(){
    screen.style.backgroundImage="url('https://www.cocktailkingdom.com/media/catalog/product/cache/1/image/364x/040ec09b1e35df139433887a97daa66f/c/k/ck_leob_1-2oz-ss_web1.jpg')";

})

jigger.addEventListener('mouseout', function(){
    screen.style.backgroundImage="none";

})
//////////////////////////////////////////////////

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');

one.addEventListener('click', function () {
    window.open('https://www.cocktailkingdom.com/all-barware/shakers?___store=default&UseLoc=US');
}) 

two.addEventListener('click', function () {
    window.open('https://www.cocktailkingdom.com/sokata-mixing-glass-675ml');
}) 

three.addEventListener('click', function () {
    window.open('https://www.cocktailkingdom.com/all-barware/barspoons');
}) 

four.addEventListener('click', function () {
    window.open('https://www.cocktailkingdom.com/all-barware/strainers');
}) 

five.addEventListener('click', function () {
    window.open('https://www.cocktailkingdom.com/all-barware/jiggers');
}) 

const footer = document.createElement('footer');
const br=document.createElement('br');
footer.innerText ="m a d e  B y  l e v  C h o u b i n e";
const body =document.querySelector('body');
body.appendChild(footer);
const form = document.createElement('form');
footer.appendChild(form);
const input1=document.createElement('input');
const label=document.createElement('label');
const input2=document.createElement('input');
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(br);
form.appendChild(label);
label.setAttribute('for','name');
input2.setAttribute('type','submit')
input2.setAttribute('value','submit')
input1.setAttribute('id','name')
input1.setAttribute('name','name')
label.innerText="Tell Us What Your Favorite Drink Is";

