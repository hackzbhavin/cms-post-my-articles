import { useEffect, useState } from "react";
import { IToastProps } from "../interfaces";
import { ToastVariants } from "../enums";

export default function Toast({
  message,
  type = ToastVariants.INFO,
  duration = 3000,
  onClose,
}: IToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
      <div className={`toast toast-${type}`}>
        <p>{message}</p>
      </div>
  );
}
