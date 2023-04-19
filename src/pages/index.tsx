import React from 'react';
import ReactDOM from 'react-dom';
import SampleComponent from '../components/SampleComponent';
import "../styles/main.scss";

const App: React.FC = () => {
  return (
    <div>
      <SampleComponent text="Hello, React w/ Typescript, Storybook, and SCSS!" />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
