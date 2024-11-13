import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import formStatesAndEvents from './FormComponent/formUiState'
import TopicEvaluationDialog from './FormComponent/topicEvaluationDialog';
import '../src/FormComponent/form.css';
import ImagesContainer from './react10.2/ImagesContainer';
import FormComponent from './FormValidationExe/FormComponent'
import './FormValidationExe/FormComponent.css'
import MainComponent from './FavoriteColorExe/mainComponent';

const data = formStatesAndEvents;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainComponent/>
  </StrictMode>,
)
