'use strict';
const fs = require('fs');

function promiseAssic(){
 return new Promise(
   function(resolve, reject) {
   fs.readFile(__dirname+'/promise-example.js', (err, data) => {
     if(err) { reject( err); }

     resolve(data.toString());
   })
 })
}


promiseAssic().then(function(a){
 console.log(a)
}).then(
function executarDepois() {
     return console.log('executou');
})
