/**

Tacktick Custom Sentences (1- Polar Speed Ratio):
message = "PTAK,FFD1,xyz";

**/

import * as nmea from '../nmea'
import type { SentenceEncoder, SignalKApp } from '../types/plugin'

export default function (_app: SignalKApp): SentenceEncoder {
  return {
    sentence: 'PTAK_FFD1',
    optionKey: 'PTAK_FFD1',
    title: 'PTAK - Performance - Polar Speed Ratio',
    keys: ['performance.polarSpeedRatio'],
    f: function (performance) {
      var perf = performance === null ? 0 : (performance *100).toFixed(0);
      return nmea.toSentence([
        '$PTAK',
        'FFD1',
        perf
      ])
    }
  }
}
