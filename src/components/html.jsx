import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/ext-language_tools";

const Html = ({ code, handler }) => {
  return (
    <div className="field html-box">
      <div className="title">HTML</div>
      <AceEditor
        className="input"
        name="htmlcodebox"
        value={code}
        onChange={(value) => handler(value)}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          theme: 'monokai',
          mode: 'html',
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

export default Html;