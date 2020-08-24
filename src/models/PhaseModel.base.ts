/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CostModel, CostModelType } from "./CostModel"
import { CostModelSelector } from "./CostModel.base"
import { SkillModel, SkillModelType } from "./SkillModel"
import { SkillModelSelector } from "./SkillModel.base"
import { RootStoreType } from "./index"


/**
 * PhaseBase
 * auto generated base class for the model PhaseModel.
 */
export const PhaseModelBase = ModelBase
  .named('Phase')
  .props({
    __typename: types.optional(types.literal("Phase"), "Phase"),
    phaseId: types.union(types.undefined, types.null, types.string),
    cost: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => CostModel)))),
    skills: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => SkillModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PhaseModelSelector extends QueryBuilder {
  get phaseId() { return this.__attr(`phaseId`) }
  cost(builder?: string | CostModelSelector | ((selector: CostModelSelector) => CostModelSelector)) { return this.__child(`cost`, CostModelSelector, builder) }
  skills(builder?: string | SkillModelSelector | ((selector: SkillModelSelector) => SkillModelSelector)) { return this.__child(`skills`, SkillModelSelector, builder) }
}
export function selectFromPhase() {
  return new PhaseModelSelector()
}

export const phaseModelPrimitives = selectFromPhase().phaseId
