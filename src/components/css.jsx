import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";

const Css = ({ code, handler }) => {
  return (
    <div className="field css-box">
      <div className="title">CSS</div>
      <AceEditor
        className="input"
        name="htmlcodebox"
        value={code}
        onChange={(value) => handler(value)}
        editorProps={{
          theme: 'monokai',
          mode: 'css',
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