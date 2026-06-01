/**

Tacktick Custom Sentences (1- Polar Speed Ratio):
message = "PTAK,FFD1,xyz";

**/

const nmea = require('../nmea.js')
module.exports = function (app) {
  return {
    sentence: 'PTAK_FFD3',
    optionKey: 'PTAK_FFD3',
    title: 'PTAK - Performance - Polar Target Angle',
    keys: ['performance.targetAngle'],
    f: function (ttwa) {
      const tgttwa = ttwa === null ? undefined : (ttwa * 180 / Math.PI).toFixed(0)
      return nmea.toSentence([
        '$PTAK',
        'FFD3',
        tgttwa
      ])
    }
  }
}
