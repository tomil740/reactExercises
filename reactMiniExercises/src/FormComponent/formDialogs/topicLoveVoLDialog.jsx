import React, { Fragment } from 'react'

const TopicLoveVoLDialog = ({currentVal,onPick}) => {
  return (
    <Fragment>
        <input type="range" id="LoveVal" name="LoveVal" min="0" max="100"
         value={currentVal} onChange={onPick}/>
    </Fragment>
  )
}

export default TopicLoveVoLDialog
