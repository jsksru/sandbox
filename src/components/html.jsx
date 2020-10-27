const Html = ({ code, handler }) => {
  return (
    <div className="field html-box">
      <div className="title">HTML</div>
      <textarea className="input" value={code} onChange={(e) => handler(e.target.value)}></textarea>
    </div>
  );
};

export default Html;