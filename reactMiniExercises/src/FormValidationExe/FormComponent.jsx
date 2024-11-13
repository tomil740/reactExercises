import { useRef, useState } from "react"

function FormComponent(){

    //save the input field ref in order to mark them focus on errors
    const nameInputEle = useRef(null);
    const emailInputEle = useRef(null);

    //declare ui states for each input field and matched error message on need
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [emailErrorMes,setEmailErrorMes] = useState("");
    const [nameErrorMes,setNameErrorMes] = useState("");


    //on submit apply the function below to vlaidate the matched input
    //with the matched needed state actions to update our UI accordingly and informe the user
    function onUserName(){
        if(name >=3){
            setNameErrorMes("");
        }else{
            nameInputEle.current.focus()
            setNameErrorMes("name is invalid...");
        }
    }

    function onEmail(){
        if(email.indexOf('@') != -1){
            setEmailErrorMes("");
        }else{
            emailInputEle.current.focus()
            setEmailErrorMes("email is invalid...");
        }
    }

    //will be active on submition of our form...
    function onsubmitForm(e){
        e.preventDefault();
        onUserName();
        onEmail();
    }

  return (
    <form onSubmit={onsubmitForm} action="" className="formContainer">
        <input ref={nameInputEle} value={name} onChange={(name)=>setName(name.target.value)} type="text" name="userName" id="userName" />
        {nameErrorMes && <p style={{ color: 'red' }}>{nameErrorMes}</p>}
        <input ref={emailInputEle} value={email} onChange={(email)=>setEmail(email.target.value)} type="text" name="email" />
        {emailErrorMes && <p style={{ color: 'red' }}>{emailErrorMes}</p>}

        <button>Submit :</button>
    </form>
  )
}

export default FormComponent
