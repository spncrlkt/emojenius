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

import {
  watchSearch,
} from './search';

import {
  watchFetchHome,
} from './home';

export default function* rootSaga() {
  yield [
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
    watchSearch(),
    watchFetchHome(),
  ]
}
