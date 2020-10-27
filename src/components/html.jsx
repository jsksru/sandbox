const Html = ({ code }) => {
  return (
    <div className="field html-box">
      <div className="title">HTML</div>
  <textarea className="input">{code}</textarea>
    </div>
  );
};

export default Html;