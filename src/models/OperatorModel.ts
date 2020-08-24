import { Instance } from "mobx-state-tree"
import { OperatorModelBase } from "./OperatorModel.base"

/* The TypeScript type of an instance of OperatorModel */
export interface OperatorModelType extends Instance<typeof OperatorModel.Type> {}

/* A graphql query fragment builders for OperatorModel */
export { selectFromOperator, operatorModelPrimitives, OperatorModelSelector } from "./OperatorModel.base"

/**
 * OperatorModel
 */
export const OperatorModel = OperatorModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
