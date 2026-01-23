const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const mult = document.querySelector('.multiply')
const devi = document.querySelector('.devide')
const equal = document.querySelector('.equal')
const display = document.querySelector('.display')
const erase = document.querySelector('.C')
const p = document.querySelector('p')
const btnCon = document.querySelector('.btncontainer')
const decimal = document.querySelector('.decimal')
const backslash = document.querySelector('.backslash')

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
    op = ''   
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
        p.style.fontSize = '50px'
        display.textContent = ''
        hasError = false
    }
    let num = e.target.textContent
    if(display.textContent === '0') {display.textContent = ''}
    display.insertAdjacentText('beforeend', num)
    if(op === '') n1 += num
    else if(op !== '') n2 += num
})
minus.addEventListener('click', e => {
    reset()
    if(op != '' || n1 == '')return
    op = '-'
    display.insertAdjacentHTML('beforeend',
        `<span class=op>${op}</span>`)})
plus.addEventListener('click', e => {
    reset()
    if(op != '' || n1 == '')return
    op = '+'
    display.insertAdjacentHTML('beforeend',
         `<span class=op>${op}</span>`)})
mult.addEventListener('click', e => {
    reset()
    if(op != '' || n1 == '')return
    op = '*'
    display.insertAdjacentHTML('beforeend',
         `<span class=op>${op}</span>`)})
devi.addEventListener('click', e => {
    reset()
    if(op != '' || n1 == '')return
    op = '/'
    display.insertAdjacentHTML('beforeend',
         `<span class=op>${op}</span>`)})
erase.addEventListener('click', e => {
    op = ''
    display.textContent = '0'
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
        p.style.fontSize='large'
    }
    else if(n2 != '' && n1 != ''){
        result = operate(n1, n2, op)
        display.textContent = dic(result)}
    else if(n2 == ''){
        n2 = n1
        result = operate(n1, n2, op)
        display.textContent = dic(result)}
})
decimal.addEventListener('click', e => {
    if(op != ''){
        display.insertAdjacentText('beforeend',
         `0`)}
    display.insertAdjacentHTML('beforeend',
        `<span class=op>.</span>`)
    if(op=='') n1 += '.'
    else n2 += '.'
})
backslash.addEventListener('click', e => {
    if(op == ''){
        let number = n1.slice(0, -1)
        display.textContent = ''
        display.insertAdjacentText('beforeend', number)
        n1 = number
    }
    else{
        let number = n2.slice(0, -1)
        display.textContent = ''
        display.insertAdjacentHTML('beforeend', n1+`<span class=op>${op}</span>`+number)
        n2 = number
    }
})
document.addEventListener('keydown', e => {
    let nums = /^[0-9]$/;
    let digit = e.key;
    if(e.key == 'Enter'){
        equal.click()
    }
    else if(e.key == 'Escape'){
        erase.click()
    }
    else if(e.key == 'Backspace'){
        backslash.click()
    }
    else if(e.key == '-'){
        minus.click()
    }
    else if(e.key == '.'){
        decimal.click()
    }
    else if(e.key == '+'){
        plus.click()
    }
    else if(e.key == '*'){
        mult.click()
    }
    else if(e.key == '/'){
        devi.click()
    }
    if(!nums.test(digit)) return;
    if(op == ''){
        n1 += digit
        display.insertAdjacentText('beforeend', digit)
    }
    else {
        n2 += digit
        display.insertAdjacentText('beforeend', digit)
    }
})
