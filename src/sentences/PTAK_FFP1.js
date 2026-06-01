/**

Tacktick Custom Sentences (1- Polar Speed Ratio Header/Footer):
message = "PTAK,FFD1,xyz";

**/

const nmea = require('../nmea.js')
module.exports = function (app) {
  return {
    sentence: 'PTAK_FFP1',
    optionKey: 'PTAK_FFP1',
    title: 'PTAK - Performance - Polar Speed Ratio Header',
    keys: ['performance.polarSpeedRatio'],
    f: function (performance) {
      return nmea.toSentence([
        '$PTAK',
        'FFP1',
        'Perf',
        '%'
      ])
    }
  }
}
