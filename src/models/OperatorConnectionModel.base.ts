/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OperatorEdgeModel, OperatorEdgeModelType } from "./OperatorEdgeModel"
import { OperatorEdgeModelSelector } from "./OperatorEdgeModel.base"
import { PageInfoModel, PageInfoModelType } from "./PageInfoModel"
import { PageInfoModelSelector } from "./PageInfoModel.base"
import { RootStoreType } from "./index"


/**
 * OperatorConnectionBase
 * auto generated base class for the model OperatorConnectionModel.
 */
export const OperatorConnectionModelBase = ModelBase
  .named('OperatorConnection')
  .props({
    __typename: types.optional(types.literal("OperatorConnection"), "OperatorConnection"),
    pageInfo: types.union(types.undefined, types.late((): any => PageInfoModel)),
    edges: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => OperatorEdgeModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OperatorConnectionModelSelector extends QueryBuilder {
  pageInfo(builder?: string | PageInfoModelSelector | ((selector: PageInfoModelSelector) => PageInfoModelSelector)) { return this.__child(`pageInfo`, PageInfoModelSelector, builder) }
  edges(builder?: string | OperatorEdgeModelSelector | ((selector: OperatorEdgeModelSelector) => OperatorEdgeModelSelector)) { return this.__child(`edges`, OperatorEdgeModelSelector, builder) }
}
export function selectFromOperatorConnection() {
  return new OperatorConnectionModelSelector()
}

export const operatorConnectionModelPrimitives = selectFromOperatorConnection()
