import React, { Component } from 'react'

import Query from '../models/Query'

import QueryEditor from './/QueryEditor'

class CancelWanted extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: new Query([
        //defines the list of fields in the query
        { required: true, name: 'Warrant ID', code: 'wid', set: [], alpha: false, numeric: true, special: false, custom: null, min: 10, max: 10, input: '' },
        { required: true, name: 'Reason for Cancellation', code: 'res', set: [], alpha: true, numeric: true, special: true, custom: null, min: 10, max: 150, input: '' },
        { required: true, name: 'Date of Cancellation', code: 'dat', set: [], alpha: true, numeric: true, special: false, custom: 'date', min: 8, max: 8, input: '' }
      ])
    }

    this.refresh = this.refresh.bind(this)
  }

  refresh() {
    this.setState(this.state)
  }

  render() {
    return (
      <div id="app">
        <div className="main-container">
          <QueryEditor query={this.state.query} />
        </div>
      </div>
    )
  }
}

export default CancelWanted;
