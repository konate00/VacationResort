"use strict";

window.onload = init;

function init() {
    const buttonCalculate = document.getElementById('estBtn');
    buttonCalculate.onclick = buttonCalculateClick;

}

function buttonCalculateClick() {

    // connect text boxes
    const messageDiv = document.getElementById("numPplError");
    const fullName = document.getElementById('inputName').value;
    // const emailAddress = document.getElementById('inputEmail').value;
    const monthCheckIn = document.getElementById('inputCheckInDate').value;
    const numberOfNights = document.getElementById('inputNumberOfNights').value;

    // Number of people

    const numberOfAdults = document.getElementById('inputNumberOfAdults').value;
    const numberOfKids = document.getElementById('inputNumberOfKids').value;

    // Discount

    const seniorDiscount = document.getElementById('seniorRadioDiscount');
    const militaryDiscount = document.getElementById('militaryRadioDiscount');

    const numberOfPplIn = Number(numberOfAdults) + Number(numberOfKids);

    let preRoomCost = 0;
    let posRoomCost = 0;
    let discountCost = 0;
    let taxCost = 0;
    let totalCost = 0;

    let roomType = "";

    // let confirmationCode = fullName.toUppercase().substring(0, 3) + '-' + (Number(monthCheckIn.getUTCMonths()) + 1) + monthCheckIn.getUTCFullYear() + '-' + numberOfNights + ':' + numberOfAdults + ':' + numberOfKids;

    //things to do, move the math outside of this if/else, make it just validate and
    //store a variable for which room type the user input.

        // Room type radio
    const kingSuite = document.getElementById('kingRoomRadio');
    const queenSuite = document.getElementById('queenRoomRadio');
    const twoBedSuite = document.getElementById('twoBedRadio');

    if (queenSuite.checked) {
        if (numberOfPplIn > 5) {
            messageDiv.innerText = "The room you selected will not hold your party.";
            document.getElementById("confirmationNumber").innerText = "";
        }
        else {
            messageDiv.innerText = "Queen";
            roomType = "Queen";
        }
    }
    else if (kingSuite.checked) {
        if (numberOfPplIn > 2) {
            messageDiv.innerText = "The room you selected will not hold your party.";
            document.getElementById("confirmationNumber").innerText = "";
        }
        else {
            messageDiv.innerText = "";
            roomType = "King";
        }
    }
    else if (twoBedSuite.checked) {
        if (numberOfPplIn > 6) {
            messageDiv.innerText = "Thank you.";
            document.getElementById("confirmationNumber").innerText = "";
        }
        else {
            messageDiv.innerText = "";
            roomType = "twoBedSuite";
        }
    }

    // Calculate Room rate

    preRoomCost = getRoomRate(new Date(monthCheckIn), roomType) * numberOfNights;

    // Calculate discount

    if (seniorDiscount.checked) {
        discountCost = preRoomCost * 0.1;
    }
    else if (militaryDiscount.checked) {
        discountCost = preRoomCost * 0.2;
    }

    displayTotals(preRoomCost, discountCost, fullName, monthCheckIn, numberOfNights, numberOfAdults, numberOfKids);
}

function getRoomRate(checkInDate, roomType) {

    if (roomType == "Queen") {
        if (checkInDate.getMonth() < 5 || checkInDate.getMonth() > 7) {
            return 150;
        }
        else {
            return 250;
        }
    }
    else if (roomType == "King") {
        if (checkInDate.getMonth() < 5 || checkInDate.getMonth() > 7) {
            return 150;
        }
        else {
            return 250;
        }
    }
    else if (roomType == "twoBedSuite") {
        if (checkInDate.getMonth() < 5 || checkInDate.getMonth() > 7) {
            return 210;
        }
        else {
            return 350;
        }
    }
}

function displayTotals(preRoomCost, discountCost, fullName, monthCheckIn, numberOfNights, numberOfAdults, numberOfKids) {

    let taxRate = 0.12;

    const postRoomCost = preRoomCost - discountCost; 

    const taxCost = postRoomCost * taxRate;

    const totalCost = postRoomCost + taxCost;

    const confirmationCode = fullName.substring(0, 3) + '-' + (new Date(monthCheckIn).getMonth() + 1) + new Date(monthCheckIn).getFullYear() + '-' + numberOfNights + ':' + numberOfAdults + ':' + numberOfKids;

    document.getElementById("standartRoomDisplay").innerHTML = "$" + preRoomCost.toFixed(2);
    document.getElementById("discountDisplay").innerHTML = "$" + discountCost.toFixed(2);
    document.getElementById("discountedRoomCost").innerHTML = "$" + postRoomCost.toFixed(2);
    document.getElementById("taxDisplay").innerHTML = "$" + taxCost.toFixed(2);
    document.getElementById("totalCostDisplay").innerHTML = "$" + totalCost.toFixed(2);
    document.getElementById("confirmationNumDisplay").innerHTML = confirmationCode;



}