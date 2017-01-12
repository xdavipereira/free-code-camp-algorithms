function promiseAssic(){
 return new Promise(
   function(resolve, reject) {
   fs.readFile(__dirname+'/search-replace.js', (err, data) => {
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
