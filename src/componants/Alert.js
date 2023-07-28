import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "55px" }}>
      {props.alert && (
        <div className="alert alert-primary" role="alert">
          <strong>{props.alert.msg}</strong>
        </div>
      )}
    </div>
  );
}
export default Alert;
