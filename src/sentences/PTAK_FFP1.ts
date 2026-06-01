/**

Tacktick Custom Sentences (1- Polar Speed Ratio Header/Footer):
message = "PTAK,FFD1,xyz";

**/

import * as nmea from '../nmea'
import type { SentenceEncoder, SignalKApp } from '../types/plugin'

export default function (_app: SignalKApp): SentenceEncoder {
  return {
    sentence: 'PTAK_FFP1',
    optionKey: 'PTAK_FFP1',
    title: 'PTAK - Performance - Polar Speed Ratio Header',
    keys: ['performance.polarSpeedRatio'],
    f: function () {
      return nmea.toSentence([
        '$PTAK',
        'FFP1',
        'Perf',
        '%'
      ])
    }
  }
}


