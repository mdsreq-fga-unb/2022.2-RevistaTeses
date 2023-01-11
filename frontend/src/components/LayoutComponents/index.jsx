import "./styles.css";

const LayoutComponents = (props) => {
  return (
    <div className="container">
      <div className="container-layout">
        <div className="wrap-layout">{props.children}</div>
      </div>
    </div>
  );
};

export default LayoutComponents;