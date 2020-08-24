import { Instance } from "mobx-state-tree"
import { SkillModelBase } from "./SkillModel.base"

/* The TypeScript type of an instance of SkillModel */
export interface SkillModelType extends Instance<typeof SkillModel.Type> {}

/* A graphql query fragment builders for SkillModel */
export { selectFromSkill, skillModelPrimitives, SkillModelSelector } from "./SkillModel.base"

/**
 * SkillModel
 */
export const SkillModel = SkillModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
