var totalPrice = 0;
var tax = 0;
var grandTotal =0;

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
    const firstClassCount = getInputValue("firstclass");
    const ecoClassCount = getInputValue("economyclass");

    totalPrice = firstClassCount * 150 + ecoClassCount * 100;
    document.getElementById("sub-total").innerText = "$" + totalPrice;

    tax = Math.round(totalPrice * 0.1);
    document.getElementById("vat-amount").innerText = "$" + tax;

    grandTotal = totalPrice + tax;
    document.getElementById("total-amount").innerText = "$" + grandTotal;
}


// converting values into integer number
function getInputValue(airClass) {
    const ticketInput = document.getElementById(airClass + "-count");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

// handling Book-now button
const bookNowBtn = document.getElementById("book-now")
bookNowBtn.addEventListener("click", function () {
    const bookingArea = document.getElementById("booking-area");
    bookingArea.style.display = "none";
    const ticketDetails = document.getElementById("ticket-details");
    ticketDetails.style.display = "block";
    //calling the functions
    showNoOfSeats("firstclass-count", "first-seat");
    showNoOfSeats("economyclass-count", "eco-seat");
    calculatingPrices("fare", totalPrice);
    calculatingPrices("vat", tax);
    calculatingPrices("total-fare", grandTotal);
})

// showing number of seats in table
function showNoOfSeats(airClass, seatOutput) {
    const accessClass = document.getElementById(airClass);
    const totalSeat = parseInt(accessClass.value);
    document.getElementById(seatOutput).innerText = totalSeat;
}

// showing number prices in table
function calculatingPrices(price, output) {
    document.getElementById(price).innerText = "$" + output;
}



