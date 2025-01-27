console.log('test.js');
console.log('Hello');

function katt() {
    document.write('<h1>Függvény verzió!</h1>')
}

function katt2() {
    document.body.innerHTML = '<h1>Függvény - InnerHTML verzió!</h1>'
}

function kep_beilleszt() {
    document.getElementById('kep_helye').innerHTML = '<img src=https://www.w3schools.com/images/w3schools_green.jpg>'
}

function kep_torol() {
    document.getElementById('kep_helye').innerHTML = ''
}