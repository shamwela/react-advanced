import React, { useState } from 'react'

function withTooltip(Component) {
  return function WithTooltip(props) {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
      <div
        onMouseOver={() => setShowTooltip(true)}
        onMouseOut={() => setShowTooltip(false)}
      >
        <Component showTooltip={showTooltip} {...props} />
      </div>
    )
  }
}

export default withTooltip
