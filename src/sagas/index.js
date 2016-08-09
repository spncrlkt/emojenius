import {
  watchFetchWords,
  watchWordAdded,
  watchAddDefinitionSuccess,
  watchFetchUsers,
} from './admin';

import {
  watchAddWord,
  watchFetchWord,
  watchAddDefinition,
} from './word';

export default function* rootSaga() {
  yield [
    watchFetchWords(),
    watchWordAdded(),
    watchAddDefinitionSuccess(),
    watchFetchUsers(),
    watchAddWord(),
    watchFetchWord(),
    watchAddDefinition(),
  ]
}
