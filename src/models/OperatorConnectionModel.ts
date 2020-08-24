import { Instance } from "mobx-state-tree"
import { OperatorConnectionModelBase } from "./OperatorConnectionModel.base"

/* The TypeScript type of an instance of OperatorConnectionModel */
export interface OperatorConnectionModelType extends Instance<typeof OperatorConnectionModel.Type> {}

/* A graphql query fragment builders for OperatorConnectionModel */
export { selectFromOperatorConnection, operatorConnectionModelPrimitives, OperatorConnectionModelSelector } from "./OperatorConnectionModel.base"

/**
 * OperatorConnectionModel
 */
export const OperatorConnectionModel = OperatorConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
