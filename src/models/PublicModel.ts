import { Instance } from "mobx-state-tree"
import { PublicModelBase } from "./PublicModel.base"

/* The TypeScript type of an instance of PublicModel */
export interface PublicModelType extends Instance<typeof PublicModel.Type> {}

/* A graphql query fragment builders for PublicModel */
export { selectFromPublic, publicModelPrimitives, PublicModelSelector } from "./PublicModel.base"

/**
 * PublicModel
 */
export const PublicModel = PublicModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
