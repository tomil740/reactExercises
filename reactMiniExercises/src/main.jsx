import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import formStatesAndEvents from './FormComponent/formUiState'
import TopicEvaluationDialog from './FormComponent/topicEvaluationDialog';
import '../src/FormComponent/form.css';
import ImagesContainer from './react10.2/ImagesContainer';

const data = formStatesAndEvents;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImagesContainer/>
  </StrictMode>,
)
