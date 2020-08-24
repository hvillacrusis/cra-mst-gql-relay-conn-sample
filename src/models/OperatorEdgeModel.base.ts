/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OperatorModel, OperatorModelType } from "./OperatorModel"
import { OperatorModelSelector } from "./OperatorModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: OperatorModelType;
}

/**
 * OperatorEdgeBase
 * auto generated base class for the model OperatorEdgeModel.
 */
export const OperatorEdgeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OperatorEdge')
  .props({
    __typename: types.optional(types.literal("OperatorEdge"), "OperatorEdge"),
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OperatorModel))),
    cursor: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OperatorEdgeModelSelector extends QueryBuilder {
  get cursor() { return this.__attr(`cursor`) }
  node(builder?: string | OperatorModelSelector | ((selector: OperatorModelSelector) => OperatorModelSelector)) { return this.__child(`node`, OperatorModelSelector, builder) }
}
export function selectFromOperatorEdge() {
  return new OperatorEdgeModelSelector()
}

export const operatorEdgeModelPrimitives = selectFromOperatorEdge().cursor
