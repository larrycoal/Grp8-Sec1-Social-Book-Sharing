import React from "react";
import "./Button.scss";
const Button = ({ text, loading, action, disable }) => {
  return (
    <button onClick={action} className="btn btn-primary p-2" disabled={disable}>
      <div className={loading ? "spinner-border" : null}>
        {!loading ? text : null}
      </div>
    </button>
  );
};

export default Button;
