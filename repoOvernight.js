"use strict";

window.onload = init;


function init() {
    let calculatebutton = document.getElementById("estBtn");
    calculatebutton.onclick = calculateCostClicked;

}

function getRoomRate(checkInDate, roomType) {

    const roomRates = {
        queenRoom: { junAug: 250, restOfYear: 150 },
        kingRoom: { junAug: 250, restOfYear: 150 },
        twoBedSuite: { junAug: 350, restOfYear: 210 },
    };

    const checkInMonth = new Date(checkInDate).getMonth() + 1;

    let season;
    if (checkInMonth >= 6 && checkInMonth <= 8) {
        season = 'junAug';
    } else {
        season = 'restOfYear';
    }

    return roomRates[roomType][season];
}

function calculateCostClicked() {
    // Initial Intake
    const inputName = document.getElementById('inputName').value;
    const checkInDate = document.getElementById('inputCheckInDate').value;
    const inputNumberOfNights = Number(document.getElementById('inputNumberOfNights').value);

    // Number of Guests
    let roomType;
    const numberOfAdultsInput = document.getElementById('inputNumberOfAdults').value;
    const numberOfKidsInput = document.getElementById('inputNumberOfKids').value;
    const inputErrorMessage = document.getElementById('invalidInput');

    if (Number(numberOfAdultsInput) + Number(numberOfKidsInput) > 5) {
        inputErrorMessage.innerText = 'Max Occupancy: 5'
    } else if (Number(numberOfAdultsInput) + Number(numberOfKidsInput) > 2) {
        inputErrorMessage.innerText = 'Max Occupancy: 2'
    } else if (Number(numberOfAdultsInput) + Number(numberOfKidsInput) > 6) {
        inputErrorMessage.innerText = 'Max Occupancy: 6'
    }


    // Room Type
    const queenRoom = document.getElementById('queenRoomRadio');
    const kingRoom = document.getElementById('kingRoomRadio');
    const twoBedSuite = document.getElementById('twoBedRadio');

    if (queenRoom.checked) {
        roomType = 'queenRoom';
    }
    else if (kingRoom.checked) {
        roomType = 'kingRoom';
    }
    else if (twoBedSuite.checked) {
        roomType = 'twoBedSuite';
    }

    // Calculations (Discount + Tax)
    const roomRate = getRoomRate(checkInDate, roomType);

    const noDiscount = document.getElementById('noRadioDiscount').checked;
    const seniorDiscount = document.getElementById('seniorRadioDiscount').checked;
    const militaryDiscount = document.getElementById('militaryRadioDiscount').checked;

    let discountPercentage = 0;

        // Discount Calculation
        if (noDiscount) {
            discountPercentage = 0;
            }
            else if (seniorDiscount) {
                discountPercentage = 0.10;
                }
                else if (militaryDiscount) {
                    discountPercentage = 0.20;
                    }

    const standardRoomCost = roomRate * inputNumberOfNights;
    const discount = standardRoomCost * discountPercentage;

    const appliedDiscount = standardRoomCost - discount;
    
    let taxRate = 0.12;
    const tax = appliedDiscount * taxRate;
    const totalAmountDue = appliedDiscount + tax;
    

    document.getElementById('outputStandardTotalCost').innerHTML = "$" + standardRoomCost.toFixed(2);

    document.getElementById('outputAppliedDiscount').innerHTML = "$" + appliedDiscount.toFixed(2);

    document.getElementById('outputTax').innerHTML = "$" + tax.toFixed(2);

    document.getElementById('outputTotalCost').innerHTML = "$" + totalAmountDue.toFixed(2);

    // Confirmation Number
    const checkInDateConfirmation = new Date(checkInDate);
    const month = checkInDateConfirmation.getMonth() + 1;
    const year = checkInDateConfirmation.getFullYear();
    const confirmationNumber = inputName.substring(0, 3) + "-" + month + year + "-" + inputNumberOfNights + ":" + numberOfAdultsInput + ":" + numberOfKidsInput;
    document.getElementById('confirmationNumber').innerHTML = confirmationNumber;

}