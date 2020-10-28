import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-emmet";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/theme-monokai";

const Css = ({ code, handler }) => {
  return (
    <div className="field css-box">
      <div className="title">CSS</div>
      <AceEditor
        theme="monokai"
        mode="css"
        className="input"
        name="csscodebox"
        value={code}
        onChange={(value) => handler(value)}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          showGutter: true,
          highlightActiveLine: true,
          fontSize: 16,
          tabSize: 2
        }}
      />
    </div>
  );
};

export default Css;