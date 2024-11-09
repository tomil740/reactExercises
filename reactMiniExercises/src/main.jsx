import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import formStatesAndEvents from './FormComponent/formUiState'
import TopicEvaluationDialog from './FormComponent/topicEvaluationDialog';
import '../src/FormComponent/form.css';

const data = formStatesAndEvents;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopicEvaluationDialog formStateAndEvents = {data}/>
  </StrictMode>,
)
