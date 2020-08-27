const request = require('request');
const fs = require('fs');
const myArgs = process.argv.slice(2);
const path = myArgs[1];

request(myArgs[0], (error, response, body) => {
  console.log('error:', error);
  if (error) {
    console.log('something wrong with the website')
  }
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  if (!error && fs.existsSync(path)) {
    fs.writeFile(myArgs[1], body, (err) => {
      if (err) throw err;
      console.log('Replaced!')
    });
  }else{
    console.log("try again")
  }

});



