const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response, body) => {

    if (error) {
      callback(error, null);
    } else if (body.length === 2) {
      callback(`Sorry we could not find that breed in our database`, null);
    } else {
      let data = JSON.parse(body);
      callback(error, data[0]['description']);
    }
  });
};

module.exports = {fetchBreedDescription};
