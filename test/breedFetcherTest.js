const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns a "Breed Not Found" when an invalid or non-existent breed is passed in',(done) => {
    fetchBreedDescription('Non existent breed', (err, desc) => {
      assert.equal(err, 'Sorry we could not find that breed in our database');

      const expectedDesc = null;

      assert.equal(expectedDesc, desc);

      done();
    });
  });
});