/**

Tacktick Custom Sentences (1- Polar Speed Ratio Header/Footer):
message = "PTAK,FFD1,xyz";

**/

const nmea = require('../nmea.js')
module.exports = function (app) {
  return {
    sentence: 'PTAK_FFP2',
    optionKey: 'PTAK_FFP2',
    title: 'PTAK - Performance - Polar Target Speed Header',
    keys: ['performance.targetSpeed'],
    f: function (tspd) {
      return nmea.toSentence([
        '$PTAK',
        'FFP2',
        'TgtSPD',
        ' KNOTS'
      ])
    }
  }
}
