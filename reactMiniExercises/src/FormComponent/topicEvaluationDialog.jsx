import React, { Fragment } from 'react'
import TopicLoveVoLDialog from './formDialogs/topicLoveVoLDialog';
import { useState } from "react";
import SubValuesItem from './formDialogs/SubValuesItem';
import FavouriteTopic from './formDialogs/favoritTopicDialog';
import FormVm from './formDialogs/test/FormVm';


function TopicEvaluationDialog(formStateAndEvents) {
   
   const [subValues,setSubValues] = useState([]);

  //vm object will be initalize with the life cycle of the screen(main screen jsx function)
  //* will get as a constrcuter argument the allreday initalized state set callback function
  const [testUiState,setTestUiState] = useState({name:"FrontEnd",loveVal:0,favTopic:"none",subArchive:[{"id":subValues.length,"loveVal":"loveVal","favouriteTopic":"favTopic"}]}); 
  //to make sure it will not be reInitalized thorugh renders I will currently use a state to initalize it
  const formVm = useState(new FormVm(testUiState,setTestUiState))[0];


   const setLoveValue = function(readVal){
    formVm.onLoveVal(readVal.target.value);
  }

   const setFavoTopic = function(readVal){
    formVm.onFavTopic(readVal.target.value);
   }

   const setName = function(readVal){
    formVm.onName(readVal.target.value);
   }

   const onSubmitF = function(){
    //check how can I get reference to the current state
    //setSubValues(subValues.concat([{"id":subValues.length,"loveVal":loveVal,"favouriteTopic":favTopic}]));
    formVm.onSubmit();
   }

   const onItemnRemove = function(id){
    formVm.onArchiveItem(id);
   }

  const theName =`How do you like ${testUiState.name}`;
  return (
    <section className="formSection">
        <h1>{theName}</h1>
        <FavouriteTopic currentVal={testUiState.name} onPick={setName} />
        <TopicLoveVoLDialog currentVal = {testUiState.loveVal} onPick={setLoveValue}/>
        <FavouriteTopic currentVal={testUiState.favTopic} onPick={setFavoTopic} />
        <button onClick={onSubmitF}>Submit form</button>


        <h1>Submited resultes:</h1>
        {testUiState.subArchive.map((item)=>{
            return <SubValuesItem a = {{...item}} onRemove = {onItemnRemove}/>
        })}

    </section>
  )
}

export default TopicEvaluationDialog
