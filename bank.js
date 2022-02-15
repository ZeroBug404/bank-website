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

// Handle deposit & balance total
document.getElementById("deposit-btn").addEventListener("click", function () {
  // get value from function
  const newDeposit = getInputValue("deposit-input");

  // //update deposit total
//   const depoitNumber = document.getElementById("depoit-number");
//   const preViousDepositAmount = parseFloat(depoitNumber.innerText);

//   const newDepositTotal = preViousDepositAmount + newDeposit;
//   depoitNumber.innerText = newDepositTotal;
    updateTotalField("depoit-number", newDeposit);

  // update balance total
  const balance = document.getElementById("banalce");
  const balanceTotal = parseInt(balance.innerText);
  const Total = balanceTotal + newDeposit;
  balance.innerText = Total;
});



// Handle Withdraw & balance total
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get value from function
  const newWithdran = getInputValue("withdraw-input");

//   const withdrawn = document.getElementById("withdrawn");
//   const withdrawnVal = parseFloat(withdrawn.innerText);

//   //update withdraw total
//   const newWithdranAmount = withdrawnVal + newWithdran;
//   withdrawn.innerText = newWithdranAmount;
    updateTotalField("withdrawn", newWithdran)

  // update balance total
  const balance = document.getElementById("banalce");
  const balanceTotal = parseInt(balance.innerText);
  const Total = balanceTotal - newWithdran;
  balance.innerText = Total;
});
