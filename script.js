const zero = document.querySelector('.zero')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const mult = document.querySelector('.multiply')
const devi = document.querySelector('.devide')
const equal = document.querySelector('.equal')
const show = document.querySelector('.show')
const erase = document.querySelector('.C')
const p = document.querySelector('p')
const btn = document.querySelectorAll('button')
const btnCon = document.querySelector('.btncontainer')


const add = function(n1, n2) {return n1+n2 }
const substract = function(n1, n2) {return n1-n2}
const multiply = function(n1, n2) {return n1*n2}
const devide = function(n1, n2) {return n1/n2}

let n1 = ''
let n2 = ''
let op = ''
let currn = 0
let hasError = false

const operate = function(n1, n2, op){
    n1 = Number(n1)
    n2 = Number(n2)
    if(op == '+') return add(n1,n2)
    else if(op =='-') return substract(n1,n2)
    else if(op=='*') return multiply(n1,n2)
    else if(op =='/') return devide(n1,n2)
}
const reset = function (){
    if(op !='' && n2 != '') {
    n1 = Number(n1)
    n2 = Number(n2)
    let currn = operate(n1, n2, op)
    show.textContent = ''
    n1 = currn
    n2 = ''    
    show.insertAdjacentText('beforeend', n1)
}}

const dic = function (n){
    if(n%1 != 0){
        n = n.toFixed(2)
    }
    return n
}


btnCon.addEventListener('click' , e => {
    if( hasError == true && e.target != equal){
        n1 = ''
        n2 = ''
        op = ''
        p.style.color = 'black'
        show.textContent = ''
        hasError = false
}})
zero.addEventListener('click', e => {
    if(op == '') n1 = n1+'0'
    else n2 = n2 + '0'
    show.insertAdjacentText('beforeend', '0')})
one.addEventListener('click', e => {
    if(op == '') n1 = n1+'1'
    else n2 = n2 + '1'
    show.insertAdjacentText('beforeend', '1')})
two.addEventListener('click', e => {
    if(op == '') n1 = n1+'2'
    else n2 = n2 + '2'
    show.insertAdjacentText('beforeend', '2')})
three.addEventListener('click', e => {
    if(op == '') n1 = n1+'3'
    else n2 = n2 + '3'
    show.insertAdjacentText('beforeend', '3')})
four.addEventListener('click', e => {
    if(op == '') n1 = n1+'4'
    else n2 = n2 + '4'
    show.insertAdjacentText('beforeend', '4')})
five.addEventListener('click', e => {
    if(op == '') n1 = n1+'5'
    else n2 = n2 + '5'
    show.insertAdjacentText('beforeend', '5')})
six.addEventListener('click', e => {
    if(op == '') n1 = n1+'6'
    else n2 = n2 + '6'
    show.insertAdjacentText('beforeend', '6')})
seven.addEventListener('click', e => {
    if(op == '') n1 = n1+'7'
    else n2 = n2 + '7'
    show.insertAdjacentText('beforeend', '7')})
eight.addEventListener('click', e => {
    if(op == '') n1 = n1+'8'
    else n2 = n2 + '8'
    show.insertAdjacentText('beforeend', '8')})
nine.addEventListener('click', e => {
    if(op == '') n1 = n1+'9'
    else n2 = n2 + '9'
    show.insertAdjacentText('beforeend', '9')})
minus.addEventListener('click', e => {
    reset()
    op = '-'
    show.insertAdjacentText('beforeend', '-')})
plus.addEventListener('click', e => {
    reset()
    op = '+'
    show.insertAdjacentText('beforeend', '+')})
mult.addEventListener('click', e => {
    reset()
    op = '*'
    show.insertAdjacentText('beforeend', '*')})
devi.addEventListener('click', e => {
    reset()
    op = '/'
    show.insertAdjacentText('beforeend', '/')})

erase.addEventListener('click', e => {
    op = ''
    show.textContent = ''
    n1 = ''
    n2 = ''
    p.style.color = 'black'
})
equal.addEventListener('click', e => {
    let result = 0
    if(n2 == 0 && op == '/'){
        hasError = true
        show.textContent = 'ERROR: DEVIDING BY 0.'
        p.style.color = 'red'

    }
    else if(n2 != '' && n1 != ''){
        result = operate(n1, n2, op)
        show.textContent = dic(result)}
    else if(n2 == ''){
        n2 = n1
        result = operate(n1, n2, op)
        show.textContent = dic(result)}
})