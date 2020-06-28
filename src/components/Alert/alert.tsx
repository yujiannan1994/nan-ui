import React, { useState } from 'react';
import classNames from 'classnames';

export type AlertType = 'success' | 'default' | 'danger' | 'warning';

export interface BaseAlertProps {
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
  const classes = classNames('nan-alert', {
    [`nan-alert-${type}`]: type,
    hide: hide
  });
  const titleClass = classNames('nan-alert-title', {
    'bold-title': description
  })
  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose()
    }
    setHide(true)
  }
  return (
    <div className={classes}>
      {title && <h6 className={titleClass}>{title}</h6>}
      <p className='nan-alert-desc'>{description}</p>
      {closable && <span className='nan-alert-close' onClick={handleClose}>×</span>}
    </div>
  )
};

Alert.defaultProps = {
  closable: true,
  type: 'default'
}

export default Alert