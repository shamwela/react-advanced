import React from 'react'

function withTooltip(Component) {
  return class WithTooltip extends React.Component {
    state = { showTooltip: false }

    mouseOver = () => this.setState({ showTooltip: true })

    mouseOut = () => this.setState({ showTooltip: false })

    render() {
      const { mouseOver, mouseOut } = this

      return (
        <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <Component showTooltip={this.state.showTooltip} {...this.props} />
        </div>
      )
    }
  }
}

export default withTooltip