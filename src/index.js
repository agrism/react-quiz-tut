import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './components/Quiz';
import { QuizProvider } from './contexts/quiz';
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
