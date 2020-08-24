import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { createHttpClient } from 'mst-gql'
import { RootStore, StoreContext } from './models'

const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient('http://localhost:8181/graphql'),
})

// @ts-ignore
window.store = rootStore

ReactDOM.render(
  <StoreContext.Provider value={rootStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreContext.Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
