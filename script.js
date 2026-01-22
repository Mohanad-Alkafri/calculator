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

const add = function(n1, n2) {return n1+n2 }
const substract = function(n1, n2) {return n1-n2}
const multiply = function(n1, n2) {return n1*n2}
const devide = function(n1, n2) {return n1/n2}

let n1 = ''
let n2 = ''
let op = ''
let currn = 0

const operate = function(n1, n2, op){
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
    show.textContent = currn
    n1 = currn
    n2 = ''
}}


zero.addEventListener('click', e => {
    if(op == '') n1 = n1+'0'
    else n2 = n2 + '0'
    reset()
    show.insertAdjacentText('beforeend', '1')})
one.addEventListener('click', e => {
    if(op == '') n1 = n1+'1'
    else n2 = n2 + '1'
    reset()
    show.insertAdjacentText('beforeend', '1')})
two.addEventListener('click', e => {
    if(op == '') n1 = n1+'2'
    else n2 = n2 + '2'
    reset()
    show.insertAdjacentText('beforeend', '2')})
three.addEventListener('click', e => {
    if(op == '') n1 = n1+'3'
    else n2 = n2 + '3'
    reset()
    show.insertAdjacentText('beforeend', '3')})
four.addEventListener('click', e => {
    if(op == '') n1 = n1+'4'
    else n2 = n2 + '4'
    reset()
    show.insertAdjacentText('beforeend', '4')})
five.addEventListener('click', e => {
    if(op == '') n1 = n1+'5'
    else n2 = n2 + '5'
    reset()
    show.insertAdjacentText('beforeend', '5')})
six.addEventListener('click', e => {
    if(op == '') n1 = n1+'6'
    else n2 = n2 + '6'
    reset()
    show.insertAdjacentText('beforeend', '6')})
seven.addEventListener('click', e => {
    if(op == '') n1 = n1+'7'
    else n2 = n2 + '7'
    reset()
    show.insertAdjacentText('beforeend', '7')})
eight.addEventListener('click', e => {
    if(op == '') n1 = n1+'8'
    else n2 = n2 + '8'
    reset()
    show.insertAdjacentText('beforeend', '8')})
nine.addEventListener('click', e => {
    if(op == '') n1 = n1+'9'
    else n2 = n2 + '9'
    reset()
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
})
equal.addEventListener('click', e => {
    n1 = Number(n1)
    n2 = Number(n2)
    let result = operate(n1, n2, op)
    show.textContent = result
})
//  n1 = '1'
//  n1 = Number(n1)
//  n2 = '1'
//  n2 = Number(n2)
//  op = '+'
//  console.log(operate(n1, n2, op))
//  console.log(typeof n2)
