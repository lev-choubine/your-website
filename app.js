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