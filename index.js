// Get value from text input and assign to variable total
function tipAmount(clicked_byId) {
  let totalAmount = document.getElementById("totalAmount").value;
  if (isNaN(totalAmount)){ // If statement to validate the number typed
    alert("Be Sure that you have typed a valid amount");
  } else {
    let clickID = clicked_byId;
    console.log(clickID);
    let granTotal = (1+(clickID/100)) * totalAmount;
    console.log(totalAmount);
    console.log(granTotal);
    document.getElementById("gt").value = "$" + granTotal.toFixed(2);
  }
}
