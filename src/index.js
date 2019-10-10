// column multiplication
// the digits in the number are in the reverse order
// to simplify 'map', 'push' and 'for'

module.exports = function multiply(first, second) {

  let result = ['0'];
  let op1 = [...first].reverse();
  let op2 = Array.from(second).reverse();

  if( +first == 0 || +second == 0 ){
    return ('0');
  }
  
  for(let i=0; i < op2.length; i++){
    
    let add_to_next_digit = 0;
    let multiply_res = op1.map((digit) => {
      let mult_add = +digit * +op2[i] + add_to_next_digit;
      let last_digit = mult_add % 10;
      add_to_next_digit = (mult_add - last_digit) / 10;
      return String(last_digit);
    });
    
    if(add_to_next_digit>0){
      multiply_res.push(String(add_to_next_digit));
    }
    
    for(let k = 0; k < i; k++){ multiply_res.unshift('0')};

    while(result.length < multiply_res.length){
      result.push('0');
    }
    
    while(multiply_res.length<result.length){
      multiply_res.push('0');
    }
    
    add_to_next_digit = 0;
    for(let j = 0; j < result.length; j++) {
      let summ = +result[j] + +multiply_res[j] + add_to_next_digit;
      let last_digit = summ % 10;
      add_to_next_digit = (summ -last_digit) / 10;
      result[j] = last_digit;
    }
    
    if(add_to_next_digit>0){
      result.push(String(add_to_next_digit));
    }

  }
return String(result.reverse().join(''));
}
