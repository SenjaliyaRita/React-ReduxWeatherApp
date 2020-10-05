import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import { average } from 'utils/constants'

export default props => (
  <div>
    <Sparklines height={ props.height } width={ props.width } data={ props.data }>
      <SparklinesLine color={ props.color } />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    {/* <div>{ average(props.data) } { props.units }</div> */}
  </div>
)
