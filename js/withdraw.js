/**
 * 1. add even handler with the withdrew button
 * 2. get the withdraw amount from the withdraw input field
 * 2.1 also make sure to convert the input into a number by using parseFloat()
 * 3. get perivious withdraw total
 * 4. calculate total withdraw amount
 * 4.1 set total withdraw amount
 * 5. get the perevious balance total
 * 6. calculate new balance total
 * 6.1 set new total balance
 * 7. clear the input field
 */
// Step 01
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // Step 02
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // Step 07
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
  }

  // Step 03
  const withdrawTotalElement = document.getElementById("ithdrwaw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // Step 05
  const balanceTotalElement = document.getElementById("blance-total");
  const previousBlanceTotalString = balanceTotalElement.innerText;
  const previousBlanceTotal = parseFloat(previousBlanceTotalString);

  if (newWithdrawAmount > previousBlanceTotal) {
    alert("New withdraw amount it too much!");
    return;
  }
  // Step 04
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // Step 06
  const newBalanceTotal = previousBlanceTotal - currentWithdrawTotal;
  balanceTotalElement.innerText = newBalanceTotal;
});
