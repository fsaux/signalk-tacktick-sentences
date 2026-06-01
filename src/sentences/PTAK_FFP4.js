/**

Tacktick Custom Sentences (1- Polar Speed Ratio Header/Footer):
message = "PTAK,FFD1,xyz";

**/

const nmea = require('../nmea.js')
module.exports = function (app) {
  return {
    sentence: 'PTAK_FFP4',
    optionKey: 'PTAK_FFP4',
    title: 'PTAK - Racing - Time to Layline Header',
    keys: ['navigation.racing.layline.time'],
    f: function (ttll) {
      return nmea.toSentence([
        '$PTAK',
        'FFP4',
        'To Lyl',
        'MIN'
      ])
    }
  }
}
