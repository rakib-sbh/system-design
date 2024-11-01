import { useState } from "react";
import Notification from "../components/notification/Notification";

const useNotification = (position = "top-right") => {
  const [notification, setNotification] = useState(null);

  let timer;

  const handleClose = () => {
    clearTimeout(timer);
    setNotification(null);
  };

  const triggerNotification = (notificationProps) => {
    clearTimeout(timer);
    setNotification({ ...notificationProps, onClose: handleClose });
    timer = setTimeout(() => {
      setNotification(null);
    }, notificationProps?.duration || 3000);
  };

  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : (
    <></>
  );

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
