import { Instance } from "mobx-state-tree"
import { PhaseModelBase } from "./PhaseModel.base"

/* The TypeScript type of an instance of PhaseModel */
export interface PhaseModelType extends Instance<typeof PhaseModel.Type> {}

/* A graphql query fragment builders for PhaseModel */
export { selectFromPhase, phaseModelPrimitives, PhaseModelSelector } from "./PhaseModel.base"

/**
 * PhaseModel
 */
export const PhaseModel = PhaseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
