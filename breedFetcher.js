const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response, body) => {

    if (error) {
    } else if (body.length === 2) {
    } else {
      let data = JSON.parse(body);
      console.log(data[0]['description'])
    }
  });




