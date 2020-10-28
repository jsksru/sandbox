import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";

const JavaScript = ({ code, handler }) => {
  return (
    <div className="field js-box">
      <div className="title">JavaScript</div>
      <AceEditor
        className="input"
        name="htmlcodebox"
        value={code}
        onChange={(value) => handler(value)}
        editorProps={{
          theme: 'monokai',
          mode: 'javascript',
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

export default JavaScript;