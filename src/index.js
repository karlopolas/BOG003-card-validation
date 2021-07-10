import validator from "./validator.js";

console.log(validator);

const userInput = document.getElementById("user-input");
const numberPlaceholder = document.getElementById("card-number");
const inputRequired = document.getElementById('input-required')
const btnValidate = document.getElementById("validate-btn");
const validCardMessage = document.getElementById("valid-card");
const invalidCardMessage = document.getElementById("invalid-card");


userInput.addEventListener('keyup', displayCardNumber);

btnValidate.addEventListener('click', function(){
  if(userInput.value === ''){
    inputRequired.classList.add('show');
  } else {
      const coveredNumbers = validator.maskify(numberPlaceholder.innerText);
      const cardIsValid = validator.isValid(userInput.value);
      if (cardIsValid){
        numberPlaceholder.innerText = coveredNumbers;
        showValidCardMessage()
        userInput.value = '';
      } else{
        showinValidCardMessage()
        }
    }
});

function displayCardNumber(event) {
  inputRequired.classList.remove('show');
  const cardNumber = event.target.value;
  userInput.value = cardNumber.replace(/\s/g, '').replace(/\D/g, '');
  numberPlaceholder.innerText = userInput.value;
  if (userInput.value == ''){
    numberPlaceholder.innerText = '#### #### #### ####';
  }
}

function showValidCardMessage(){
  invalidCardMessage.classList.remove('show');
  validCardMessage.classList.add('show');
}

function showinValidCardMessage(){ 
  validCardMessage.classList.remove('show');
  invalidCardMessage.classList.add('show');
}



 







