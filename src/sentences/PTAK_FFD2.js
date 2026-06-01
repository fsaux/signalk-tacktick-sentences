/**

Tacktick Custom Sentences (1- Polar Speed Ratio):
message = "PTAK,FFD1,xyz";

**/

const nmea = require('../nmea.js')
module.exports = function (app) {
  return {
    sentence: 'PTAK_FFD2',
    optionKey: 'PTAK_FFD2',
    title: 'PTAK - Performance - Polar Target Speed',
    keys: ['performance.targetSpeed'],
    f: function (tspd) {
      const tgtspd = tspd === null ? undefined : (tspd * 3600 / 1852).toFixed(1)
      return nmea.toSentence([
        '$PTAK',
        'FFD2',
        tgtspd
      ])
    }
  }
}
