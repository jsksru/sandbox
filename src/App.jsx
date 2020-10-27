import { useState } from 'react';
import Css from './components/css';
import Html from './components/html';
import JavaScript from './components/javascript';
import Result from './components/result';
import './App.scss';

const App = () => {

  const [htmlCode, setHtmlCode] = useState('1');
  const [cssCode, setCssCode] = useState('2');
  const [jsCode, setJsCode] = useState('3');

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
