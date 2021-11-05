import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

import './status-alert.css';

const variants = new Map([
  ['success', { variant: 'success', prefix: 'Success', icon: 'bi-check-circle-fill' }],
  ['failure', { variant: 'danger', prefix: 'Failure', icon: 'bi-exclamation-octagon-fill' }],
  ['warning', { variant: 'warning', prefix: 'Warning', icon: 'bi-exclamation-triangle-fill' }],
]);

function StatusAlert({
  message,
  variant = 'success',
  show = false,
  delay = 3000,
  onDismiss,
}) {
  const [isShow, setIsShow] = useState(show);

  useEffect(() => {
    setIsShow(show);
  }, [show]);

  setTimeout(() => {
    setIsShow(false);
    onDismiss && onDismiss();
  }, delay);

  const config = variants.get(variant);

  return (
    <Alert className="status-alert"
           variant={config.variant}
           show={isShow}
    >
      <i className={config.icon} />
      <strong className="mx-2">{config.prefix}:</strong>{message}
    </Alert>
  );
}

export default StatusAlert;
