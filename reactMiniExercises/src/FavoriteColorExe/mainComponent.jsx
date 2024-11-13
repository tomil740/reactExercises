import { useEffect, useRef, useState } from "react"

function mainComponent(){

    const [color,setColor] = useState("");
    const theEle = useRef(null);

    useEffect(()=>{
        setTimeout(()=>
            setColor("red")
        ,1000);
    })

    useEffect(()=>{
        theEle.current.style.backgroundColor = color;
    }, [color])

  return (
    <div>
        <h1>{`My favorite color is ${color}`}</h1>
        <div style={{width:"250px", height:"255px"}} ref={theEle} id="someId"></div>
    </div>
  )
}

export default mainComponent
