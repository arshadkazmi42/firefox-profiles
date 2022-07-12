# firefox-profiles

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
