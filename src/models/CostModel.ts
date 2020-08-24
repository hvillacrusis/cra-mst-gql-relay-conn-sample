import { Instance } from "mobx-state-tree"
import { CostModelBase } from "./CostModel.base"

/* The TypeScript type of an instance of CostModel */
export interface CostModelType extends Instance<typeof CostModel.Type> {}

/* A graphql query fragment builders for CostModel */
export { selectFromCost, costModelPrimitives, CostModelSelector } from "./CostModel.base"

/**
 * CostModel
 */
export const CostModel = CostModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
