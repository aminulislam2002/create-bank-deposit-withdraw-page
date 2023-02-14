// Step-01: add event listener / click hndler to the deposite button
document.getElementById("btn-deposite").addEventListener("click", function () {
  // Step-02: get the deposite amonunt from the deposite input field
  const depositeField = document.getElementById("deposite-field");

  // Note: for input field use .value to the value inside the input field
  const newDepositeAmountString = depositeField.value;
  const newDepositeAmount = parseFloat(newDepositeAmountString);

  // Step-7: clear the deposite field
  depositeField.value = "";

  if (isNaN(newDepositeAmount)) {
    alert("please provide a valid number");
    return;
  }

  // Step-03: get the current deposite total
  const depositeTotalElement = document.getElementById("deposite-total");
  // Note: for none input field use .innerText to get the text
  const previousDepositeTotalString = depositeTotalElement.innerText;
  const previousDepositeTotal = parseFloat(previousDepositeTotalString);

  // Step-04: add numbers to set the total deposite
  const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
  // set the deposite total
  depositeTotalElement.innerText = currentDepositeTotal;

  // Step-05: get blance current total
  const balanceTotalElement = document.getElementById("blance-total");
  // Note: for none input field use .innerText to get the text
  const previousBlanceTotalString = balanceTotalElement.innerText;
  const previousBlanceTotal = parseFloat(previousBlanceTotalString);

  // Step-06: calculate current total blance
  const currentBalanceTotal = previousBlanceTotal + newDepositeAmount;
  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;
});
