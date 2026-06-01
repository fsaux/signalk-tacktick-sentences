/**

Tacktick Custom Sentences (1- Polar Speed Ratio Header/Footer):
message = "PTAK,FFD1,xyz";

**/

const nmea = require('../nmea.js')
module.exports = function (app) {
  return {
    sentence: 'PTAK_FFP3',
    optionKey: 'PTAK_FFP3',
    title: 'PTAK - Performance - Polar Target Angle Header',
    keys: ['performance.targetAngle'],
    f: function (tspd) {
      return nmea.toSentence([
        '$PTAK',
        'FFP3',
        'TgtTWA',
        '###@'
      ])
    }
  }
}
