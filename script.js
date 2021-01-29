function handleTicketAmount(airClass, isIncrease) {
    const ticketInput = document.getElementById(airClass + "-count");
    const ticketCount = parseInt(ticketInput.value);

    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    else if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }

    ticketInput.value = ticketNewCount;
    calculateTotal();
}

function calculateTotal(){
    const phoneCount = getInputValue("firstclass");
    const caseCount = getInputValue("economyclass");
    
     const totalPrice = phoneCount * 150 + caseCount * 100;
     document.getElementById("sub-total").innerText = "$" + totalPrice;
 
     const tax = Math.round(totalPrice * 0.1);
     document.getElementById("vat-amount").innerText = "$" + tax;
 
     const grandTotal = totalPrice + tax;
     document.getElementById("total-amount").innerText = "$" + grandTotal;
 }

function getInputValue(airClass){
    const productInput = document.getElementById(airClass + "-count");
    const productCount = parseInt(productInput.value);
    return productCount;
}