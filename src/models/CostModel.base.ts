/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ImageModel, ImageModelType } from "./ImageModel"
import { ImageModelSelector } from "./ImageModel.base"
import { RootStoreType } from "./index"


/**
 * CostBase
 * auto generated base class for the model CostModel.
 */
export const CostModelBase = ModelBase
  .named('Cost')
  .props({
    __typename: types.optional(types.literal("Cost"), "Cost"),
    costId: types.union(types.undefined, types.null, types.string),
    count: types.union(types.undefined, types.null, types.integer),
    type: types.union(types.undefined, types.null, types.string),
    avatar: types.union(types.undefined, types.null, types.late((): any => ImageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CostModelSelector extends QueryBuilder {
  get costId() { return this.__attr(`costId`) }
  get count() { return this.__attr(`count`) }
  get type() { return this.__attr(`type`) }
  avatar(builder?: string | ImageModelSelector | ((selector: ImageModelSelector) => ImageModelSelector)) { return this.__child(`avatar`, ImageModelSelector, builder) }
}
export function selectFromCost() {
  return new CostModelSelector()
}

export const costModelPrimitives = selectFromCost().costId.count.type
