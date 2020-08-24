/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { PublicModel, PublicModelType } from "./PublicModel"
import { publicModelPrimitives, PublicModelSelector } from "./PublicModel.base"
import { OperatorConnectionModel, OperatorConnectionModelType } from "./OperatorConnectionModel"
import { operatorConnectionModelPrimitives, OperatorConnectionModelSelector } from "./OperatorConnectionModel.base"
import { PageInfoModel, PageInfoModelType } from "./PageInfoModel"
import { pageInfoModelPrimitives, PageInfoModelSelector } from "./PageInfoModel.base"
import { OperatorEdgeModel, OperatorEdgeModelType } from "./OperatorEdgeModel"
import { operatorEdgeModelPrimitives, OperatorEdgeModelSelector } from "./OperatorEdgeModel.base"
import { OperatorModel, OperatorModelType } from "./OperatorModel"
import { operatorModelPrimitives, OperatorModelSelector } from "./OperatorModel.base"
import { ImageModel, ImageModelType } from "./ImageModel"
import { imageModelPrimitives, ImageModelSelector } from "./ImageModel.base"
import { PhaseModel, PhaseModelType } from "./PhaseModel"
import { phaseModelPrimitives, PhaseModelSelector } from "./PhaseModel.base"
import { CostModel, CostModelType } from "./CostModel"
import { costModelPrimitives, CostModelSelector } from "./CostModel.base"
import { SkillModel, SkillModelType } from "./SkillModel"
import { skillModelPrimitives, SkillModelSelector } from "./SkillModel.base"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  operators: ObservableMap<string, OperatorModelType>,
  publics: ObservableMap<string, PublicModelType>
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Public', () => PublicModel], ['OperatorConnection', () => OperatorConnectionModel], ['PageInfo', () => PageInfoModel], ['OperatorEdge', () => OperatorEdgeModel], ['Operator', () => OperatorModel], ['Image', () => ImageModel], ['Phase', () => PhaseModel], ['Cost', () => CostModel], ['Skill', () => SkillModel]], ['Operator', 'Public'], "js"))
  .props({
    operators: types.optional(types.map(types.late((): any => OperatorModel)), {}),
    publics: types.optional(types.map(types.late((): any => PublicModel)), {})
  })
  .actions(self => ({
    queryPublic(variables?: {  }, resultSelector: string | ((qb: PublicModelSelector) => PublicModelSelector) = publicModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ public: PublicModelType}>(`query public { public {
        ${typeof resultSelector === "function" ? resultSelector(new PublicModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPageRequestOperators(variables: { first?: number, after?: string, last?: number, before?: string }, resultSelector: string | ((qb: OperatorConnectionModelSelector) => OperatorConnectionModelSelector) = operatorConnectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pageRequestOperators: OperatorConnectionModelType}>(`query pageRequestOperators($first: Int, $after: String, $last: Int, $before: String) { pageRequestOperators(first: $first, after: $after, last: $last, before: $before) {
        ${typeof resultSelector === "function" ? resultSelector(new OperatorConnectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
  })))
