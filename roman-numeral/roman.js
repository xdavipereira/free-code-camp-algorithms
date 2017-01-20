function convertToRoman(num) {
  var result = '';
  var romans = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  var numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

  for(var i=0; i<romans.length; i++){
    while(num>=numbers[i]){
     result = result + romans[i];
      num -= numbers[i];
    }
  }

 return result;
}

convertToRoman(36);
