
function translatePigLatin(str) {
  var result = str.toUpperCase().split('');
  var first = result[0];
  var second = result[1];
  var vowel = ['A','E','I','O','U'].join('');

  var indexOne = vowel.indexOf(first);
  var indexSecond = vowel.indexOf(second);

  if(indexOne > -1){
    return str+'way';

  } else if(indexOne === -1 && indexSecond === -1){
      return piglatin(str,2);
  } else {
      return piglatin(str,1);
  }



}

function piglatin(str,index){
  var noConsonants = str.substr(index);
  var consonants = str.substr(0,index);
  return noConsonants.concat(consonants) + 'ay';
}

translatePigLatin("consonant");
