/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ImageModel, ImageModelType } from "./ImageModel"
import { ImageModelSelector } from "./ImageModel.base"
import { PhaseModel, PhaseModelType } from "./PhaseModel"
import { PhaseModelSelector } from "./PhaseModel.base"
import { RootStoreType } from "./index"


/**
 * OperatorBase
 * auto generated base class for the model OperatorModel.
 */
export const OperatorModelBase = ModelBase
  .named('Operator')
  .props({
    __typename: types.optional(types.literal("Operator"), "Operator"),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    avatar: types.union(types.undefined, types.null, types.late((): any => ImageModel)),
    portrait: types.union(types.undefined, types.null, types.late((): any => ImageModel)),
    rarity: types.union(types.undefined, types.null, types.string),
    profession: types.union(types.undefined, types.null, types.string),
    phases: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => PhaseModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OperatorModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get rarity() { return this.__attr(`rarity`) }
  get profession() { return this.__attr(`profession`) }
  avatar(builder?: string | ImageModelSelector | ((selector: ImageModelSelector) => ImageModelSelector)) { return this.__child(`avatar`, ImageModelSelector, builder) }
  portrait(builder?: string | ImageModelSelector | ((selector: ImageModelSelector) => ImageModelSelector)) { return this.__child(`portrait`, ImageModelSelector, builder) }
  phases(builder?: string | PhaseModelSelector | ((selector: PhaseModelSelector) => PhaseModelSelector)) { return this.__child(`phases`, PhaseModelSelector, builder) }
}
export function selectFromOperator() {
  return new OperatorModelSelector()
}

export const operatorModelPrimitives = selectFromOperator().name.rarity.profession
