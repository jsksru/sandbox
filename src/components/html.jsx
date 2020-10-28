import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";

const Html = ({ code, handler }) => {
  return (
    <div className="field html-box">
      <div className="title">HTML</div>
      <AceEditor
        className="input"
        value={code}
        onChange={(value) => handler(value)}
        mode="html"
        theme="monokai"
        fontSize={16}
        showGutter={true}
        highlightActiveLine={true}
        name="htmlcodebox"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default Html;