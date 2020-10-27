const Css = ({ code, handler }) => {
  return (
    <div className="field css-box">
      <div className="title">CSS</div>
      <textarea className="input" value={code} onChange={(e) => handler(e.target.value)}></textarea>
    </div>
  );
};

export default Css;