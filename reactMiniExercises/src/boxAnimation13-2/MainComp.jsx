import { useEffect, useRef, useState } from "react"

function MainComp(){

const boxEle = useRef(null);

/*
    by default run after every rerender(when we wont send any dependencies)
    * when attech dependencies we will get the init render and from then only according to the dependencies
*/
//we will use the useEffect only to get an constrctour init call
useEffect(()=>{
    onBox1();
},[boxEle])

/*
useEffect to update and a ui state
*/
//1-> a change to the dependency ui change casue rerender by react ... 
//2-> afterward the useEffect get called after a ui state change(the dependency...)
//3-> the use effect apply another UI cahgne 
//4-> the use effect inialize all of the process again...

//compare to using regular function:
//1-> a function get called !!to apply the inialize change!!
//2-> the channge is apply casue rerender once!


function onBox1(){
    boxEle.current.style.width = "180px";
    boxEle.current.style.height = "180px";
    onBox();
}
function onBox2(){
    boxEle.current.style.width = "380px";
    boxEle.current.style.height = "380px";
    onBox()
}
function onBox3(){
    boxEle.current.style.width = "580px";
    boxEle.current.style.height = "580px";
    onBox();
}

function onBox(){
    setTimeout(() => {
        boxEle.current.style.scale = "1";
        setTimeout(()=>{
            boxEle.current.style.scale = "0";
        },4000)}
    , 1000);
}

  return (
    <div>
        <div style={{backgroundColor:"red", scale:"0", width:"250px", height:"255px"}} ref={boxEle} className="box1">for size...</div>
        <button onClick={onBox1}>Box1</button>
        <button onClick={onBox2}>Box2</button>
        <button onClick={onBox3}>Box3</button>
    </div>
  )
}

export default MainComp
