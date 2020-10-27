import { useState } from 'react';
import Css from './components/css';
import Html from './components/html';
import JavaScript from './components/javascript';
import Result from './components/result';
import './App.scss';

const App = () => {

  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  return (
    <div className="box">
      <Html code={htmlCode} handler={setHtmlCode}/>
      <Css code={cssCode} handler={setCssCode}/>
      <JavaScript code={jsCode} handler={setJsCode}/>
      <Result html={htmlCode} css={cssCode} js={jsCode}/>
    </div>
  );
};

export default App;
