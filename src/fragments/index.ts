import { selectFromOperator } from './../models'
import { selectFromPublic } from './../models'
import { selectFromOperatorConnection } from './../models'

// prettier-ignore
export const OPERATOR_FRAGMENT = selectFromOperator()
  .name
  .avatar( a => a.url )
  .phases( p => 
          p.phaseId
            .cost( c => c.costId
                        .count
                        .type
                        .avatar( a => a.url )
            )
            .skills( s => s.name.skillId.description.avatar( a => a.url ))
  )
  .portrait( p => p.url )
  .profession
  .rarity
  .toString()

// prettier-ignore
export const PUBLIC_FRAGMENT = selectFromPublic()
  .operators((op) => 
    op.pageInfo( (pageInfo) => 
                  pageInfo.startCursor
                          .endCursor
                          .hasNextPage
                          .hasPreviousPage)
        .edges( (e) => 
                e.cursor
                  .node( OPERATOR_FRAGMENT )
        )
  )
  .toString()

// prettier-ignore
export const OPERATOR_CONNECTION_FRAGMENT = selectFromOperatorConnection()
  .pageInfo(
    (pageInfo) => pageInfo.startCursor.endCursor.hasNextPage.hasPreviousPage,
  )
  .edges((e) => e.cursor.node(OPERATOR_FRAGMENT))
  .toString()
