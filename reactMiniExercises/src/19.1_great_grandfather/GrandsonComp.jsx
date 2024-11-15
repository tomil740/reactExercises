import React, { useContext } from 'react'
import {GrandFatherContext} from './GrandFatherComp'

const GrandsonComp = () => {

    const user = React.useContext(GrandFatherContext);

  return (
    <div>
        <h1>{user}</h1>
    </div>
  )
}

export default GrandsonComp
