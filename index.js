
const IntialPrice = document.querySelector('#IntialPrice')
const QuantityofStocks = document.querySelector('#QuantityofStocks')
const CurrentPrice = document.querySelector('#CurrentPrice')
const Calculate = document.querySelector('#Calculate')
const message = document.querySelector('#message')

function calculateProfitLoss(Intial,Quantity,Current){

    if(Current > Intial){
        var profit = (Current-Intial)*Quantity
        var profitPercentage = (profit / Intial)*100
        console.log(profit,'---profit---',profitPercentage)
        message.innerHTML = `your profit is ${profit} and your profit percentage is ${profitPercentage.toFixed(2)}%`
    }else if(Intial > Current ){
        var loss = (Intial-Current)*Quantity
        var lossPercentage = (loss / Intial)*100
        console.log(loss,'---loss---',lossPercentage)
        message.innerHTML = `your loss is ${loss} and your loss percentage is ${lossPercentage.toFixed(2)}%`
    }else{
        // Intial == Current
        message.innerHTML = `Neither Profit Nor Loss`
    }
}

function handleClick(){

    console.log(IntialPrice.value,QuantityofStocks.value,CurrentPrice.value)
    console.log(Boolean(IntialPrice.value) ,Boolean(QuantityofStocks.value),Boolean(CurrentPrice.value))

    if(Number(IntialPrice.value) <= 0 || Number(QuantityofStocks.value) <= 0 || Number(CurrentPrice.value) <= 0){
            console.log(Number(IntialPrice.value),Number(QuantityofStocks.value),Number(CurrentPrice.value))
            message.innerHTML = `Please fill out all Fields and with value greater than zero`
    }else{
        calculateProfitLoss(Number(IntialPrice.value),Number(QuantityofStocks.value),Number(CurrentPrice.value))
    }
}

Calculate.addEventListener('click',handleClick)