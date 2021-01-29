// handling ticket amount
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

// calculating prices
function calculateTotal() {
    const phoneCount = getInputValue("firstclass");
    const caseCount = getInputValue("economyclass");

    const totalPrice = phoneCount * 150 + caseCount * 100;
    document.getElementById("sub-total").innerText = "$" + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById("vat-amount").innerText = "$" + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById("total-amount").innerText = "$" + grandTotal;
}
// converting values into integer number
function getInputValue(airClass) {
    const productInput = document.getElementById(airClass + "-count");
    const productCount = parseInt(productInput.value);
    return productCount;
}

// handling Book-now button
const bookNowBtn = document.getElementById("book-now")
bookNowBtn.addEventListener("click", function () {
    const bookingArea = document.getElementById("booking-area");
    bookingArea.style.display = "none";
    const ticketDetails = document.getElementById("ticket-details");
    ticketDetails.style.display = "block";

    showNoOfSeats("firstclass-count", "first-seat");
    showNoOfSeats("economyclass-count", "eco-seat");
    
})

// showing values in table
function showNoOfSeats(airClass, seatOutput){
    const accessFirstClass = document.getElementById(airClass);
    totalFirstClass = parseInt(accessFirstClass.value);
    document.getElementById(seatOutput).innerText = totalFirstClass;

    // const accessEcoClass = document.getElementById("economyclass-count");
    // totalEcoClass = parseInt
}
// const accessFirstClass = document.getElementById("firstclass-count");
// totalFirstClass = parseInt(accessFirstClass.value);
// document.getElementById("first-seat").innerText = totalFirstClass;



