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
    watchAddVote(),
    watchAddVoteSuccess(),
    watchFetchUser(),
    watchLogout(),
    watchCheckUserSession(),
  ]
}
