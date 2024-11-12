import React from 'react'

const SubValuesItem = ({a:{id,loveVal,favouriteTopic},onRemove}) => {
  
  return (
    <div key={id}>
        <h1>SubmitedItem : </h1>
        <h3>the loveVal : {loveVal}</h3>
        <h3>the favourite topic is :{favouriteTopic}</h3>
        <button onClick={()=>onRemove(id)}>remove item</button>
    </div>
  )
}

export default SubValuesItem
