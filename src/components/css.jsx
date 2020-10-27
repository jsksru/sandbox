const Css = ({ code }) => {
  return (
    <div className="field css-box">
      <div className="title">CSS</div>
      <textarea className="input">{code}</textarea>
    </div>
  );
};

export default Css;