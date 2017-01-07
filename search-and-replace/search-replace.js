'use strict'

function myReplace(str, before, after) {

  if(before[0] === before[0].toUpperCase() ) {
    let afterArray = after.split('');
    x.splice(0, 1, after[0].toUpperCase());
    after = afterArray.join('');
  }
  return str.replace(before,after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
