import {
  watchFetchWords,
  watchWordAdded,
} from './admin';

import {
  watchAddWord,
} from './word';

export default function* rootSaga() {
  yield [
    watchFetchWords(),
    watchWordAdded(),
    watchAddWord(),
  ]
}
