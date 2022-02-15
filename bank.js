function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const inputValue = parseFloat(input.value);

  //clear the deposit input field
  input.value = "";

  return inputValue;
}

function updateTotalField(textId, newAmount) {
  const totalNumber = document.getElementById(textId);
  const preViousAmount = parseFloat(totalNumber.innerText);

  const newDepositTotal = preViousAmount + newAmount;
  totalNumber.innerText = newDepositTotal;

  return newDepositTotal;
}


function updateTotalBalance(newBalance, isAdd) {
    let balance = document.getElementById("banalce");
    let previousBalanceTotal = parseFloat(balance.innerText);
    if (isAdd == true) {
      balance.innerText = previousBalanceTotal + newBalance;
    } else {
      balance.innerText = previousBalanceTotal - newBalance;
    }
  
    return balance;
  }

// Handle deposit & balance total
document.getElementById("deposit-btn").addEventListener("click", function () {
  // get value from function
  const newDeposit = getInputValue("deposit-input");
  if (newDeposit > 0) {
    updateTotalField("depoit-number", newDeposit);

    updateTotalBalance(newDeposit, true);
  }
});

// Handle Withdraw & balance total
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get value from function
  const newWithdran = getInputValue("withdraw-input");

  let balance = document.getElementById("banalce");
  let previousBalanceTotal = parseFloat(balance.innerText);

  if (newWithdran > 0 && newWithdran < previousBalanceTotal) {
    updateTotalField("withdrawn", newWithdran);

    updateTotalBalance(newWithdran, false);
  }
});
