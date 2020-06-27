import React, { useState } from "react";
import classnames from "classnames";

export type AlertType = "success" | "default" | "danger" | "warning";

interface BaseAlertProps {
  type?: AlertType;
  closable?: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const [hide, setHide] = useState(false)
  const {
    type,
    closable,
    onClose,
    title,
    description
  } = props;
  // btn, btn-lg, btn-primary
  const classes = classnames("nan-alert", {
    [`nan-alert-${type}`]: type,
    closable: closable,
    hide: hide
  });
  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose()
    }
    setHide(true)
  }
  return (
    <div className={classes}>
      {title && <h6 className="bold-title">{title}</h6>}
      <p className="nan-alert-desc">{description}</p>
      {closable && <span className="nan-alert-close" onClick={handleClose}>×</span>}
    </div>
  )
};

Alert.defaultProps = {
  closable: false,
  type: "default"
}

export default Alert