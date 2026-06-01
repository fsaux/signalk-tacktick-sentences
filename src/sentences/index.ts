/**
 * Static registry of all sentence-encoder factories.
 *
 * Hand-written barrel rather than a runtime `readdirSync + require`
 * loop. TypeScript proves at compile time that every factory conforms
 * to `SentenceEncoderFactory`; the plugin also boots without a
 * filesystem scan. Before 2.x the plugin discovered encoders by
 * scanning the directory at startup — dropping a file into
 * `src/sentences/` was enough. **That is no longer the case**: an
 * encoder is registered only if it is imported here.
 *
 * When adding a new sentence:
 *   1. Create `./<SENTENCE>.ts` exporting the factory as the default:
 *      `export default function (app, plugin?) { return { ... } }`.
 *   2. Add the import + key below, preserving alphabetical order.
 *   3. Add tests under `test/<SENTENCE>.ts`. `test/registry.ts`
 *      asserts barrel/directory parity so a missing import fails CI.
 */

import type { SentenceEncoderFactory } from '../types/plugin'

import PTAK_FFD1 from './PTAK_FFD1'
import PTAK_FFP1 from './PTAK_FFP1'

export const sentenceFactories: Readonly<
  Record<string, SentenceEncoderFactory>
> = {
  PTAK_FFD1,
  PTAK_FFP1
}
