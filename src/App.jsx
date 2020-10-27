import Css from './components/css';
import Html from './components/html';
import JavaScript from './components/javascript';
import Result from './components/result';
import './App.scss';

const App = () => {
  return (
    <div className="box">
      <Html/>
      <Css/>
      <JavaScript/>
      <Result/>
    </div>
  );
};

export default App;
