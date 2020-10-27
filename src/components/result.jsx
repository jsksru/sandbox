const Result = ({ html, css, js }) => {

  const htmlCode = `<html><head><style>${css}</style></head><body>${html}<script>${js}</script></body></html>`;

  return (
    <div className="field result-box">
      <iframe title="result" srcDoc={htmlCode} className="output"></iframe>
    </div>
  );
};

export default Result;