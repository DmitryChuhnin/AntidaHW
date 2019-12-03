//
// try{
//     const fs = require('fs');
//     fs.stat('test   test          ex.txt', (err, stats) => {
          
        
//         });
//     let str = fs.replace(/ +/g, ' ').trim();
//     console.log(str);
//     console.log(stat);

// }catch(t){
//     console.log("err2");
// }
 
const fs = require('fs');
fs.stat('test   test          ex.txt', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

});

str = fs.replace(/ +/g, ' ').trim();
console.log(str);
console.log(stats);