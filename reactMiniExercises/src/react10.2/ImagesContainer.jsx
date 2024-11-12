import { useRef } from "react";

function ImagesContainer(){
    const img1 =`https://i.ibb.co/VVrkQbr/example-Og.jpg`;
    const img2 = 'https://i.ibb.co/CHcp0hP/example-Black-white.jpg';
    const theImg = useRef(img1);
    const a = useRef(null);

    function onHover(){
        a.current.src = theImg.current;
        if(theImg.current == img1){
            theImg.current = img2;
        }else{
            theImg.current =img1;
        }
        
    }


  return (
    <div>
        <img onMouseEnter={onHover} onMouseLeave={onHover} ref={a} src={img1}/>
    </div>
  )
}

export default ImagesContainer
