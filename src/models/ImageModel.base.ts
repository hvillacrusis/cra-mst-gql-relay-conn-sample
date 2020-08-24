/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ImageBase
 * auto generated base class for the model ImageModel.
 */
export const ImageModelBase = ModelBase
  .named('Image')
  .props({
    __typename: types.optional(types.literal("Image"), "Image"),
    url: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ImageModelSelector extends QueryBuilder {
  get url() { return this.__attr(`url`) }
}
export function selectFromImage() {
  return new ImageModelSelector()
}

export const imageModelPrimitives = selectFromImage().url
