import React, { Component } from 'react'
import withTooltip from './withTooltip'

class Movie extends Component {
  render() {
    return (
      <>
        Movie
        {this.props.showTooltip && <div>Some tooltip</div>}
      </>
    )
  }
}

export default withTooltip(Movie)
