
    function updateCaseNumber(product,price, isIncrease) {
    const caseInput = document.getElementById(product+'-number')
   let caseNumber = caseInput.value;
    if (isIncrease == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber>0) {
        caseNumber = parseInt(caseNumber) - 1; 
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById(product+'-total');
        caseTotal.innerText = caseNumber * price;
        calculateTotal()
}
function getInputValue(product) {
    const phoneInput = document.getElementById(product+'-number')
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
    document.getElementById('sub-total').innerText = subTotal;

}

// phone increase decrease events 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone',1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone',1219, false);
})
// increase decrease events 
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case',59, true);
 })
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case',59, false);
 })
