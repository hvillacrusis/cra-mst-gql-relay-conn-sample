/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OperatorConnectionModel, OperatorConnectionModelType } from "./OperatorConnectionModel"
import { OperatorConnectionModelSelector } from "./OperatorConnectionModel.base"
import { RootStoreType } from "./index"


/**
 * PublicBase
 * auto generated base class for the model PublicModel.
 */
export const PublicModelBase = ModelBase
  .named('Public')
  .props({
    __typename: types.optional(types.literal("Public"), "Public"),
    operators: types.union(types.undefined, types.null, types.late((): any => OperatorConnectionModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PublicModelSelector extends QueryBuilder {
  operators(builder?: string | OperatorConnectionModelSelector | ((selector: OperatorConnectionModelSelector) => OperatorConnectionModelSelector)) { return this.__child(`operators`, OperatorConnectionModelSelector, builder) }
}
export function selectFromPublic() {
  return new PublicModelSelector()
}

export const publicModelPrimitives = selectFromPublic()
