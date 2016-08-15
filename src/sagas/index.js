import {
  watchFetchWords,
  watchWordAdded,
  watchAddDefinitionSuccess as adminWatchAddDefinitionSuccess,
  watchFetchUsers,
} from './admin';

import {
  watchAddWord,
  watchFetchWord,
  watchAddDefinition,
  watchAddDefinitionSuccess,
  watchDeleteDefinition,
  watchAddVote,
  watchAddVoteSuccess,
} from './word';

import {
  watchFetchUser,
  watchLogout,
  watchCheckUserSession,
} from './user';

export default function* rootSaga() {
  yield [
    watchFetchWords(),
    watchWordAdded(),
    adminWatchAddDefinitionSuccess(),
    watchFetchUsers(),
    watchAddWord(),
    watchFetchWord(),
    watchAddDefinition(),
    watchAddDefinitionSuccess(),
    watchDeleteDefinition(),
    watchAddVote(),
    watchAddVoteSuccess(),
    watchFetchUser(),
    watchLogout(),
    watchCheckUserSession(),
  ]
}
