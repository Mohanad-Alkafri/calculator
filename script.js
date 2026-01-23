const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const mult = document.querySelector('.multiply')
const devi = document.querySelector('.devide')
const equal = document.querySelector('.equal')
const display = document.querySelector('.display')
const erase = document.querySelector('.C')
const p = document.querySelector('p')
const btnCon = document.querySelector('.btncontainer')


const add = function(n1, n2) {return n1+n2 }
const substract = function(n1, n2) {return n1-n2}
const multiply = function(n1, n2) {return n1*n2}
const devide = function(n1, n2) {return n1/n2}


let n1 = ''
let n2 = ''
let op = ''
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
    let currn = operate(n1, n2, op)
    display.textContent = ''
    n1 = currn
    n2 = ''    
    display.insertAdjacentText('beforeend', n1)
}}
const dic = function (n){
    if(n%1 != 0){
        n = n.toFixed(2)
    }
    return n
}


btnCon.addEventListener('click', e => {
    if(!e.target.matches('button')) return
    if(!e.target.classList.contains('number')) return
    if( hasError == true && e.target != equal){
        n1 = ''
        n2 = ''
        op = ''
        p.style.color = 'black'
        display.textContent = ''
        hasError = false
    }
    let num = e.target.textContent
    display.insertAdjacentText('beforeend', num)
    if(op === '') n1 += num
    else if(op !== '') n2 += num
})
minus.addEventListener('click', e => {
    reset()
    op = '-'
    display.insertAdjacentHTML('beforeend',
         `<span class=operation>${op}</span>`)})
plus.addEventListener('click', e => {
    reset()
    op = '+'
    display.insertAdjacentHTML('beforeend',
         `<span class=operation>${op}</span>`)})
mult.addEventListener('click', e => {
    reset()
    op = '*'
    display.insertAdjacentHTML('beforeend',
         `<span class=operation>${op}</span>`)})
devi.addEventListener('click', e => {
    reset()
    op = '/'
    display.insertAdjacentHTML('beforeend',
         `<span class=operation>${op}</span>`)})
erase.addEventListener('click', e => {
    op = ''
    display.textContent = ''
    n1 = ''
    n2 = ''
    p.style.color = 'black'
})
equal.addEventListener('click', e => {
    let result = 0
    if(n2 == 0 && op == '/'){
        hasError = true
        display.textContent = 'ERROR: DEVIDING BY 0.'
        p.style.color = 'red'

    }
    else if(n2 != '' && n1 != ''){
        result = operate(n1, n2, op)
        display.textContent = dic(result)}
    else if(n2 == ''){
        n2 = n1
        result = operate(n1, n2, op)
        display.textContent = dic(result)}
})

