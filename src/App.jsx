"use strict"

import React from 'react'
import { Provider } from 'react-redux'

export default class App extends React.Component {

  render() {
    let {store, routes} = this.props

    if ( __DEV__ ) {
      var ReactDevTools = require('redux-devtools/lib/react');
      var DevTools = ReactDevTools.DevTools;
      var DebugPanel = ReactDevTools.DebugPanel;
      var LogMonitor = ReactDevTools.LogMonitor;
    }
    return (
      <div>
        <Provider store={store}>
          {routes}
        </Provider>
        {
          DevTools &&
            <DebugPanel top right bottom>
              <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        }
      </div>
    )
  }
}