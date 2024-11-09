import React, { Fragment } from 'react'

const FavoritTopicDialog = ({currentVal,onPick}) => {
  return (
    <div className = "favTopic">
        <h2>the favourite topic is :</h2>
        <input type='text' value={currentVal} onChange={onPick}/>
    </div>
  )
}

export default FavoritTopicDialog
