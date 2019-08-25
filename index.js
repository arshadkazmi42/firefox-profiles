const path = require('path');
const fs = require('fs');
const ini = require('ini');
const _ = require('lodash');

const firefoxUserDirectory = require('firefox-user-directory');


module.exports = (platform) => {
  const userDirectory = firefoxUserDirectory(platform);
  const data = fs.readFileSync(path.join(userDirectory, 'profiles.ini'), { encoding: 'utf8' });
  return _.filter(ini.parse(data), function(value, key) {
    return _.isString(key) && key.match(/^Profile/);
  });
};
