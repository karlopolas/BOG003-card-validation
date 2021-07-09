import validator from "./validator.js";

console.log(validator);

const userInput = document.getElementById("user-input");
const numberPlaceholder = document.getElementById("card-number");
const btnValidate = document.getElementById("validate-btn");
const validCardMessage = document.getElementById("valid-card");
const invalidCardMessage = document.getElementById("invalid-card");


userInput.addEventListener('keyup', displayCardNumber);
btnValidate.addEventListener('click', function(){
  const coveredNumbers = validator.maskify(numberPlaceholder.innerText);
  const cardIsValid = validator.isValid(userInput.value);

  if (cardIsValid){
    numberPlaceholder.innerText = coveredNumbers;
    showValidCardMessage()
    userInput.value = '';
  }else{
    showinValidCardMessage()
  }
});

function displayCardNumber(event) {
  const cardNumber = event.target.value;
  numberPlaceholder.innerText = cardNumber;
}

function showValidCardMessage(){
  invalidCardMessage.classList.remove('show');
  validCardMessage.classList.add('show');
}

function showinValidCardMessage(){ 
  validCardMessage.classList.remove('show');
  invalidCardMessage.classList.add('show');
}



 







