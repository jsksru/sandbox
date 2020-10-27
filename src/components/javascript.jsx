const JavaScript = ({ code, handler }) => {
  return (
    <div className="field js-box">
      <div className="title">JavaScript</div>
      <textarea className="input" value={code} onChange={(e) => handler(e.target.value)}></textarea>
    </div>
  );
};

export default JavaScript;