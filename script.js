let money = document.querySelector('.clickable-money')
let counter = 0 
let images = document.querySelectorAll('.coins-items__element')
let amount = document.querySelector('.amount')



money.addEventListener('click',function () {
    if(counter <=99){
        counter++
    }
    else if(counter >= 100){
        counter = counter + 5
    }
    amount.textContent =  `Money: ${counter}`
    console.log(counter)
})
