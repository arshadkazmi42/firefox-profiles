# firefox-profiles

[![Build](https://github.com/arshadkazmi42/firefox-profiles/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/firefox-profiles/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/firefox-profiles.svg)](https://www.npmjs.com/package/firefox-profiles)
[![NPM Downloads](https://img.shields.io/npm/dt/firefox-profiles.svg)](https://www.npmjs.com/package/firefox-profiles)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/firefox-profiles.svg)](https://github.com/arshadkazmi42/firefox-profiles)
[![LICENSE](https://img.shields.io/npm/l/firefox-profiles.svg)](https://github.com/arshadkazmi42/firefox-profiles/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/firefox-profiles.svg)](https://github.com/arshadkazmi42/firefox-profiles/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/firefox-profiles.svg)](https://github.com/arshadkazmi42/firefox-profiles/commits/master)


Get all firefox profile details

## Install

```
npm i firefox-profiles
```

## Usage

```javascript

const firefoxProfiles = require('firefox-profiles');

// For mac
const profiles = firefoxProfiles('darwin');
console.log(profiles);

// Output
// [ 
//   { 
//     Name: 'ffire17.xx.xx-x.xx.xx',
//     IsRelative: '1',
//     Path: 'Profiles/y1iixeh7.ffire17.xx.xx-x.xx.xx' 
//   }
// ]

// For Linux
const profiles = firefoxProfiles('linux');

// For windows
const profiles = firefoxProfiles('win32');
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/firefox-profiles/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase


## Credits

Inspired by work of [firefox-profile-js](https://github.com/saadtazi/firefox-profile-js) by [Saad Tazi](https://github.com/saadtazi) 
