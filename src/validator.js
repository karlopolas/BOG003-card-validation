const validator = {
  
  isValid: function(userInput) { 
    const userInputArray = userInput.split('');
    const reversedUserInputArray = userInputArray.reverse().map(n => Number(n)); 

    for (let i = 0; i < reversedUserInputArray.length; i++){
      if (i % 2 !== 0) {
        reversedUserInputArray[i] *= 2; 
        if (reversedUserInputArray[i] >= 10){
          reversedUserInputArray[i] -= 9;
        }
      }
    }

    let result = 0;
    for (let i = 0; i < reversedUserInputArray.length; i++){
      result += reversedUserInputArray[i]; 
    }
    
    return result % 10 == 0;
    
  }
    
  
  /*function maskify() {

  } */
};

export default validator;
