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
 * SkillBase
 * auto generated base class for the model SkillModel.
 */
export const SkillModelBase = ModelBase
  .named('Skill')
  .props({
    __typename: types.optional(types.literal("Skill"), "Skill"),
    skillId: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    avatar: types.union(types.undefined, types.null, types.late((): any => ImageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SkillModelSelector extends QueryBuilder {
  get skillId() { return this.__attr(`skillId`) }
  get name() { return this.__attr(`name`) }
  get description() { return this.__attr(`description`) }
  avatar(builder?: string | ImageModelSelector | ((selector: ImageModelSelector) => ImageModelSelector)) { return this.__child(`avatar`, ImageModelSelector, builder) }
}
export function selectFromSkill() {
  return new SkillModelSelector()
}

export const skillModelPrimitives = selectFromSkill().skillId.name.description
