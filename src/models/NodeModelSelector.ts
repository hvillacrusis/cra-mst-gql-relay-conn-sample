/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { OperatorModelSelector } from "./OperatorModel.base"

export class NodeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  operator(builder?: string | OperatorModelSelector | ((selector: OperatorModelSelector) => OperatorModelSelector)) { return this.__inlineFragment(`Operator`, OperatorModelSelector, builder) }
}
export function selectFromNode() {
  return new NodeModelSelector()
}

export const nodeModelPrimitives = selectFromNode()