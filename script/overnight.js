"use strict";

window.onload = function() {
    let buttonCalculate = document.getElementById("estBtn");
    buttonCalculate.onclick = buttonCalculateClick;
}
function buttonCalculateClick() {

    // const NumberOfAdultsValue = Number(document.getElementById('numberOfAdults').value);
    const numberOfKidsValue = Number(document.getElementById('numberOfKids').value);

    const outputTotal = document.getElementById()
}

function roomRateCost() {

    const roomTypeValue = document.querySelectorAll('input[name="roomType"]:checked').value; // double quote inserted create a mistake.
    const numberOfNightsValue = Number(inputNumberOfNights.value);

    let totalRoomCost = 0;

    return totalRoomCost;

    const NumberOfAdultsValue = Number(document.getElementById('numberOfAdults').value);
    const numberOfKidsValue = Number(document.getElementById('numberOfKids').value);
}
function discountCalculate() {

    const discountValue = document.querySelectorAll('input[name="discount"]:checked').value;

    let discountAmount = 0;

    if (discountValue === 'seniorDiscount') {
        discountAmount = .1;
    } else (discountValue === 'militaryDiscount') {
        discountAmount = .2;
    };

    return discountAmount;
}

function calculateOutputTotalCost() {

        // function to calculate the room cost
    const totalRoomCost = roomRateCost();
    const discountAmount = discountCalculate();

        //Calculate the total cost

    const totalOutput = totalRoomCost + discountAmount + ;


    const totalOutput = document.getElementById('outputTotal').value;


}
