import { Instance } from "mobx-state-tree"
import { OperatorEdgeModelBase } from "./OperatorEdgeModel.base"

/* The TypeScript type of an instance of OperatorEdgeModel */
export interface OperatorEdgeModelType extends Instance<typeof OperatorEdgeModel.Type> {}

/* A graphql query fragment builders for OperatorEdgeModel */
export { selectFromOperatorEdge, operatorEdgeModelPrimitives, OperatorEdgeModelSelector } from "./OperatorEdgeModel.base"

/**
 * OperatorEdgeModel
 */
export const OperatorEdgeModel = OperatorEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
