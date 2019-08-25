const { expect } = require('chai');

const firefoxProfiles = require('../index');


describe('tests firefox profiles', () => {
  it('should return firefox profiles', () => {
    expect(firefoxProfiles().length).to.greaterThan(0);
  });
});
