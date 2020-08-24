import { Instance } from 'mobx-state-tree'
import { RootStoreBase } from './RootStore.base'
import { OPERATOR_CONNECTION_FRAGMENT } from '../fragments'
import gql from 'graphql-tag'

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.views((self) => ({
  vOperators: () => {
    return [...self.operators.values()]
  },
})).actions((self) => ({
  requestPaginatedOperators: (pageRequestArgs) => {
    return self.queryPageRequestOperators(
      {
        first: pageRequestArgs.first,
        last: pageRequestArgs.last,
        before: pageRequestArgs.before,
        after: pageRequestArgs.after,
      },
      OPERATOR_CONNECTION_FRAGMENT,
    )
  },
}))
