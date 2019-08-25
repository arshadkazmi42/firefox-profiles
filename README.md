# firefox-profiles

[![Build](https://img.shields.io/travis/com/arshadkazmi42/firefox-profiles.svg)](https://travis-ci.com/arshadkazmi42/firefox-profiles/)

Get all firefox profile details

## Install

```
npm i firefox-profiles
```

## Usage

```javascript

const firefoxProfiles = require('firefox-profiles');

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

```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/firefox-profiles/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>

## Credits

Inspired by work of [firefox-profile-js](https://github.com/saadtazi/firefox-profile-js) by [Saad Tazi](https://github.com/saadtazi) 
