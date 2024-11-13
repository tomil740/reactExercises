import Box2 from "./Box2"
import React, { Fragment, useRef } from 'react';


function Box1(){
    const testRef = useRef(0);
    function incressRef(){
        testRef.current++;
        console.log(testRef.current);
    }
    console.log(testRef.current);
    return (
        <Fragment>
            <h1>{testRef.current}</h1>
            <button onClick={incressRef}>a</button>
        </Fragment>
    )
}

export default Box1;