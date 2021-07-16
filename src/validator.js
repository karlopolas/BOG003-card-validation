const validator = {
  
  isValid: function(userInput) { 
    const userInputArray = userInput.split('');
    const reversedUserInputArray = userInputArray.reverse().map(n => Number(n)); 
    let result = 0;
    for (let i = 0; i < reversedUserInputArray.length; i++){
      if (i % 2 == 0) {
        result += reversedUserInputArray[i];
      } else { 
        reversedUserInputArray[i] *= 2; 
        if (reversedUserInputArray[i] >= 10){
          reversedUserInputArray[i] -= 9;
        }
        result += reversedUserInputArray[i];
      }
    }

    return result % 10 == 0;    
  },
    
  maskify: function(numberInCard) {
    if (numberInCard.length < 5){
      return numberInCard;
    }

    const reversedCardNumberArray = numberInCard.split('').reverse();
    for (let i = 4; i < reversedCardNumberArray.length; i++){
      reversedCardNumberArray[i] = '#';
    }
    return reversedCardNumberArray.reverse().join('');
  }
};

export default validator;
