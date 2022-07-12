const { expect } = require('chai');
const sinon = require('sinon');
const Fs = require('fs');

const firefoxProfiles = require('../index');

const iniFile = '[Install4F96D1932A9F858E]\nDefault=oucn46hr.default-release\nLocked=1\n\n[Profile1]\n\
  Name=default\nIsRelative=1\nPath=xlbm9r8f.default\nDefault=1\n\n[Profile0]\nName=default-release\nIsRelative=1\nPath=oucn46hr.default-release\n\n[General]\nStartWithLastProfile=1\nVersion=2';

sinon.stub(Fs, 'readFileSync').returns(iniFile);


describe('tests firefox profiles', () => {
  it('should return firefox profiles', () => {
    const profiles = firefoxProfiles();
    expect(profiles.length).to.be.equals(2);
    expect(profiles[0].Name).to.be.equals('default');
    expect(profiles[0].Path).to.be.equals('xlbm9r8f.default');
    expect(profiles[1].Name).to.be.equals('default-release');
    expect(profiles[1].Path).to.be.equals('oucn46hr.default-release');
  });
});
