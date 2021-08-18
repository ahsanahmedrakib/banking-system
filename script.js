function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputAmount = parseFloat(inputText);
    input.value = '';
    return inputAmount;
}

function updateAmount(inputId, amount){
    const update = document.getElementById(inputId);
    const updateText = update.innerText;
    const updateAmount = parseFloat(updateText);
    const totalAmount = amount + updateAmount;
    update.innerText = totalAmount;
}


function currentBalance(){
    const balance = document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    return balanceAmount;
}


function updateBalance(amount, isAdd){
    const balance = document.getElementById('balance-total');
    const balanceAmount = currentBalance();
    if(isAdd == true){
        balance.innerText = balanceAmount + amount;
    }
    else{
        balance.innerText = balanceAmount - amount;
    }
}




document.getElementById('deposit-button').addEventListener('click', function(){

    const inputAmount = getInputValue('deposit-input');
    if(inputAmount > 0){
        updateAmount('deposit-total', inputAmount);
        updateBalance(inputAmount, true);
    }

})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const inputAmount = getInputValue('withdraw-input');
    const balance = currentBalance();
    if(inputAmount > 0 && balance > 0){
        updateAmount('withdraw-total', inputAmount);
        updateBalance(inputAmount, false);
    }

})