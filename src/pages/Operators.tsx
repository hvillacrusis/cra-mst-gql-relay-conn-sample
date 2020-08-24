/** @jsx jsx */
import React, { Fragment, useState, useEffect } from 'react'
import { jsx } from '@emotion/core'

import { useQuery } from '../models'
import { observer } from 'mobx-react'

const Operators = (props) => {
  const { loading, setQuery, data, store, error } = useQuery((store) =>
    store.requestPaginatedOperators({
      first: 10,
      after: undefined,
      before: undefined,
      last: undefined,
    }),
  )

  if (data) {
  }

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <p>Error</p>
      </div>
    )
  }

  return (
    <div>
      <button
        disabled={!data.pageRequestOperators.pageInfo.hasNextPage}
        onClick={() => {
          console.log(data.pageRequestOperators.pageInfo)
          setQuery(
            store.requestPaginatedOperators({
              first: 60,
              after: data.pageRequestOperators.pageInfo.endCursor,
              before: undefined,
              last: undefined,
            }),
          )
        }}>
        get next 10
      </button>
      {store.vOperators().map((o) => {
        return (
          <div key={o.id}>
            {o.id}
            {o.name}
          </div>
        )
      })}
    </div>
  )
}

export default observer(Operators)
