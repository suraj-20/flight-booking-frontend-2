import React, { useEffect } from "react";
import "./Alert.css";

const Alert = ({ message, type, onClose, duration = 5000 }) => {
  useEffect(() => {
    // Automatically close the alert after the specified duration
    const timer = setTimeout(onClose, duration);

    // Clear the timeout if the component is unmounted or onClose is called
    return () => clearTimeout(timer);
  }, [onClose, duration]);
  return (
    <div className={`alert alert-${type}`}>
      <span className="alert-message">{message}</span>
      <button className="alert-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
