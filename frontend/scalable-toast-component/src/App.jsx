import useNotification from "./hooks/useNotification";

const App = () => {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-left");
  const {
    NotificationComponent: ErrorNotificationComponent,
    triggerNotification: triggerErrorNotification,
  } = useNotification("bottom-right");

  return (
    <div className="App">
      {NotificationComponent}
      {ErrorNotificationComponent}
      <h1>Toast Component</h1>
      <div className="btns">
        <button
          onClick={() =>
            triggerNotification({
              type: "success",
              message: "This is a success message",
              duration: 5000,
            })
          }
        >
          Show Success
        </button>
        <button
          onClick={() =>
            triggerErrorNotification({
              type: "error",
              message: "This is a success message",
              duration: 5000,
            })
          }
        >
          Show Error
        </button>
      </div>
    </div>
  );
};

export default App;
